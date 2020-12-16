import { useSnackbar } from 'notistack';
import { useState } from 'react';

interface UseOnDropImageProps {
  minHeight?: number;
  minWidth?: number;
}

export const useOnDropImage = (props: UseOnDropImageProps) => {
  const [image, setImage] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | undefined>(undefined);

  const { enqueueSnackbar } = useSnackbar();

  const { minHeight = 1000, minWidth = 1000 } = props;

  const onDrop = (files: File[], images: string[]) => {
    const imageForUpload = images[0];
    const fileForUpload = files[0];

    const img = new Image();

    img.src = imageForUpload;

    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      if (width !== height) {
        enqueueSnackbar('Error! Image must be square', {
          variant: 'error',
          autoHideDuration: 3000,
        });

        return;
      }

      if (width < minWidth || height < minHeight) {
        enqueueSnackbar('Error! Image is too small', {
          variant: 'error',
          autoHideDuration: 3000,
        });

        return;
      }

      setImage(imageForUpload);
      setImageFile(fileForUpload);
    };
  };

  return { onDrop, image, imageFile };
};
