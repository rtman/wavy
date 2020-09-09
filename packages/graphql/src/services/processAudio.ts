import ffmpegStatic from 'ffmpeg-static';
import admin from 'firebase-admin';
import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';
import os from 'os';
import path from 'path';

const promisifyCommand = (command: any) => {
  return new Promise((resolve, reject) => {
    command
      .on('end', resolve)
      .on('error', reject)
      .run();
  });
};

interface ProcessAudioData {
  storagePath: string;
}

export enum AudioQuality {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

// const NORMAL_SAMPLE_RATE = 44100;
// const LOW_SAMPLE_RATE = 44100;
// const NORMAL_BIT_RATE = 320000;
// const LOW_BIT_RATE = 96000;
const FILE_TYPE = 'ogg';
const CONTENT_TYPE = `audio/${FILE_TYPE}`;

// This sets the audio qualities selected for conversion

const conversionConfig = [
  AudioQuality.HIGH,
  AudioQuality.MEDIUM,
  AudioQuality.LOW,
];

export const processAudio = async (data: ProcessAudioData) => {
  try {
    const { storagePath: inputStoragePath } = data;
    const bucket = admin.storage().bucket();

    const metaDataResponse = await bucket.file(inputStoragePath).getMetadata();

    const [metaData] = metaDataResponse;

    const contentType = metaData.contentType; // File content type.

    // Exit if this is triggered on a file that is not an audio.
    if (!contentType.startsWith('audio/')) {
      console.log('Not an audio file.');
      return { ok: false, error: 'Not an audio file' };
    }

    // Get the file name.
    const inputFileName = path.basename(inputStoragePath);

    // Exit if the audio is already converted.
    if (inputFileName.includes('__output__')) {
      console.log('Already a converted audio file.');
      return { ok: false, error: 'File is already converted' };
    }

    const inputTempFilePath = path.join(os.tmpdir(), inputFileName);

    await bucket
      .file(inputStoragePath)
      .download({ destination: inputTempFilePath });
    console.log('Audio downloaded locally to', inputTempFilePath);

    const conversionFileDetails = conversionConfig.map((qualityLevel) =>
      prepFileForConversion({
        inputFileName,
        inputStoragePath,
        qualityLevel,
      })
    );

    const conversionPromises = conversionFileDetails.map((details, index) =>
      convertAudio({
        inputTempFilePath,
        outputTempFilePath: details.outputTempFilePath,
        qualityLevel: conversionConfig[index],
      })
    );

    await Promise.all(conversionPromises);

    console.log('Output audio created');

    // Uploading the audio.

    const uploadPromises = conversionFileDetails.map((details) => {
      return bucket.upload(details.outputTempFilePath, {
        destination: details.outputStorageFilePath,
        metadata: { contentType: CONTENT_TYPE },
      });
    });

    const uploadResults = await Promise.all(uploadPromises);

    console.log('Output audio uploaded');

    const signedUrlPromises = uploadResults.map((uploadResult) =>
      uploadResult[0].getSignedUrl({
        action: 'read',
        expires: '03-09-2491',
      })
    );

    const signedUrlResults = await Promise.all(signedUrlPromises);

    // delete input
    // TODO: Decide if input is needed or not, if we are doing for sale downloads then it will be.
    // await bucket.file(inputFilePath).delete();

    // Once the audio has been uploaded delete the local file to free up disk space.
    fs.unlinkSync(inputTempFilePath);
    console.log('Temporary files removed.', inputTempFilePath);
    for (const details of conversionFileDetails) {
      fs.unlinkSync(details.outputTempFilePath);
      console.log('Temporary files removed.', details.outputTempFilePath);
    }

    const returnData = {
      storagePathHigh: conversionFileDetails[0].outputStorageFilePath,
      urlHigh: signedUrlResults[0][0],
      storagePathMedium: conversionFileDetails[1].outputStorageFilePath,
      urlMedium: signedUrlResults[1][0],
      storagePathLow: conversionFileDetails[2].outputStorageFilePath,
      urlLow: signedUrlResults[2][0],
    };

    return {
      ok: true,
      data: returnData,
    };
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
};

const prepFileForConversion = ({
  inputFileName,
  inputStoragePath,
  qualityLevel,
}: {
  inputFileName: string;
  inputStoragePath: string;
  qualityLevel: AudioQuality;
}) => {
  // TODO: Add processing here to remove (replace?) whitespaces and lowercase.
  const lowerCaseFileName = inputFileName.toLocaleLowerCase();
  const outputFileName = `${lowerCaseFileName}__output__${qualityLevel}.${FILE_TYPE}`;
  const outputTempFilePath = path.join(os.tmpdir(), outputFileName);
  const outputStorageFilePath = path.join(
    path.dirname(inputStoragePath),
    outputFileName
  );

  return {
    outputFileName,
    outputTempFilePath,
    outputStorageFilePath,
  };
};

const convertAudio = ({
  inputTempFilePath,
  outputTempFilePath,
  qualityLevel,
}: {
  inputTempFilePath: string;
  outputTempFilePath: string;
  qualityLevel: AudioQuality;
}) => {
  const makeAudioQuality = () => {
    switch (qualityLevel) {
      case 'high':
        return 7;
      case 'medium':
        return 4;
      case 'low':
        return 2;
      default:
        return 4;
    }
  };

  const ffmpegConvert = ffmpeg(inputTempFilePath)
    .setFfmpegPath(ffmpegStatic)
    // .audioFrequency(NORMAL_SAMPLE_RATE)
    // .audioBitrate(LOW_BIT_RATE)
    .audioQuality(makeAudioQuality())
    .format(FILE_TYPE)
    .output(outputTempFilePath);

  return promisifyCommand(ffmpegConvert);
};
