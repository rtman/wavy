import admin from 'firebase-admin';
import fs from 'fs';
import os from 'os';
import path from 'path';
import sharp from 'sharp';

interface ProcessImageData {
  originalStoragePath: string;
  imageType: ImageType;
}

enum ImageSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
  THUMB = 'thumb',
}

enum ImageType {
  PROFILE = 'profile',
  BANNER = 'banner',
}

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
    const { originalStoragePath, imageType } = data;

    const originalFileName = path.parse(originalStoragePath).name;
    const bucket = admin.storage().bucket();

    const metaDataResponse = await bucket
      .file(originalStoragePath)
      .getMetadata();

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

    const originalTempFilePath = path.join(os.tmpdir(), originalFileName);

    await bucket
      .file(originalStoragePath)
      .download({ destination: originalTempFilePath });

    const conversionFileDetails = conversionConfig.map((size) =>
      prepFileForConversion({
        originalStoragePath,
        originalFileName,
        size,
      })
    );

    const imageConversionPromises = conversionFileDetails.map((detail, index) =>
      convertImage({
        originalTempFilePath,
        tempFilePath: detail.tempFilePath,
        imageType,
        size: conversionConfig[index],
      })
    );

    const imageConversionResults = await Promise.all(imageConversionPromises);
    // TODO: Need a check to determine if conversion was successful

    const uploadPromises = conversionFileDetails.map((details) =>
      bucket.upload(details.tempFilePath, {
        destination: details.storageFilePath,
        metadata,
      })
    );

    const uploadResults = await Promise.all(uploadPromises);

    await bucket.file(originalStoragePath).delete();

    const signedUrlPromises = uploadResults.map((uploadResult) =>
      uploadResult[0].getSignedUrl({
        action: 'read',
        expires: '03-09-2491',
      })
    );

    const signedUrlResults = await Promise.all(signedUrlPromises);

    fs.unlinkSync(originalTempFilePath);
    console.log('Temporary files removed.', originalTempFilePath);
    for (const details of conversionFileDetails) {
      fs.unlinkSync(details.tempFilePath);
      console.log('Temporary files removed.', details.tempFilePath);
    }

    const returnData = conversionFileDetails.map((details, index) => {
      return {
        filePath: details.storageFilePath,
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
  originalStoragePath,
  originalFileName,
  size,
}: {
  originalStoragePath: string;
  originalFileName: string;
  size: ImageSize;
}) => {
  const fileName = `${originalFileName}_${size}.${FILE_TYPE}`;

  const tempFilePath = path.join(os.tmpdir(), originalFileName);

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

const convertImage = ({
  originalTempFilePath,
  tempFilePath,
  imageType,
  size,
}: {
  originalTempFilePath: string;
  tempFilePath: string;
  imageType: ImageType;
  size: ImageSize;
}) => {
  return sharp(originalTempFilePath)
    .resize(IMAGE_SIZES[imageType][size].W, IMAGE_SIZES[imageType][size].H)
    .toFormat(FILE_TYPE)
    .toFile(tempFilePath);
};
