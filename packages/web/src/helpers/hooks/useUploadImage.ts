import * as firebase from 'firebase';
import { useSnackbar } from 'notistack';

interface Success {
  ok: true;
  id: string;
  downloadUrl: string;
  fullStoragePath: string;
}

interface Fail {
  ok: false;
}

export const useUploadImage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const uploadImage = async (data: {
    imageFile: File;
    rootDir: string;
    parentDir?: string;
    childDir?: string;
    fileName: string;
  }): Promise<Success | Fail> => {
    const { imageFile, rootDir, parentDir, childDir, fileName } = data;

    const fileExtension = imageFile.name.split('.').splice(-1)[0];

    if (imageFile) {
      const storageRef = firebase.storage().ref();

      let storagePath = '';
      rootDir ? (storagePath += `${rootDir}/`) : (storagePath += '');
      parentDir ? (storagePath += `${parentDir}/`) : (storagePath += '');
      childDir ? (storagePath += `${childDir}/`) : (storagePath += '');
      // storagePath + parentId ? `${parentId}/` : '';
      // storagePath + parentDir ? `${parentDir}/` : '';
      storagePath += `${fileName}.${fileExtension}`;

      const creatorImageRef = storageRef.child(storagePath);
      const snapshot = await creatorImageRef.put(imageFile);

      if (snapshot) {
        const result = await creatorImageRef.getDownloadURL();
        const downloadUrl = result;
        const fullStoragePath = creatorImageRef.toString();

        return {
          ok: true,
          id: childDir ? childDir : parentDir ? parentDir : rootDir,
          downloadUrl,
          fullStoragePath,
        };
      } else {
        enqueueSnackbar('Error! Image upload failed', {
          variant: 'error',
          autoHideDuration: 4000,
        });
        return { ok: false };
      }
    } else {
      console.log('*debug* useUploadImage Error: no file provided');

      return { ok: false };
    }
  };

  return { uploadImage };
};
