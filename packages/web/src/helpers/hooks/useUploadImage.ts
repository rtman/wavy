import * as firebase from 'firebase';
import { useSnackbar } from 'notistack';

export const useUploadImage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const uploadImage = async (data: {
    imageFile: File;
    rootDir?: string;
    parentDir?: string;
    childDir?: string;
    fileName: string;
  }) => {
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

        return { id: childDir, downloadUrl, fullStoragePath };
      } else {
        enqueueSnackbar('Error! Image upload failed', {
          variant: 'error',
          autoHideDuration: 4000,
        });
        return false;
      }
    } else {
      console.log('*debug* useUploadImage Error: no file provided');

      return false;
    }
  };

  return { uploadImage };
};
