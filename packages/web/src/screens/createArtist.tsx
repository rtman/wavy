import { useMutation } from '@apollo/client';
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
import { Mutation, MutationCreateArtistArgs } from 'types';
import { uuid } from 'uuidv4';

export const CreateArtist = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [artistId, setArtistId] = useState<string>('');

  const userContext = useContext(UserContext);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { onDrop, image, imageFile } = helpers.hooks.useOnDropImage({
    minHeight: consts.image.minHeight,
    minWidth: consts.image.minWidth,
  });
  const { uploadImage } = helpers.hooks.useUploadImage();

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
    if (imageFile) {
      const result = await uploadImage({
        imageFile,
        rootDir: artistId,
        fileName: 'profileImage',
      });

      if (result.ok && userId) {
        await createArtist({
          variables: {
            input: {
              userId,
              artistId: result.id,
              name,
              description,
              profileImageStoragePath: result.fullStoragePath,
            },
          },
        });
      }
    }
  };

  return (
    <Container maxWidth={false}>
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
          imgExtension={consts.image.allowedFormats}
          maxFileSize={consts.image.maxFileSize}
          singleImage={true}
          label={consts.image.uploadRequirementsLabel}
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
