import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as sharp from 'sharp';

import { initConfig } from './config';

initConfig();

interface ProcessImageData {
  filePath: string;
  imageType: 'banner' | 'profile';
}

const IMAGE_SIZES = {
  profile: {
    L: { H: 750, W: 750 },
    // M: { H: 750, W: 750 },
    // S: { H: 500, W: 500 },
    THUMB: { H: 250, W: 250 },
  },
  banner: {
    L: { H: 1140, W: 2660 },
    // M: { H: 750, W: 750 },
    // S: { H: 500, W: 500 },
    THUMB: { H: 285, W: 665 },
  },
};

const CONTENT_TYPE = 'image/jpeg';

export const processImage = functions.https.onCall(
  async (data: ProcessImageData, context) => {
    try {
      const { filePath, imageType } = data;

      const fileName = path.basename(filePath);
      const bucket = admin.storage().bucket();

      const metaDataResponse = await bucket.file(filePath).getMetadata();

      const [metaData] = metaDataResponse;

      const contentType = metaData.contentType;

      if (!contentType.startsWith('image/')) {
        console.log('This is not an image.');
        return null;
      }

      const metadata = {
        contentType: CONTENT_TYPE,
      };

      const largeImageFileName = `${fileName}_large`;
      const thumbImageFileName = `${fileName}_thumb`;

      const largeLocalTempFilePath = path.join(os.tmpdir(), largeImageFileName);
      const thumbLocalTempFilePath = path.join(os.tmpdir(), thumbImageFileName);

      const largeStorageFilePath = path.join(
        path.dirname(filePath),
        largeImageFileName
      );
      const thumbStorageFilePath = path.join(
        path.dirname(filePath),
        thumbImageFileName
      );

      const originalLocalTempFilePath = path.join(os.tmpdir(), fileName);

      await bucket
        .file(filePath)
        .download({ destination: originalLocalTempFilePath });

      const convertLargeImage = sharp(originalLocalTempFilePath)
        .resize(IMAGE_SIZES[imageType].L.W, IMAGE_SIZES[imageType].L.H)
        .toFormat('jpeg')
        .toFile(largeLocalTempFilePath);

      const convertThumbImage = sharp(originalLocalTempFilePath)
        .resize(IMAGE_SIZES[imageType].THUMB.W, IMAGE_SIZES[imageType].THUMB.H)
        .toFormat('jpeg')
        .toFile(thumbLocalTempFilePath);

      const [largeConversionResult, thumbConversionResult] = await Promise.all([
        convertLargeImage,
        convertThumbImage,
      ]);

      if (largeConversionResult && thumbConversionResult) {
        const largeUploadPromise = bucket.upload(largeLocalTempFilePath, {
          destination: largeStorageFilePath,
          metadata,
        });
        const thumbUploadPromise = bucket.upload(thumbLocalTempFilePath, {
          destination: thumbStorageFilePath,
          metadata,
        });
        const deleteOriginalImagePromise = bucket.file(filePath).delete();

        const [
          largeUploadResult,
          thumbUploadResult,
          deleteOriginalResult,
        ] = await Promise.all([
          largeUploadPromise,
          thumbUploadPromise,
          deleteOriginalImagePromise,
        ]);

        if (largeUploadResult && thumbUploadResult && deleteOriginalResult) {
          const largeSignedUrlsResponse = await largeUploadResult[0].getSignedUrl(
            {
              action: 'read',
              expires: '03-09-2491',
            }
          );

          const thumbSignedUrlsResponse = await thumbUploadResult[0].getSignedUrl(
            {
              action: 'read',
              expires: '03-09-2491',
            }
          );

          fs.unlinkSync(originalLocalTempFilePath);
          fs.unlinkSync(largeLocalTempFilePath);
          fs.unlinkSync(thumbLocalTempFilePath);

          console.log(
            'Temporary files removed.',
            largeLocalTempFilePath,
            thumbLocalTempFilePath
          );

          return {
            ok: true,
            // TODO: get download urls
            data: {
              large: {
                path: largeStorageFilePath,
                url: largeSignedUrlsResponse[0],
              },
              thumb: {
                path: thumbStorageFilePath,
                url: thumbSignedUrlsResponse[0],
              },
            },
          };
        }
        return { ok: false, error: 'Uploads failed' };
      }

      return { ok: false, error: 'Image conversion failed' };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
);
