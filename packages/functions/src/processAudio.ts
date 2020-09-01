import * as ffmpegStatic from 'ffmpeg-static';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as ffmpeg from 'fluent-ffmpeg';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

import { initConfig } from './config';

const promisifyCommand = (command: any) => {
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

const SAMPLE_RATE = 44100;
const AUDIO_FILE_TYPE = 'ogg';
const CONTENT_TYPE = `audio/${AUDIO_FILE_TYPE}`;

initConfig();

export const processAudio = functions.https.onCall(
  async (data: ProcessAudioData, context) => {
    try {
      const { filePath } = data;
      const bucket = admin.storage().bucket();

      const metaDataResponse = await bucket.file(filePath).getMetadata();

      const [metaData] = metaDataResponse;

      const contentType = metaData.contentType; // File content type.

      // Exit if this is triggered on a file that is not an audio.
      if (!contentType.startsWith('audio/')) {
        console.log('Not an audio file.');
        return null;
      }

      // Get the file name.
      const originalFileName = path.basename(filePath);

      // Exit if the audio is already converted.
      if (originalFileName.endsWith('_output.ogg')) {
        console.log('Already a converted audio.');
        return null;
      }

      const originalTempFilePath = path.join(os.tmpdir(), originalFileName);
      const targetFileName =
        originalFileName.replace(/\.[^/.]+$/, '') +
        `_output.${AUDIO_FILE_TYPE}`;
      const targetTempFilePath = path.join(os.tmpdir(), targetFileName);
      const targetStorageFilePath = path.join(
        path.dirname(filePath),
        targetFileName
      );

      await bucket
        .file(filePath)
        .download({ destination: originalTempFilePath });
      console.log('Audio downloaded locally to', originalTempFilePath);
      // Convert the audio to mono channel using FFMPEG.

      const command = ffmpeg(originalTempFilePath)
        .setFfmpegPath(ffmpegStatic)
        .audioFrequency(SAMPLE_RATE)
        .format(AUDIO_FILE_TYPE)
        .output(targetTempFilePath);

      await promisifyCommand(command);
      console.log('Output audio created at', targetTempFilePath);
      // Uploading the audio.
      const upload = await bucket.upload(targetTempFilePath, {
        destination: targetStorageFilePath,
        metadata: { contentType: CONTENT_TYPE },
      });
      console.log('Output audio uploaded to', targetStorageFilePath);

      // delete original
      await bucket.file(filePath).delete();

      // Once the audio has been uploaded delete the local file to free up disk space.
      fs.unlinkSync(originalTempFilePath);
      fs.unlinkSync(targetTempFilePath);

      console.log(
        'Temporary files removed.',
        originalTempFilePath,
        targetTempFilePath
      );

      const signedUrlsResponse = await upload[0].getSignedUrl({
        action: 'read',
        expires: '03-09-2491',
      });

      return {
        ok: true,
        data: {
          filePath: targetStorageFilePath,
          // TODO: get download url
          downloadUrl: signedUrlsResponse[0],
        },
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
);
