import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';
import { Flex, Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import * as firebase from 'firebase';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import ImageUploader from 'react-images-upload';
import { uuid } from 'uuidv4';

export const CreateArtist = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | undefined>(undefined);
  const [imageRef, setImageRef] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  // const [artistImage, setArtistImage] = useState<string>('')
  const userContext = useContext(UserContext);

  const [createArtist, { loading, called, error }] = useMutation(
    consts.mutations.CREATE_ARTIST,
    {
      onCompleted({ data }) {
        console.log('onCompleted data', data);
        if (data.artist.id) {
          enqueueSnackbar('Success! Artist Created', {
            variant: 'success',
            autoHideDuration: 4000,
          });
        } else {
          enqueueSnackbar('Error! Artist Not Created', {
            variant: 'error',
            autoHideDuration: 4000,
          });
        }
      },
    }
  );

  useEffect(() => {
    if (error) {
      enqueueSnackbar('Error! Artist Not Created', {
        variant: 'error',
        autoHideDuration: 4000,
      });
    }
  }, [error, enqueueSnackbar]);
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const onChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(event.target.value);

  const onSubmit = async () => {
    const artistId = uuid();

    if (imageFile) {
      const storageRef = firebase.storage().ref();
      // TODO: convert the image to preferred type
      const artistImageRef = storageRef.child(`images/${artistId}/profile.jpg`);
      const snapshot = await artistImageRef.put(imageFile);
      if (snapshot) {
        const downloadUrl = await artistImageRef.getDownloadURL();
        setImageUrl(downloadUrl);
        setImageRef(artistImageRef.fullPath);
      } else {
        enqueueSnackbar('Error! Image upload failed', {
          variant: 'error',
          autoHideDuration: 4000,
        });
        return;
      }
    }

    await createArtist({
      variables: {
        input: {
          userId: userContext?.user?.id,
          artistId,
          name,
          description,
          imageRef,
          imageUrl,
        },
      },
    });
  };

  const onDrop = (files: File[], images: string[]) => {
    const imageForUpload = images[0];

    const img = new Image();
    img.src = imageForUpload;
    img.onload = () => {
      // console.log('image dimensions', img.naturalWidth, img.naturalHeight);
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      if (width > 500 && height > 500) {
        setImage(imageForUpload);
        setImageFile(files[0]);
      } else {
        enqueueSnackbar('Error! Image is too small', {
          variant: 'error',
          autoHideDuration: 4000,
        });
      }
    };
  };

  return (
    <Container>
      <Spacing.section.Minor />
      <Typography variant="h1">New Artist</Typography>
      <Spacing.section.Minor />
      {image ? (
        <img src={image} width={500} height={500} />
      ) : (
        <ImageUploader
          withIcon={true}
          buttonText="Select Image"
          onChange={onDrop}
          imgExtension={['.jpg', '.png']}
          maxFileSize={5242880}
        />
      )}
      <TextField
        autoFocus={true}
        margin="dense"
        id="name"
        label="Name"
        fullWidth={true}
        onChange={onChangeName}
        value={name}
      />
      <TextField
        margin="dense"
        id="description"
        label="Description"
        multiline={true}
        fullWidth={true}
        onChange={onChangeDescription}
        value={description}
      />

      <Flex>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          {called && loading ? <CircularProgress /> : 'Create'}
        </Button>
      </Flex>
    </Container>
  );
};
