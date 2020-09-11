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

interface Data {
  storagePathLarge: string;
  storagePathSmall: string;
  storagePathThumb: string;
  urlLarge: string;
  urlSmall: string;
  urlThumb: string;
}

export interface ProcessImageSuccessResponse {
  ok: true;
  data: Data;
}

interface ProcessImageFailResponse {
  ok: false;
  error: string;
}
type Output = ProcessImageSuccessResponse | ProcessImageFailResponse;

//TODO: decide on final image sizes
const IMAGE_SIZES = {
  profile: {
    large: { H: 1500, W: 1500 },
    small: { H: 500, W: 500 },
    thumb: { H: 250, W: 250 },
  },
  // TODO: banner is currently unused, but would like to include it in the future.
  banner: {
    large: { H: 1140, W: 2660 },
    small: { H: 500, W: 1166 },
    thumb: { H: 285, W: 665 },
  },
};
const FILE_TYPE = 'jpeg';
const CONTENT_TYPE = `image/${FILE_TYPE}`;

// This sets the sizes selected for conversion
const conversionConfig = [ImageSize.LARGE, ImageSize.THUMB];

export const processImage = async (data: ProcessImageData): Promise<Output> => {
  let conversionFileDetails:
    | ReturnType<typeof prepFileForConversion>[]
    | undefined;
  let inputTempFilePath: string | undefined;
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

    inputTempFilePath = path.join(os.tmpdir(), inputFileName);

    await bucket
      .file(inputStoragePath)
      .download({ destination: inputTempFilePath });

    conversionFileDetails = conversionConfig.map((size) =>
      prepFileForConversion({
        inputStoragePath,
        size,
        imageType,
      })
    );

    const imageConversionPromises = conversionFileDetails.map((detail, index) =>
      convertImage({
        // path.join can only return a string so its ok to cast it here
        inputTempFilePath: inputTempFilePath as string,
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

    const returnData: Data = {
      storagePathLarge: conversionFileDetails[0].outputStorageFilePath,
      urlLarge: signedUrlResults[0][0],
      storagePathSmall: conversionFileDetails[1].outputStorageFilePath,
      urlSmall: signedUrlResults[1][0],
      storagePathThumb: conversionFileDetails[2].outputStorageFilePath,
      urlThumb: signedUrlResults[2][0],
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
  inputStoragePath,
  size,
  imageType,
}: {
  inputStoragePath: string;
  size: ImageSize;
  imageType: ImageType;
}) => {
  const outputFileName = `${imageType}_${size}.${FILE_TYPE}`;
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
