import { useApolloClient } from '@apollo/client';
import {
  Button,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  MenuItem,
  Paper,
  Select,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TextField,
  Typography,
  TableBody,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Close } from '@material-ui/icons';
import {
  Tag,
  UserSubscriptionEntity,
  UserSubscriptionResult,
  UserSubscriptionSortBy,
  UserSubscriptionType,
} from 'commonTypes';
import { Flex, Spacing } from 'components';
import { UserContext } from 'context';
import { useSnackbar } from 'notistack';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as tasks from 'tasks';

interface NewSubscriptionForm {
  // entity: UserSubscriptionEntity | '';
  sortBy: UserSubscriptionSortBy | '';
  tag: Tag | null;
  // type: UserSubscriptionType | '';
}

export const ManageSubscriptions = () => {
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  const { enqueueSnackbar } = useSnackbar();
  const apolloClient = useApolloClient();

  const [tags, setTags] = useState<Tag[]>([]);
  const [currentSubscriptions, setCurrentSubscriptions] = useState<
    UserSubscriptionResult[]
  >([]);
  const [busy, setBusy] = useState<boolean>(true);

  const loadScreenData = async () => {
    if (user?.id) {
      const tagsResult = await tasks.getTags(apolloClient);
      const subscriptionsResult = await tasks.getUserSubscriptions(
        { userId: user?.id },
        apolloClient
      );
      setBusy(false);

      if (tagsResult.ok) {
        setTags(tagsResult.data);
      } else {
        enqueueSnackbar(`Error loading tags, please try again`, {
          variant: 'error',
          autoHideDuration: 4000,
        });
      }

      if (subscriptionsResult.ok) {
        setCurrentSubscriptions(subscriptionsResult.data);
      } else {
        enqueueSnackbar(`Error loading subscriptions, please try again`, {
          variant: 'error',
          autoHideDuration: 4000,
        });
      }
    }
  };

  useEffect(() => {
    (async () => {
      await loadScreenData();
    })();
  }, []);

  const hookForm = useForm<NewSubscriptionForm>({
    defaultValues: {
      // entity: '',
      sortBy: '',
      tag: null,
      // type: '',
    },
  });

  // const watchType: UserSubscriptionType | '' = hookForm.watch('type');

  const onClickSubmit = async (data: NewSubscriptionForm) => {
    const subscriptionAlreadyExists = currentSubscriptions.find(
      (subscription) =>
        data.sortBy === subscription.sortBy &&
        data.tag?.title === subscription.payload
    );

    if (subscriptionAlreadyExists) {
      enqueueSnackbar('Subscription already exists', {
        variant: 'info',
        autoHideDuration: 4000,
      });
      return;
    }

    if (data.tag && data.sortBy && user?.id) {
      const title = toTitleCase(
        `${data.sortBy} ${data.tag.title.toUpperCase()} ${
          UserSubscriptionEntity.Song
        }s`
      );
      const resolvedSubscription = {
        userId: user?.id,
        entity: UserSubscriptionEntity.Song,
        sortBy: data.sortBy,
        type: UserSubscriptionType.Tag,
        title,
        payload: data.tag.title,
      };
      const result = await tasks.createUserSubscription(
        resolvedSubscription,
        apolloClient
      );

      if (result.ok) {
        await loadScreenData();
        enqueueSnackbar('Success! Subscription Created', {
          variant: 'success',
          autoHideDuration: 4000,
        });
      } else {
        enqueueSnackbar('Error! Subscription not created', {
          variant: 'error',
          autoHideDuration: 4000,
        });
      }
    }
  };

  const onClickDeleteSubscription = async (subscriptionId: string) => {
    const result = await tasks.deleteUserSubscription(
      { subscriptionId },
      apolloClient
    );
    if (result.ok) {
      await loadScreenData();
      enqueueSnackbar('Success! Subscription deleted', {
        variant: 'success',
        autoHideDuration: 4000,
      });
    } else {
      enqueueSnackbar('Error! Subscription not deleted', {
        variant: 'error',
        autoHideDuration: 4000,
      });
    }
  };

  const renderCurrentSubscriptionsTable = () => {
    const rows = currentSubscriptions.map((subscription, index) => (
      <TableRow key={subscription.id}>
        <TableCell component="th" scope="row">
          {index + 1}
        </TableCell>
        <TableCell>{subscription.title}</TableCell>
        <TableCell>{subscription.payload}</TableCell>
        <TableCell>{subscription.sortBy}</TableCell>
        <TableCell align="right">
          <IconButton
            aria-controls="delete-subscriptoin"
            aria-haspopup="true"
            onClick={() => onClickDeleteSubscription(subscription.id)}
            size="small"
          >
            <Close />
          </IconButton>
        </TableCell>
      </TableRow>
    ));

    return (
      <>
        <Typography variant="h6">Current Subscriptions</Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Tag</TableCell>
                <TableCell>Sort by</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{rows}</TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };

  return (
    <Container maxWidth={false}>
      {busy ? (
        <CircularProgress />
      ) : (
        <Grid container={true} spacing={2}>
          <Grid item={true} xs={12}>
            <Typography variant="h5">Customize your home page</Typography>
          </Grid>

          {/* <Grid item={true} xs={12}>
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
          </Grid> */}

          {/* <Grid item={true} xs={12}>
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
          </Grid> */}

          {/* {watchType === UserSubscriptionType.Tag ? ( */}
          <Grid item={true} xs={12} sm={6}>
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
          {/*} ) : null} */}

          <Grid item={true} xs={12} sm={6}>
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

          <Grid item={true} xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={hookForm.handleSubmit(onClickSubmit)}
            >
              {busy ? (
                <CircularProgress />
              ) : (
                <Typography variant="body2">Submit</Typography>
              )}
            </Button>
          </Grid>

          <Grid item={true} xs={12}>
            {renderCurrentSubscriptionsTable()}
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
