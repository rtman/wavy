import { Grid, IconButton, TextField, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Autocomplete } from '@material-ui/lab';
import { Flex } from 'components';
import React, { memo } from 'react';
import { ArrayField, Controller, useFormContext } from 'react-hook-form';
import { Artist, ArtistAutocomplete, SongFields } from 'types';

interface SongUploadFormProps {
  artists?: ArtistAutocomplete[];
  formData: Partial<ArrayField<SongFields, 'id'>>;
  index: number;
  removeSong: (index: number) => void;
}

export const SongForm = memo((props: SongUploadFormProps) => {
  const { artists, index, formData, removeSong } = props;

  const formContext = useFormContext();

  // FIXME: fix type
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const watchVariousArtists: SongFields['artist'] = formContext.watch(
    'album.artist'
  );

  return (
    <Grid item={true} container={true} xs={12}>
      <Grid item={true} xs={1}>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          fullHeight={true}
        >
          <Typography variant="h4">{index + 1}</Typography>
        </Flex>
      </Grid>

      <Grid item={true} container={true} xs={10} spacing={2}>
        <Grid item={true} xs={12} sm={6}>
          <Controller
            as={
              <TextField
                // FIXME: fix type
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                helperText={formContext.errors.songs?.[index]?.title?.message}
                // FIXME: fix type
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
        </Grid>
        <Grid item={true} xs={12} sm={6}>
          <Controller
            as={
              <TextField
                // FIXME: fix type
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                helperText={formContext.errors.songs?.[index]?.isrc?.message}
                // FIXME: fix type
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
                  value?.length === 0 ||
                  value?.length === 12 ||
                  'ISRC codes need to be 12 characters',
              },
            }}
          />
        </Grid>
        {watchVariousArtists?.name === 'Various Artists' ? (
          <Grid item={true} xs={12} sm={6}>
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
                  getOptionLabel={(option: ArtistAutocomplete) => option.name}
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
                        // FIXME: fix type
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                        formContext.errors.songs?.[index]?.artist?.message
                      }
                      error={
                        // FIXME: fix type
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                        formContext.errors.songs?.[index]?.artist !== undefined
                      }
                    />
                  )}
                />
              )}
            />
          </Grid>
        ) : null}

        <Grid item={true} xs={12} sm={6}>
          <Controller
            name={`songs[${index}].supportingArtists`}
            control={formContext.control}
            rules={{
              validate: (value: ArtistAutocomplete[]) => {
                // FIXME: fix type
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const songArtist: Artist | null = formContext.getValues(
                  `songs[${index}].artist`
                );
                // FIXME: fix type
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const albumArtist: Artist | null = formContext.getValues(
                  'album.artist'
                );

                if (albumArtist) {
                  const supportingArtistEqualsAlbumArtist = value.find(
                    (supportingArtist) => supportingArtist.id === albumArtist.id
                  );

                  if (supportingArtistEqualsAlbumArtist) {
                    return 'The album artist cannot be a supporting artist';
                  }
                }
                if (songArtist) {
                  const supportingArtistEqualsSongArtist = value.find(
                    (supportingArtist) => supportingArtist.id === songArtist.id
                  );

                  if (supportingArtistEqualsSongArtist) {
                    return 'The song artist cannot be a supporting artist';
                  }
                }
              },
            }}
            defaultValue={formData.supportingArtists}
            render={(controllerProps) => (
              <Autocomplete
                {...controllerProps}
                multiple={true}
                options={artists ?? []}
                getOptionLabel={(option: ArtistAutocomplete) => option.name}
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
                      // FIXME: fix type
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                      formContext.errors.songs?.[index]?.supportingArtists
                        ? // FIXME: fix type
                          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                          formContext.errors.songs?.[index]?.supportingArtists
                            ?.message
                        : 'Optional'
                    }
                    error={
                      // FIXME: fix type
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                      formContext.errors.songs?.[index]?.supportingArtists !==
                      undefined
                    }
                  />
                )}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid item={true} xs={1}>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-end"
          fullHeight={true}
        >
          <IconButton
            type="submit"
            color="primary"
            onClick={() => removeSong(index)}
          >
            <DeleteIcon />
          </IconButton>
        </Flex>
      </Grid>
    </Grid>
  );
});

SongForm.displayName = 'SongForm';
SongForm.whyDidYouRender = true;
