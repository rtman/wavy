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
import * as helpers from 'helpers';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import ImageUploader from 'react-images-upload';
import { useHistory } from 'react-router-dom';

export const CreateArtist = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const userContext = useContext(UserContext);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { onDrop, image, imageFile } = helpers.hooks.useOnDropImage();
  const {
    uploadImage,
    gsUrl,
    downloadUrl,
    id: artistId,
  } = helpers.hooks.useUploadImage(imageFile);

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
    const result = await uploadImage('profileImage');

    if (result) {
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
    }
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
