import { useMutation } from '@apollo/client';
import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import {
  IdParam,
  Mutation,
  MutationLabelCreateUnclaimedArtistArgs,
} from 'types';

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
  const history = useHistory();

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
        history.goBack();
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

      <Typography variant="body1">
        If an artist doesn't exist yet, you can make an unclaimed artist account
        here, so that you can create releases for them. We will use the email
        provided, to invite the artist to claim the account, so make sure it is
        correct. Any music attributed to this artist will be inactive until the
        artist claims the account and agrees to the terms of the release.
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
              label="Artist Name"
              name="name"
              helperText={formErrors.name?.message}
              error={formErrors.name !== undefined}
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
              label="Artist Email"
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
