import { useQuery } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  GridList,
  TextField,
  Typography,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Query, Tag } from 'commonTypes';
import { Spacing } from 'components';
import * as consts from 'consts';
import { AuthContext, UserContext } from 'context';
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface SetupHomeForm {
  tags: Tag[];
}

export const SetupHome = () => {
  const userContext = useContext(UserContext);
  const user = userContext?.user;

  const { loading: tagsLoading, data: tagsData } = useQuery<
    Pick<Query, 'tags'>
  >(consts.queries.tag.TAGS);

  const hookForm = useForm<SetupHomeForm>({
    defaultValues: { tags: [] },
  });

  const tags = tagsData?.tags ?? [];

  const onClickSubmit = (data: NewAlbumForm) => {
    console.log('*debug* onClickSubmit', data);
  };

  return (
    <Container>
      <Spacing.section.Minor />
      {/* <Autocomplete
        multiple
        options={tags}
        getOptionLabel={(option) => option.title}
        style={{ width: '100%' }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Tags"
            placeholder="Tags"
          />
        )}
      /> */}
      <Typography variant="h3">Lets get you setup!</Typography>
      <Spacing.BetweenParagraphs />
      <Typography variant="h6">What kind of music are you into?</Typography>
      <Spacing.BetweenParagraphs />
      <Controller
        name="tags"
        control={hookForm.control}
        rules={{
          validate: (value: Tag[]) =>
            value.length > 0 || 'Please select atleast one tag',
        }}
        defaultValue={null}
        render={(controllerProps) => (
          <Autocomplete
            {...controllerProps}
            multiple={true}
            options={tags}
            getOptionLabel={(option: Tag) => option.title}
            onChange={(e: any, values: any) =>
              hookForm.setValue('tags', values)
            }
            style={{ width: '100%' }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth={true}
                label="Tags"
                helperText={hookForm.errors.tags?.message}
                error={hookForm.errors.tags?.message !== undefined}
              />
            )}
          />
        )}
      />

      <Spacing.section.Major />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={hookForm.handleSubmit(onClickSubmit)}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <Typography variant="body2">Submit</Typography>
        )}
      </Button>
    </Container>
  );
};
