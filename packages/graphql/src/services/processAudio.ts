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

interface Input {
  storagePath: string;
  deleteOriginal?: boolean;
}

export enum AudioQuality {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

interface SucessData {
  storagePathHigh: string;
  storagePathMedium: string;
  storagePathLow: string;
  urlHigh: string;
  urlMedium: string;
  urlLow: string;
}

export interface ProcessAudioSuccessResponse {
  ok: true;
  data: SucessData;
}

interface ProcessAudioFailResponse {
  ok: false;
  error: string;
}
type Output = ProcessAudioSuccessResponse | ProcessAudioFailResponse;

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

export const processAudio = async (props: Input): Promise<Output> => {
  let conversionFileDetails:
    | ReturnType<typeof prepFileForConversion>[]
    | undefined;
  let inputTempFilePath: string | undefined;

  try {
    const { storagePath: inputStoragePath, deleteOriginal } = props;
    const bucket = admin.storage().bucket();

    const inputStoragePathWithoutBucketPrefix = inputStoragePath.replace(
      `gs://${bucket.name}/`,
      ''
    );

    console.log('inputStoragePath', inputStoragePath);

    console.log(
      'inputStoragePathWithoutBucketPrefix',
      inputStoragePathWithoutBucketPrefix
    );

    const metaDataResponse = await bucket
      .file(inputStoragePathWithoutBucketPrefix)
      .getMetadata();

    const [metaData] = metaDataResponse;

    const contentType = metaData.contentType; // File content type.

    // Exit if this is triggered on a file that is not an audio.
    if (!contentType.startsWith('audio/')) {
      console.log('Not an audio file.');
      return { ok: false, error: 'Not an audio file' };
    }

    // Get the file name.
    const inputFileName = path.basename(inputStoragePathWithoutBucketPrefix);

    // Exit if the audio is already converted.
    if (inputFileName.includes('__output__')) {
      console.log('Already a converted audio file.');
      return { ok: false, error: 'File is already converted' };
    }

    inputTempFilePath = path.join(os.tmpdir(), inputFileName);

    await bucket
      .file(inputStoragePathWithoutBucketPrefix)
      .download({ destination: inputTempFilePath });
    console.log('Audio downloaded locally to', inputTempFilePath);

    conversionFileDetails = conversionConfig.map((qualityLevel) =>
      prepFileForConversion({
        inputFileName,
        inputStoragePath: inputStoragePathWithoutBucketPrefix,
        qualityLevel,
      })
    );

    const conversionPromises = conversionFileDetails.map((details, index) =>
      convertAudio({
        // path.join can only return a string so its ok to cast it here
        inputTempFilePath: inputTempFilePath as string,
        outputTempFilePath: details.outputTempFilePath,
        qualityLevel: conversionConfig[index],
      })
    );

    await Promise.all(conversionPromises);

    console.log('Output audio created');

    // Uploading the audio.

    const uploadPromises = conversionFileDetails.map((details) =>
      bucket.upload(details.outputTempFilePath, {
        destination: details.outputStorageFilePath,
        metadata: { contentType: CONTENT_TYPE },
      })
    );

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
    if (deleteOriginal) {
      await bucket.file(inputStoragePath).delete();
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
  } finally {
    // Once the audio has been uploaded delete the local file to free up disk space.
    if (inputTempFilePath !== undefined) {
      fs.unlinkSync(inputTempFilePath);
      console.log('Temporary files removed.', inputTempFilePath);
    }

    if (conversionFileDetails !== undefined) {
      for (const details of conversionFileDetails) {
        fs.unlinkSync(details.outputTempFilePath);
        console.log('Temporary files removed.', details.outputTempFilePath);
      }
    }
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
