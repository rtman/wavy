import { useSnackbar } from 'notistack';
import { useState } from 'react';

export const useOnDropImage = (minHeight = 1000, minWidth = 1000) => {
  const [image, setImage] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | undefined>(undefined);

  const { enqueueSnackbar } = useSnackbar();

  const onDrop = (files: File[], images: string[]) => {
    const imageForUpload = images[0];
    const fileForUpload = files[0];

    const img = new Image();
    img.src = imageForUpload;

    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      if (width > minWidth && height > minHeight) {
        setImage(imageForUpload);
        setImageFile(fileForUpload);
      } else {
        enqueueSnackbar('Error! Image is too small', {
          variant: 'error',
          autoHideDuration: 3000,
        });
      }
    };
  };

  return { onDrop, image, imageFile };
};
