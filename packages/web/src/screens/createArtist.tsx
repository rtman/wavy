import { useMutation } from '@apollo/react-hooks';
import * as consts from 'consts';
import {
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';
import { Flex, Spacing } from 'components';
import { UserContext } from 'context';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';

export const CreateArtist = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [imageRef, setImageRef] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  // const [artistImage, setArtistImage] = useState<string>('')
  const userContext = useContext(UserContext);

  const [createArtist, { loading, called, error }] = useMutation(
    consts.mutations.CREATE_ARTIST,
    {
      onCompleted({ data }) {
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
    await createArtist({
      variables: {
        input: {
          userId: userContext?.user?.id,
          name,
          description,
          imageRef,
          imageUrl,
        },
      },
    });
  };

  return (
    <Container>
      <Spacing.section.Minor />
      <Typography variant="h1">New Artist</Typography>
      <Spacing.section.Minor />
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
