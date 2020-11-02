import { useMutation, useQuery } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
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
import React, { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface SetupHomeForm {
  tags: Tag[] | null;
}

export const SetupHome = () => {
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  const { enqueueSnackbar } = useSnackbar();

  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

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
        enqueueSnackbar('Success! Subscriptuibs Created', {
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

  const hookForm = useForm<SetupHomeForm>({
    defaultValues: { tags: null },
  });

  const tags = tagsData?.tags ?? [];

  // const onClickSubmit = (data: SetupHomeForm) => {
  const onClickSubmit = () => {
    console.log('*debug* onClickSubmit', selectedTags);
    // console.log('*debug* onClickSubmit', data);
    // if (!user?.id || data.tags === null) {
    //   return;
    // }
    if (!user?.id) {
      console.log('*debug* !user?.id', user?.id);
      console.log('*debug* user', user);

      return;
    }
    const resolvedData = selectedTags.map((tag) => ({
      userId: user?.id,
      entity: UserSubscriptionEntity.Song,
      sortBy: UserSubscriptionSortBy.Top,
      type: UserSubscriptionType.Tag,
      payload: tag.title,
    }));

    console.log('*debug* resolvedData', resolvedData);

    createUserSubscriptions({
      variables: {
        input: resolvedData,
      },
    });
  };

  return (
    <Container>
      {tagsLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Spacing.section.Minor />

          <Typography variant="h3">Lets get you setup!</Typography>
          <Spacing.BetweenParagraphs />
          <Typography variant="h6">What kind of music are you into?</Typography>
          <Spacing.BetweenParagraphs />

          {/* <Controller
            name="tags"
            control={hookForm.control}
            rules={{
              validate: (value: Tag[]) =>
                value.length > 0 || 'Please select atleast one tag',
            }}
            defaultValue={null}
            render={(controllerProps) => ( */}
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
          {/* )}
          /> */}

          <Spacing.section.Major />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            // onClick={hookForm.handleSubmit(onClickSubmit)}
            onClick={onClickSubmit}
          >
            {createUserSubscriptionsLoading ? (
              <CircularProgress />
            ) : (
              <Typography variant="body2">Submit</Typography>
            )}
          </Button>
        </>
      )}
    </Container>
  );
};
