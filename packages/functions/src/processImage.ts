import * as gcs from '@google-cloud/storage';
import * as functions from 'firebase-functions';
import * as path from 'path';
import * as sharp from 'sharp';

import { initConfig } from './config';

const config = initConfig();
const gcsClient = new gcs.Storage();

interface ProcessImageData {
  filePath: string;
}

const IMAGE_SIZES = {
  L: { H: 1000, W: 1000 },
  // M: { H: 750, W: 750 },
  // S: { H: 500, W: 500 },
  THUMB: { H: 250, W: 250 },
};

export const processImage = functions.https.onCall(
  async (data: ProcessImageData, context) => {
    try {
      const { filePath } = data;
      const fileBucket = config?.firebaseConfig.storageBucket; // The Storage bucket that contains the file.

      if (fileBucket) {
        // Get the file name.
        const fileName = path.basename(filePath);

        const metaDataResponse = await gcsClient
          .bucket(fileBucket)
          .file(filePath)
          .getMetadata();

        const [metaData] = metaDataResponse;

        // const filePath = metaData.name; // File path in the bucket.
        const contentType = metaData.contentType; // File content type.

        // Exit if this is triggered on a file that is not an image.
        if (!contentType.startsWith('image/')) {
          console.log('This is not an image.');
          return null;
        }

        // Download file from bucket.
        const bucket = gcsClient.bucket(fileBucket);

        const metadata = {
          contentType: contentType,
        };

        const largeImageFileName = `${fileName}`;
        const thumbImageFileName = `${fileName}_thumb`;
        const largeImageFilePath = path.join(
          path.dirname(filePath),
          largeImageFileName
        );
        const thumbImageFilePath = path.join(
          path.dirname(filePath),
          thumbImageFileName
        );

        // Create write streams
        const largeImageUploadStream = bucket
          .file(largeImageFilePath)
          .createWriteStream({ metadata });
        const thumbImageUploadStream = bucket
          .file(thumbImageFilePath)
          .createWriteStream({ metadata });

        // Create Sharp pipeline for resizing the image and use pipe to read from bucket read stream
        const pipeline = sharp();

        pipeline
          .resize(IMAGE_SIZES.L.W, IMAGE_SIZES.L.H)
          .toFormat('jpeg')
          .pipe(largeImageUploadStream);

        bucket
          .file(largeImageFilePath)
          .createReadStream()
          .pipe(pipeline);

        pipeline
          .resize(IMAGE_SIZES.THUMB.W, IMAGE_SIZES.THUMB.H)
          .toFormat('jpeg')
          .pipe(thumbImageUploadStream);

        bucket
          .file(thumbImageFilePath)
          .createReadStream()
          .pipe(pipeline);

        const largeImagePromise = new Promise((resolve, reject) =>
          largeImageUploadStream.on('finish', resolve).on('error', reject)
        );

        const thumbImagePromise = new Promise((resolve, reject) =>
          thumbImageUploadStream.on('finish', resolve).on('error', reject)
        );

        const promises = [largeImagePromise, thumbImagePromise];

        return {
          ok: true,
          data: await Promise.all(promises),
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
