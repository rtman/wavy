import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import {
  IdParam,
  Mutation,
  MutationLabelCreateUnclaimedArtistArgs,
} from 'commonTypes';
import { Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

interface CreateUnclaimedArtistForm {
  email: string;
  name: string;
}

export const LabelCreateUnclaimedArtist = () => {
  const { register, handleSubmit, errors: formErrors } = useForm<
    CreateUnclaimedArtistForm
  >();
  const userContext = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams<IdParam>();

  const { user } = userContext ?? {};

  const [labelCreateUnclaimedArtist, { loading, called, error }] = useMutation<
    Pick<Mutation, 'labelCreateUnclaimedArtist'>,
    MutationLabelCreateUnclaimedArtistArgs
  >(consts.mutations.artist.LABEL_CREATE_UNCLAIMED_ARTIST, {
    onCompleted(data) {
      console.log('onCompleted data', data);
      if (data.labelCreateUnclaimedArtist) {
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
  });

  useEffect(() => {
    if (error) {
      enqueueSnackbar('Error! Artist Not Created', {
        variant: 'error',
        autoHideDuration: 4000,
      });
    }
  }, [error, enqueueSnackbar]);

  const onSubmit = async (data: CreateUnclaimedArtistForm) => {
    await labelCreateUnclaimedArtist({
      variables: {
        input: {
          creatorName: `${user?.firstName} ${user?.lastName}`,
          creatorUserId: user?.id ?? '',
          name: data.name,
          claimantEmail: data.email,
          labelId: id,
        },
      },
    });
  };

  return (
    <Container maxWidth={false}>
      <Spacing.section.Minor />
      <Typography variant="h3">New Unclaimed Artist</Typography>

      <Spacing.section.Minor />

      <Typography variant="h5">
        If the artist doesn't exist yet, creating an unclaimed artist will allow
        you to create music by this artist. This music will be inactive until
        the artist claims the account and agrees to the terms of the created
        music.
      </Typography>

      <Spacing.section.Major />

      <Grid container={true} spacing={2}>
        <Grid item={true} xs={12}>
          <FormControl fullWidth={true}>
            <TextField
              inputRef={register({
                required: {
                  value: true,
                  message: 'Required',
                },
                minLength: {
                  value: 2,
                  message: 'Enter atleast 2 characters',
                },
              })}
              type="name"
              label="Name"
              name="name"
              helperText={formErrors.name?.message}
              error={formErrors.name !== undefined}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.target.value = event.target.value.trim();
              }}
            />
          </FormControl>
        </Grid>
        <Grid item={true} xs={12}>
          <FormControl fullWidth={true}>
            <TextField
              inputRef={register({
                required: {
                  value: true,
                  message: 'Required',
                },
                pattern: {
                  value: consts.regex.email,
                  message: 'Enter a valid email',
                },
              })}
              label="Email"
              name="email"
              helperText={formErrors.email?.message}
              error={formErrors.email !== undefined}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                event.target.value = event.target.value.trim();
              }}
            />
          </FormControl>
        </Grid>

        <Grid item={true} xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
          >
            {called || loading ? (
              <CircularProgress color="secondary" />
            ) : (
              'Create'
            )}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
