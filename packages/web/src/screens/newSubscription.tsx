import { useMutation, useQuery } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import {
  Mutation,
  MutationBulkNewUserSubscriptionArgs,
  Query,
  Tag,
  UserSubscriptionEntity,
  UserSubscriptionSortBy,
  UserSubscriptionType,
} from 'commonTypes';
import { Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import { useSnackbar } from 'notistack';
import React, { ChangeEvent, useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface NewSubscriptionForm {
  entity: UserSubscriptionEntity | '';
  sortBy: UserSubscriptionSortBy | '';
  tag: Tag | null;
  type: UserSubscriptionType | '';
}

export const NewSubscription = () => {
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  const { enqueueSnackbar } = useSnackbar();

  const { loading: tagsLoading, data: tagsData } = useQuery<
    Pick<Query, 'tags'>
  >(consts.queries.tag.TAGS);

  console.log('*debug* tagsData', tagsData);
  const [
    createUserSubscriptions,
    { loading: createUserSubscriptionsLoading },
  ] = useMutation<
    Pick<Mutation, 'bulkNewUserSubscription'>,
    MutationBulkNewUserSubscriptionArgs
  >(consts.mutations.userSubscription.BULK_NEW_USER_SUBSCRIPTION, {
    onCompleted(data) {
      console.log('onCompleted data', data);
      if (data.bulkNewUserSubscription) {
        enqueueSnackbar('Success! Subscription Created', {
          variant: 'success',
          autoHideDuration: 4000,
        });
      } else {
        enqueueSnackbar('Error! Subscriptions not created', {
          variant: 'error',
          autoHideDuration: 4000,
        });
      }
    },
  });

  const hookForm = useForm<NewSubscriptionForm>({
    defaultValues: {
      entity: '',
      type: '',
      sortBy: '',
      tag: null,
    },
  });

  const watchType: UserSubscriptionType | '' = hookForm.watch('type');

  const tags = tagsData?.tags ?? [];

  const onClickSubmit = (data: NewSubscriptionForm) => {
    console.log('*debug* newSubscription onClickSubmit data', data);
  };
  //   const onClickSubmit = () => {
  //     console.log('*debug* onClickSubmit', selectedTags);
  //     // console.log('*debug* onClickSubmit', data);
  //     // if (!user?.id || data.tags === null) {
  //     //   return;
  //     // }
  //     if (!user?.id) {
  //       console.log('*debug* !user?.id', user?.id);
  //       console.log('*debug* user', user);

  //       return;
  //     }
  //     const resolvedData = selectedTags.map((tag) => ({
  //       userId: user?.id,
  //       entity: UserSubscriptionEntity.Song,
  //       sortBy: UserSubscriptionSortBy.Top,
  //       type: UserSubscriptionType.Tag,
  //       payload: tag.title,
  //     }));

  //     console.log('*debug* resolvedData', resolvedData);

  //     createUserSubscriptions({
  //       variables: {
  //         input: resolvedData,
  //       },
  //     });
  //   };

  console.log('*debug* hookForm.errors', hookForm.errors);

  return (
    <Container maxWidth={false}>
      {tagsLoading ? (
        <CircularProgress />
      ) : (
        <Grid container={true} spacing={2}>
          <Grid item={true} xs={12}>
            <Typography variant="h5">New Subscription</Typography>
          </Grid>
          <Grid item={true} xs={12}>
            <FormControl fullWidth={true}>
              <InputLabel id="select-type-label">Source</InputLabel>
              <Controller
                as={
                  <Select labelId="select-type-label" fullWidth={true}>
                    <MenuItem value={UserSubscriptionType.Default}>
                      All
                    </MenuItem>
                    <MenuItem value={UserSubscriptionType.Tag}>Tags</MenuItem>
                    <MenuItem value={UserSubscriptionType.Following}>
                      Your Follows
                    </MenuItem>
                    <MenuItem value={UserSubscriptionType.UserStats}>
                      Your listening history
                    </MenuItem>
                    <MenuItem value={UserSubscriptionType.PlayHistory}>
                      Your recent plays
                    </MenuItem>
                  </Select>
                }
                name="type"
                control={hookForm.control}
                rules={{
                  validate: {
                    nonEmpty: (value: UserSubscriptionSortBy | '') =>
                      value !== '' || 'Please select an option',
                  },
                }}
              />
              <FormHelperText
                error={hookForm.errors.type?.message !== undefined}
              >
                {hookForm.errors.type?.message}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item={true} xs={12}>
            <FormControl fullWidth={true}>
              <InputLabel id="select-entity-label">Category</InputLabel>
              <Controller
                as={
                  <Select labelId="select-entity-label" fullWidth={true}>
                    <MenuItem value={UserSubscriptionEntity.Album}>
                      Album
                    </MenuItem>
                    <MenuItem value={UserSubscriptionEntity.Artist}>
                      Artist
                    </MenuItem>
                    <MenuItem value={UserSubscriptionEntity.Label}>
                      Label
                    </MenuItem>
                    <MenuItem value={UserSubscriptionEntity.Song}>
                      Song
                    </MenuItem>
                    <MenuItem value={UserSubscriptionEntity.Playlist}>
                      Playlist
                    </MenuItem>
                  </Select>
                }
                name="entity"
                control={hookForm.control}
                rules={{
                  validate: {
                    nonEmpty: (value: UserSubscriptionSortBy | '') =>
                      value !== '' || 'Please select an option',
                  },
                }}
              />
              <FormHelperText
                error={hookForm.errors.entity?.message !== undefined}
              >
                {hookForm.errors.entity?.message}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item={true} xs={12}>
            <FormControl fullWidth={true}>
              <InputLabel id="select-entity-label">Sort By</InputLabel>
              <Controller
                as={
                  <Select labelId="select-sort-by-label" fullWidth={true}>
                    <MenuItem value={UserSubscriptionSortBy.Top}>Top</MenuItem>
                    <MenuItem value={UserSubscriptionSortBy.New}>New</MenuItem>
                    <MenuItem value={UserSubscriptionSortBy.Random}>
                      Random
                    </MenuItem>
                  </Select>
                }
                name="sortBy"
                defaultValue={''}
                control={hookForm.control}
                rules={{
                  validate: {
                    nonEmpty: (value: UserSubscriptionSortBy | '') =>
                      value !== '' || 'Please select an option',
                  },
                }}
              />
              <FormHelperText
                error={hookForm.errors.sortBy?.message !== undefined}
              >
                {hookForm.errors.sortBy?.message}
              </FormHelperText>
            </FormControl>
          </Grid>

          {watchType === UserSubscriptionType.Tag ? (
            <Grid item={true} xs={12}>
              <Controller
                name="tag"
                control={hookForm.control}
                rules={{
                  validate: (value: Tag | null) =>
                    value !== null || 'Please select a tag',
                }}
                defaultValue={null}
                render={(controllerProps) => (
                  <Autocomplete
                    {...controllerProps}
                    options={tags}
                    filterSelectedOptions={true}
                    getOptionLabel={(option: Tag) => option.title}
                    onChange={(e: any, value: any) =>
                      controllerProps.onChange(value)
                    }
                    style={{ width: '100%' }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth={true}
                        label="Tag"
                        helperText={hookForm.errors.tag?.message}
                        error={hookForm.errors.tag?.message !== undefined}
                      />
                    )}
                  />
                )}
              />
            </Grid>
          ) : null}
          <Spacing.section.Major />
          <Grid item={true} xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={hookForm.handleSubmit(onClickSubmit)}
            >
              {createUserSubscriptionsLoading ? (
                <CircularProgress />
              ) : (
                <Typography variant="body2">Submit</Typography>
              )}
            </Button>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
