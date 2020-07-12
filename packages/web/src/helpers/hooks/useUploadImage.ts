import * as firebase from 'firebase';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { uuid } from 'uuidv4';

export const useUploadImage = (imageFile: File | undefined) => {
  const { enqueueSnackbar } = useSnackbar();
  const [gsUrl, setGsUrl] = useState<string>('');
  const [downloadUrl, setDownloadUrl] = useState<string>('');
  const [id, setId] = useState<string>('');

  const uploadImage = async (data: {
    parentId?: string;
    parentDir?: string;
    fileName: string;
  }) => {
    const { parentId, parentDir, fileName } = data;

    setId(uuid());
    const fileExtension = imageFile?.name.split('.').splice(-1)[0];

    if (imageFile) {
      const storageRef = firebase.storage().ref();

      let storagePath = '';
      if (parentId) storagePath += `${parentId}/`;
      if (parentDir) storagePath += `${parentDir}/`;
      // storagePath + parentId ? `${parentId}/` : '';
      // storagePath + parentDir ? `${parentDir}/` : '';
      storagePath += `${id}/${fileName}.${fileExtension}`;

      const artistImageRef = storageRef.child(storagePath);
      const snapshot = await artistImageRef.put(imageFile);

      if (snapshot) {
        const result = await artistImageRef.getDownloadURL();
        setDownloadUrl(result);
        setGsUrl(artistImageRef.toString());

        return true;
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

  return { uploadImage, gsUrl, downloadUrl, id };
};
