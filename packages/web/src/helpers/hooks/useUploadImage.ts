import * as firebase from 'firebase';
import { useSnackbar } from 'notistack';

export const useUploadImage = (imageFile: File | undefined) => {
  const { enqueueSnackbar } = useSnackbar();

  const uploadImage = async (data: {
    rootDir?: string;
    parentDir?: string;
    childDir?: string;
    fileName: string;
  }) => {
    const { rootDir, parentDir, childDir, fileName } = data;

    const fileExtension = imageFile?.name.split('.').splice(-1)[0];

    if (imageFile) {
      const storageRef = firebase.storage().ref();

      let storagePath = '';
      rootDir ? (storagePath += `${rootDir}/`) : (storagePath += '');
      parentDir ? (storagePath += `${parentDir}/`) : (storagePath += '');
      childDir ? (storagePath += `${childDir}/`) : (storagePath += '');
      // storagePath + parentId ? `${parentId}/` : '';
      // storagePath + parentDir ? `${parentDir}/` : '';
      storagePath += `${fileName}.${fileExtension}`;

      const artistImageRef = storageRef.child(storagePath);
      const snapshot = await artistImageRef.put(imageFile);

      if (snapshot) {
        const result = await artistImageRef.getDownloadURL();
        const downloadUrl = result;
        const gsUrl = artistImageRef.toString();

        return { id: childDir, downloadUrl, gsUrl };
      } else {
        enqueueSnackbar('Error! Image upload failed', {
          variant: 'error',
          autoHideDuration: 4000,
        });
        return false;
      }
    } else {
      console.log('useUploadImage Error: no file provided');
      return false;
    }
  };

  return { uploadImage };
};
