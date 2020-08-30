import * as gcs from '@google-cloud/storage';
import * as ffmpegStatic from 'ffmpeg-static';
import * as functions from 'firebase-functions';
import * as ffmpeg from 'fluent-ffmpeg';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

import { initConfig } from './config';

const promisifyCommand = (command) => {
  return new Promise((resolve, reject) => {
    command
      .on('end', resolve)
      .on('error', reject)
      .run();
  });
};

interface ProcessAudioData {
  filePath: string;
}

const AUDIO_BITRATE = 24000;
const AUDIO_FILE_TYPE = 'ogg';

const config = initConfig();
const gcsClient = new gcs.Storage();

export const processAudio = functions.https.onCall(
  async (data: ProcessAudioData, context) => {
    try {
      const { filePath } = data;
      const fileBucket = config?.firebaseConfig.storageBucket; // The Storage bucket that contains the file.

      if (fileBucket) {
        const metaDataResponse = await gcsClient
          .bucket(fileBucket)
          .file(filePath)
          .getMetadata();

        const [metaData] = metaDataResponse;

        const contentType = metaData.contentType; // File content type.

        // Exit if this is triggered on a file that is not an audio.
        if (!contentType.startsWith('audio/')) {
          console.log('Not an audio file.');
          return null;
        }

        // Get the file name.
        const fileName = path.basename(filePath);

        // Exit if the audio is already converted.
        if (fileName.endsWith('_output.ogg')) {
          console.log('Already a converted audio.');
          return null;
        }

        // Download file from bucket.
        const bucket = gcsClient.bucket(fileBucket);
        const tempFilePath = path.join(os.tmpdir(), fileName);
        // We add a '_output.flac' suffix to target audio file name. That's where we'll upload the converted audio.
        const targetTempFileName =
          fileName.replace(/\.[^/.]+$/, '') + `_output.${AUDIO_FILE_TYPE}`;
        const targetTempFilePath = path.join(os.tmpdir(), targetTempFileName);
        const targetStorageFilePath = path.join(
          path.dirname(filePath),
          targetTempFileName
        );

        await bucket.file(filePath).download({ destination: tempFilePath });
        console.log('Audio downloaded locally to', tempFilePath);
        // Convert the audio to mono channel using FFMPEG.

        const command = ffmpeg(tempFilePath)
          .setFfmpegPath(ffmpegStatic)
          .audioFrequency(AUDIO_BITRATE)
          .format(AUDIO_FILE_TYPE)
          .output(targetTempFilePath);

        await promisifyCommand(command);
        console.log('Output audio created at', targetTempFilePath);
        // Uploading the audio.
        await bucket.upload(targetTempFilePath, {
          destination: targetStorageFilePath,
        });
        console.log('Output audio uploaded to', targetStorageFilePath);

        // Once the audio has been uploaded delete the local file to free up disk space.
        fs.unlinkSync(tempFilePath);
        fs.unlinkSync(targetTempFilePath);

        console.log('Temporary files removed.', targetTempFilePath);

        return {
          ok: true,
          data: { filePath: '' },
        };
      }

      return {
        ok: false,
        error: 'config?.firebaseConfig.storageBucket === undefined',
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
);
