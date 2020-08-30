import * as functions from 'firebase-functions';
const gcs = require('@google-cloud/storage')();
import * as ffmpeg_static from 'ffmpeg-static';
import * as ffmpeg from 'fluent-ffmpeg';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

const promisifyCommand = (command) => {
  return new Promise((resolve, reject) => {
    command
      .on('end', resolve)
      .on('error', reject)
      .run();
  });
};

interface ProcessAudioData {
  audioStoragePath: string;
}

export const processAudioFile = functions.https.onCall(
  (data: ProcessAudioData, context) => {
    // const fileBucket = object.bucket; // The Storage bucket that contains the file.
    // const filePath = object.name; // File path in the bucket.
    // const contentType = object.contentType; // File content type.

    // // Exit if this is triggered on a file that is not an audio.
    // if (!contentType.startsWith('audio/')) {
    //   console.log('This is not an audio.');
    //   return null;
    // }

    // // Get the file name.
    // const fileName = path.basename(filePath);
    // // Exit if the audio is already converted.
    // if (fileName.endsWith('_output.flac')) {
    //   console.log('Already a converted audio.');
    //   return null;
    // }

    // // Download file from bucket.
    // const bucket = gcs.bucket(fileBucket);
    // const tempFilePath = path.join(os.tmpdir(), fileName);
    // // We add a '_output.flac' suffix to target audio file name. That's where we'll upload the converted audio.
    // const targetTempFileName =
    //   fileName.replace(/\.[^/.]+$/, '') + '_output.flac';
    // const targetTempFilePath = path.join(os.tmpdir(), targetTempFileName);
    // const targetStorageFilePath = path.join(
    //   path.dirname(filePath),
    //   targetTempFileName
    // );

    // await bucket.file(filePath).download({ destination: tempFilePath });
    // console.log('Audio downloaded locally to', tempFilePath);
    // // Convert the audio to mono channel using FFMPEG.

    // const command = ffmpeg(tempFilePath)
    //   .setFfmpegPath(ffmpeg_static.path)
    //   .audioChannels(1)
    //   .audioFrequency(16000)
    //   .format('flac')
    //   .output(targetTempFilePath);

    const command = ffmpeg(tempFilePath)
      .setFfmpegPath(ffmpeg_static.path)
      .audioFrequency(16000)
      .format('ogg')
      .output(targetTempFilePath);

    await promisifyCommand(command);
    console.log('Output audio created at', targetTempFilePath);
    // // Uploading the audio.
    // await bucket.upload(targetTempFilePath, {
    //   destination: targetStorageFilePath,
    // });
    // console.log('Output audio uploaded to', targetStorageFilePath);

    // // Once the audio has been uploaded delete the local file to free up disk space.
    // fs.unlinkSync(tempFilePath);
    // fs.unlinkSync(targetTempFilePath);

    // return console.log('Temporary files removed.', targetTempFilePath);
  }
);
