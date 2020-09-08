import admin from 'firebase-admin';
import fs from 'fs';
import os from 'os';
import path from 'path';
import sharp from 'sharp';

interface ProcessImageData {
  storagePath: string;
  imageType: ImageType;
}

enum ImageSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  THUMB = 'thumb',
}

export enum ImageType {
  PROFILE = 'profile',
  BANNER = 'banner',
}

//TODO: decide on final image sizes
const IMAGE_SIZES = {
  profile: {
    large: { H: 750, W: 750 },
    // medium: { H: 750, W: 750 },
    // small: { H: 500, W: 500 },
    thumb: { H: 250, W: 250 },
  },
  banner: {
    large: { H: 1140, W: 2660 },
    // medium: { H: 750, W: 750 },
    // small: { H: 500, W: 500 },
    thumb: { H: 285, W: 665 },
  },
};
const FILE_TYPE = 'jpeg';
const CONTENT_TYPE = `image/${FILE_TYPE}`;

const conversionConfig = [ImageSize.LARGE, ImageSize.THUMB];

export const processImage = async (data: ProcessImageData) => {
  try {
    const { storagePath: inputStoragePath, imageType } = data;

    const inputFileName = path.parse(inputStoragePath).name;
    const bucket = admin.storage().bucket();

    const metaDataResponse = await bucket.file(inputStoragePath).getMetadata();

    if (!metaDataResponse) {
      return { ok: false, error: 'File not found' };
    }

    const [metaData] = metaDataResponse;

    const contentType = metaData.contentType;

    if (!contentType.startsWith('image/')) {
      console.log('This is not an image.');
      return { ok: false, error: 'This is not an image' };
    }

    const metadata = {
      contentType: CONTENT_TYPE,
    };

    const inputTempFilePath = path.join(os.tmpdir(), inputFileName);

    await bucket
      .file(inputStoragePath)
      .download({ destination: inputTempFilePath });

    const conversionFileDetails = conversionConfig.map((size) =>
      prepFileForConversion({
        inputStoragePath,
        inputFileName,
        size,
      })
    );

    const imageConversionPromises = conversionFileDetails.map((detail, index) =>
      convertImage({
        inputTempFilePath,
        outputTempFilePath: detail.outputTempFilePath,
        imageType,
        size: conversionConfig[index],
      })
    );

    await Promise.all(imageConversionPromises);
    console.log('image conversion complete');

    const uploadPromises = conversionFileDetails.map((details) =>
      bucket.upload(details.outputTempFilePath, {
        destination: details.outputStorageFilePath,
        metadata,
      })
    );

    const uploadResults = await Promise.all(uploadPromises);

    await bucket.file(inputStoragePath).delete();

    const signedUrlPromises = uploadResults.map((uploadResult) =>
      uploadResult[0].getSignedUrl({
        action: 'read',
        expires: '03-09-2491',
      })
    );

    const signedUrlResults = await Promise.all(signedUrlPromises);

    fs.unlinkSync(inputTempFilePath);
    console.log('Temporary files removed.', inputTempFilePath);
    for (const details of conversionFileDetails) {
      fs.unlinkSync(details.outputTempFilePath);
      console.log('Temporary files removed.', details.outputTempFilePath);
    }

    const returnData = conversionFileDetails.map((details, index) => {
      return {
        filePath: details.outputStorageFilePath,
        downloadUrl: signedUrlResults[index][0],
        size: conversionConfig[index],
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

const prepFileForConversion = ({
  inputStoragePath,
  inputFileName,
  size,
}: {
  inputStoragePath: string;
  inputFileName: string;
  size: ImageSize;
}) => {
  const outputFileName = `${inputFileName}_${size}.${FILE_TYPE}`;
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

const convertImage = ({
  inputTempFilePath,
  outputTempFilePath,
  imageType,
  size,
}: {
  inputTempFilePath: string;
  outputTempFilePath: string;
  imageType: ImageType;
  size: ImageSize;
}) => {
  return sharp(inputTempFilePath)
    .resize(IMAGE_SIZES[imageType][size].W, IMAGE_SIZES[imageType][size].H)
    .toFormat(FILE_TYPE)
    .toFile(outputTempFilePath);
};
