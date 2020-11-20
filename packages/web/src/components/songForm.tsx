import {
  FormControlLabel,
  IconButton,
  makeStyles,
  Switch,
  TextField,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Autocomplete } from '@material-ui/lab';
import { Artist, ArtistAutocomplete, SongFields } from 'commonTypes';
import { Flex, Spacing } from 'components';
import { CreateAlbumContext } from 'context';
import React, { memo } from 'react';
import { ArrayField, Controller, useFormContext } from 'react-hook-form';
import { useContextSelector } from 'use-context-selector';

interface SongUploadFormProps {
  artists?: ArtistAutocomplete[];
  formData: Partial<ArrayField<SongFields, 'id'>>;
  index: number;
  removeSong: (index: number) => void;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export const SongForm = memo((props: SongUploadFormProps) => {
  const { artists, index, formData, removeSong } = props;

  const classes = useStyles();
  const formContext = useFormContext();

  const watchHasSupportingArtists: SongFields['hasSupportingArtists'] = formContext.watch(
    `songs[${index}].hasSupportingArtists`
  );
  const watchVariousArtists: SongFields['artist'] = formContext.watch(
    'album.artist'
  );

  return (
    <div className={classes.root}>
      <Spacing.section.Minor />

      <Flex alignItems="center">
        <Typography variant="h4">{index + 1}</Typography>

        <Spacing.BetweenComponents />

        <Flex flexDirection="column" alignSelf="flex-start" fullWidth={true}>
          <Controller
            as={
              <TextField
                helperText={formContext.errors.songs?.[index]?.title?.message}
                error={formContext.errors.songs?.[index]?.title !== undefined}
              />
            }
            margin="normal"
            fullWidth={true}
            name={`songs[${index}].title`}
            label="Title"
            id={`title-${index}`}
            control={formContext.control}
            defaultValue={formData.title}
            rules={{
              required: {
                value: true,
                message: 'Required',
              },
              minLength: {
                value: 2,
                message: 'Enter at least 2 characters',
              },
            }}
          />

          {watchVariousArtists?.name === 'Various Artists' ? (
            <Controller
              name={`songs[${index}].artist`}
              control={formContext.control}
              rules={{
                validate: (value: Artist) =>
                  formContext.getValues('album.artist') !== 'Various Artists'
                    ? value !== null || 'Please select an artist'
                    : undefined,
              }}
              defaultValue={formData.artist}
              render={(controllerProps) => (
                <Autocomplete
                  {...controllerProps}
                  options={artists ?? []}
                  getOptionLabel={(option) => option.name}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onChange={(e: any, values: any) =>
                    formContext.setValue(`songs[${index}].artist`, values)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth={true}
                      label="Artist"
                      helperText={
                        formContext.errors.songs?.[index]?.artist?.message
                      }
                      error={
                        formContext.errors.songs?.[index]?.artist !== undefined
                      }
                    />
                  )}
                />
              )}
            />
          ) : null}

          <Controller
            as={
              <TextField
                helperText={formContext.errors.songs?.[index]?.isrc?.message}
                error={formContext.errors.songs?.[index]?.isrc !== undefined}
              />
            }
            margin="normal"
            fullWidth={true}
            name={`songs[${index}].isrc`}
            label="ISRC"
            id={`isrc-${index}`}
            control={formContext.control}
            defaultValue={formData.isrc}
            rules={{
              validate: {
                length: (value: string) =>
                  value?.length === 12 || 'ISRC codes need to be 12 characters',
              },
            }}
          />
        </Flex>

        <Flex flexDirection="column" alignSelf="flex-start">
          <FormControlLabel
            label="Supporting Artists"
            control={
              <Switch
                inputRef={formContext.register()}
                name={`songs[${index}].hasSupportingArtists`}
                id={'various-artists'}
              />
            }
          />

          {watchHasSupportingArtists ? (
            <Controller
              name={`songs[${index}].supportingArtists`}
              control={formContext.control}
              rules={{
                validate: (value: Artist[]) =>
                  formContext.getValues(`songs[${index}].hasSupportingArtists`)
                    ? value.length > 0 || 'Please select an artist'
                    : undefined,
              }}
              defaultValue={formData.supportingArtists}
              render={(controllerProps) => (
                <Autocomplete
                  {...controllerProps}
                  multiple={true}
                  options={artists ?? []}
                  getOptionLabel={(option) => option.name}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onChange={(e: any, values: any) =>
                    formContext.setValue(
                      `songs[${index}].supportingArtists`,
                      values
                    )
                  }
                  style={{ width: '100%' }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth={true}
                      label="Supporting Artists"
                      helperText={
                        formContext.errors.songs?.[index]?.supportingArtists
                          ?.message
                      }
                      error={
                        formContext.errors.songs?.[index]?.supportingArtists !==
                        undefined
                      }
                    />
                  )}
                />
              )}
            />
          ) : null}
        </Flex>

        <Spacing.BetweenComponents />

        <IconButton
          type="submit"
          color="primary"
          onClick={() => removeSong(index)}
        >
          <DeleteIcon />
        </IconButton>
      </Flex>
    </div>
  );
});

SongForm.displayName = 'SongForm';
SongForm.whyDidYouRender = true;
