import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';
import { Mutation, MutationCreateArtistArgs } from 'commonTypes';
import { Flex, Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import * as helpers from 'helpers';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import ImageUploader from 'react-images-upload';
import { useHistory } from 'react-router-dom';
import { uuid } from 'uuidv4';

export const CreateArtist = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [artistId, setArtistId] = useState<string>('');

  const userContext = useContext(UserContext);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { onDrop, image, imageFile } = helpers.hooks.useOnDropImage();
  const { uploadImage } = helpers.hooks.useUploadImage(imageFile);

  const { user } = userContext ?? {};
  const { id: userId } = user ?? {};

  const [createArtist, { loading, called, error }] = useMutation<
    Pick<Mutation, 'createArtist'>,
    MutationCreateArtistArgs
  >(consts.mutations.artist.CREATE_ARTIST, {
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
  });

  useEffect(() => {
    setArtistId(uuid());
  }, []);

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
    const result = await uploadImage({
      rootDir: artistId,
      fileName: 'profileImage',
    });

    if (result && result.id && userId) {
      await createArtist({
        variables: {
          input: {
            userId,
            artistId: result.id,
            name,
            description,
            profileImageStoragePath: result.gsUrl,
          },
        },
      });
    }
  };

  return (
    <Container>
      <Spacing.section.Minor />
      <Typography variant="h3">New Artist</Typography>
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
