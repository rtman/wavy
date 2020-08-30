import * as functions from 'firebase-functions';
import * as sharp from 'sharp';

interface ProcessImageData {
  imageStoragePath: string;
}

export const processImage = functions.https.onCall(
  (data: ProcessImageData, context) => {
    const resizedImage = await sharp(input)
      .resize({ width: 1000, height: 500 })
      .toFormat('jpeg')
      .toBuffer();
  }
);
