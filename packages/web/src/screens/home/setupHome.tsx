import { useApolloClient } from '@apollo/client';
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { UserContext } from 'context';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
// import { Controller, useForm } from 'react-hook-form';
import * as tasks from 'tasks';
import {
  MutationBulkNewUserSubscriptionArgs,
  Tag,
  UserSubscriptionEntity,
  UserSubscriptionSortBy,
  UserSubscriptionType,
} from 'types';

interface SetupHomeForm {
  tags: Tag[] | null;
}

export const SetupHome = () => {
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  const { enqueueSnackbar } = useSnackbar();
  const apolloClient = useApolloClient();

  const [tags, setTags] = useState<Tag[]>([]);
  const [busy, setBusy] = useState<boolean>(true);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  useEffect(() => {
    (async () => {
      const result = await tasks.getTags(apolloClient);

      setBusy(false);

      if (result.ok) {
        setTags(result.data);
      } else {
        enqueueSnackbar('Error loading tags, please try again', {
          variant: 'error',
          autoHideDuration: 4000,
        });
      }
    })();
  }, []);

  // const hookForm = useForm<SetupHomeForm>({
  //   defaultValues: { tags: null },
  // });

  // const onClickSubmit = (data: SetupHomeForm) => {
  const onClickSubmit = async () => {
    if (!user?.id) {
      return;
    }
    const resolvedSubscriptions: MutationBulkNewUserSubscriptionArgs['input'] = [];

    selectedTags.forEach((tag) => {
      for (const sortBy in UserSubscriptionSortBy) {
        const title = toTitleCase(
          `${sortBy} ${tag.title.toUpperCase()} ${UserSubscriptionEntity.Song}s`
        );

        resolvedSubscriptions.push({
          userId: user?.id,
          entity: UserSubscriptionEntity.Song,
          sortBy: UserSubscriptionSortBy[sortBy],
          type: UserSubscriptionType.Tag,
          title,
          payload: tag.title,
        });
      }
    });

    if (resolvedSubscriptions.length === 0) {
      enqueueSnackbar('No tags selected', {
        variant: 'info',
        autoHideDuration: 4000,
      });

      return;
    }

    const result = await tasks.bulkCreateUserSubscription(
      resolvedSubscriptions,
      apolloClient
    );

    if (result.ok) {
      userContext?.loadUser();
      enqueueSnackbar('Success! Subscriptions Created', {
        variant: 'success',
        autoHideDuration: 4000,
      });
    } else {
      enqueueSnackbar('Error! Subscriptions not created', {
        variant: 'error',
        autoHideDuration: 4000,
      });
    }
  };

  return (
    <Container maxWidth={false}>
      {busy ? (
        <CircularProgress />
      ) : (
        <Grid container={true} spacing={2}>
          <Grid item={true} xs={12}>
            <Typography variant="h3">Lets get your home page setup!</Typography>
          </Grid>
          <Grid item={true} xs={12}>
            <Typography variant="h6">
              What kind of music are you into?
            </Typography>
          </Grid>

          {/* <Controller
            name="tags"
            control={hookForm.control}
            rules={{
              validate: (value: Tag[]) =>
                value.length > 0 || 'Please select atleast one tag',
            }}
            defaultValue={null}
            render={(controllerProps) => ( */}
          <Grid item={true} xs={12}>
            <Autocomplete
              // {...controllerProps}
              multiple={true}
              options={tags}
              filterSelectedOptions={true}
              getOptionLabel={(option: Tag) => option.title}
              onChange={(e: any, values: any) =>
                // hookForm.setValue('tags', values)
                setSelectedTags(values)
              }
              value={selectedTags}
              style={{ width: '100%' }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth={true}
                  label="Tags"
                  // helperText={hookForm.errors.tags?.message}
                  // error={hookForm.errors.tags?.message !== undefined}
                />
              )}
            />
          </Grid>

          <Grid item={true} xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              // onClick={hookForm.handleSubmit(onClickSubmit)}
              onClick={onClickSubmit}
            >
              {/* {createUserSubscriptionsLoading ? (
                <CircularProgress />
              ) : ( */}
              <Typography variant="body2">Submit</Typography>
              {/* )} */}
            </Button>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

// Helpers

const toTitleCase = (text: string) =>
  text.replace(
    /(\w)(\w*)/g,
    (_, firstChar, rest) => firstChar + rest.toLowerCase()
  );
