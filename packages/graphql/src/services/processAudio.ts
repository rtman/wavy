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
  originalStoragePath: string;
}

enum AudioQuality {
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

const conversionConfig = [
  AudioQuality.HIGH,
  AudioQuality.MEDIUM,
  AudioQuality.LOW,
];

export const processAudio = async (data: ProcessAudioData) => {
  try {
    const { originalStoragePath } = data;
    const bucket = admin.storage().bucket();

    const metaDataResponse = await bucket
      .file(originalStoragePath)
      .getMetadata();

    const [metaData] = metaDataResponse;

    const contentType = metaData.contentType; // File content type.

    // Exit if this is triggered on a file that is not an audio.
    if (!contentType.startsWith('audio/')) {
      console.log('Not an audio file.');
      return null;
    }

    // Get the file name.
    const originalFileName = path.basename(originalStoragePath);

    // Exit if the audio is already converted.
    if (originalFileName.endsWith(`_output.${FILE_TYPE}`)) {
      console.log('Already a converted audio file.');
      return { ok: false, error: 'File is already converted' };
    }

    const originalTempFilePath = path.join(os.tmpdir(), originalFileName);

    await bucket
      .file(originalStoragePath)
      .download({ destination: originalTempFilePath });
    console.log('Audio downloaded locally to', originalTempFilePath);

    const conversionFileSettings = conversionConfig.map((qualityLevel) =>
      prepFilesForConversion({
        originalStoragePath,
        originalFileName,
        qualityLevel,
      })
    );

    const conversionPromises = conversionFileSettings.map((instance, index) =>
      convertAudio({
        originalTempFilePath,
        targetTempFilePath: instance.tempFilePath,
        qualityLevel: conversionConfig[index],
      })
    );

    const conversionResults = await Promise.all(conversionPromises);

    console.log('Output audio created at', conversionResults);

    // Uploading the audio.

    const uploadPromises = conversionFileSettings.map((instance) => {
      return bucket.upload(instance.tempFilePath, {
        destination: instance.storageFilePath,
        metadata: { contentType: CONTENT_TYPE },
      });
    });

    const uploadResults = await Promise.all(uploadPromises);

    console.log('Output audio uploaded to', uploadResults);

    const signedUrlPromises = uploadResults.map((uploadResult) =>
      uploadResult[0].getSignedUrl({
        action: 'read',
        expires: '03-09-2491',
      })
    );

    const signedUrlResults = await Promise.all(signedUrlPromises);

    // delete original
    // TODO: Decide if original is needed or not, if we are doing for sale downloads then it will be.
    // await bucket.file(originalFilePath).delete();

    // Once the audio has been uploaded delete the local file to free up disk space.
    fs.unlinkSync(originalTempFilePath);
    console.log('Temporary files removed.', originalTempFilePath);
    for (const instance of conversionFileSettings) {
      fs.unlinkSync(instance.tempFilePath);
      console.log('Temporary files removed.', instance.tempFilePath);
    }

    const returnData = conversionFileSettings.map((settings, index) => {
      return {
        filePath: settings.storageFilePath,
        downloadUrl: signedUrlResults[index][0],
        audioQuality: conversionConfig[index],
      };
    });

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

const prepFilesForConversion = ({
  originalStoragePath,
  originalFileName,
  qualityLevel,
}: {
  originalStoragePath: string;
  originalFileName: string;
  qualityLevel: AudioQuality;
}) => {
  const fileName =
    originalFileName.replace(/\.[^/.]+$/, '') +
    `_output_${qualityLevel}.${FILE_TYPE}`;
  const tempFilePath = path.join(os.tmpdir(), fileName);
  const storageFilePath = path.join(
    path.dirname(originalStoragePath),
    fileName
  );

  return {
    fileName,
    tempFilePath,
    storageFilePath,
  };
};

const convertAudio = ({
  originalTempFilePath,
  targetTempFilePath,
  qualityLevel,
}: {
  originalTempFilePath: string;
  targetTempFilePath: string;
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

  const ffmpegConvert = ffmpeg(originalTempFilePath)
    .setFfmpegPath(ffmpegStatic)
    // .audioFrequency(NORMAL_SAMPLE_RATE)
    // .audioBitrate(LOW_BIT_RATE)
    .audioQuality(makeAudioQuality())
    .format(FILE_TYPE)
    .output(targetTempFilePath);

  return promisifyCommand(ffmpegConvert);
};
