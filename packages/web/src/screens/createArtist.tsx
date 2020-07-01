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
import { useHistory } from 'react-router-dom';
import { uuid } from 'uuidv4';

export const CreateArtist = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | undefined>(undefined);

  const userContext = useContext(UserContext);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const [createArtist, { loading, called, error }] = useMutation(
    consts.mutations.CREATE_ARTIST,
    {
      onCompleted(data) {
        console.log('onCompleted data', data);
        if (data.createArtist.id) {
          enqueueSnackbar('Success! Artist Created', {
            variant: 'success',
            autoHideDuration: 4000,
          });
          history.push(`/artist/${data.createArtist.id}`);
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

    let gsUrl = '';
    let downloadUrl = '';
    const fileExtension = imageFile?.name.split('.').splice(-1)[0];

    if (imageFile) {
      const storageRef = firebase.storage().ref();
      const artistImageRef = storageRef.child(
        `images/${artistId}/profile.${fileExtension}`
      );
      const snapshot = await artistImageRef.put(imageFile);

      if (snapshot) {
        downloadUrl = await artistImageRef.getDownloadURL();
        gsUrl = artistImageRef.toString();
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
          imageRef: gsUrl,
          imageUrl: downloadUrl,
        },
      },
    });
  };

  const onDrop = (files: File[], images: string[]) => {
    const imageForUpload = images[0];
    const fileForUpload = files[0];

    const img = new Image();
    img.src = imageForUpload;

    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      if (width > 500 && height > 500) {
        setImage(imageForUpload);
        setImageFile(fileForUpload);
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
          imgExtension={['.jpg', '.png', 'jpeg']}
          maxFileSize={5242880}
          singleImage={true}
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
          {called || loading ? (
            <CircularProgress color="secondary" />
          ) : (
            'Create'
          )}
        </Button>
      </Flex>
    </Container>
  );
};
