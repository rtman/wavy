import MomentUtils from '@date-io/moment';
import {
  Button,
  CircularProgress,
  Grid,
  List,
  TextField,
  Typography,
  useTheme,
} from '@material-ui/core';
import { makeStyles, WithTheme } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import {
  Artist,
  ArtistAutocomplete,
  NewAlbumForm,
  SongFields,
} from 'commonTypes';
import {
  FileUploadButton,
  Flex,
  SongForm,
  Spacing,
  Uploader,
} from 'components';
import { CreateAlbumContext, CreateAlbumProvider, UserContext } from 'context';
import * as helpers from 'helpers';
import moment from 'moment';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { FileRejection } from 'react-dropzone';
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import ImageUploader from 'react-images-upload';
import styled, { CSSObject } from 'styled-components';
import { useContextSelector } from 'use-context-selector';

interface CreateAlbumFormProps {
  artists: ArtistAutocomplete[];
  creatorId: string;
  isLabel?: boolean;
  releaseId: string;
}

export const AlbumForm = memo((props: CreateAlbumFormProps) => {
  const classes = useStyles();
  const songsForUpload = useContextSelector(
    CreateAlbumContext,
    (values) => values?.songsForUpload
  );
  const removeSong = useContextSelector(
    CreateAlbumContext,
    (values) => values?.removeSong
  );
  const getRootProps = useContextSelector(
    CreateAlbumContext,
    (values) => values?.getRootProps
  );
  const getInputProps = useContextSelector(
    CreateAlbumContext,
    (values) => values?.getInputProps
  );
  const acceptedFiles = useContextSelector(
    CreateAlbumContext,
    (values) => values?.acceptedFiles
  );
  const fileRejections = useContextSelector(
    CreateAlbumContext,
    (values) => values?.fileRejections
  );
  const addSong = useContextSelector(
    CreateAlbumContext,
    (values) => values?.addSong
  );
  const submitAlbum = useContextSelector(
    CreateAlbumContext,
    (values) => values?.submitAlbum
  );
  const busyState = useContextSelector(
    CreateAlbumContext,
    (values) => values?.busyState
  );
  const initForm = useContextSelector(
    CreateAlbumContext,
    (values) => values?.initForm
  );

  const theme = useTheme();
  const { onDrop, image, imageFile } = helpers.hooks.useOnDropImage();

  const { artists, creatorId, isLabel, releaseId } = props;

  const defaultFormValues: NewAlbumForm = useMemo(
    () => ({
      album: {
        artist: null,
        description: '',
        releaseDate: null,
        title: '',
      },
      songs: [
        {
          artist: null,
          isrc: '',
          title: '',
          supportingArtists: [],
        },
      ],
    }),
    []
  );

  const hookForm = useForm<NewAlbumForm>({
    defaultValues: {},
  });
  const { reset: resetHookForm } = hookForm;
  const {
    fields: fieldArrayFields,
    append: appendToFieldArray,
    remove: removeFromFieldArray,
  } = useFieldArray<SongFields>({
    control: hookForm.control,
    name: 'songs',
  });

  useEffect(() => {
    if ((acceptedFiles ?? []).length > 0) {
      console.log('*debug* albumForm useEffect');
      const songs = initForm?.(defaultFormValues);
      resetHookForm({ songs });
    }
  }, [acceptedFiles, resetHookForm, defaultFormValues, initForm]);

  const onClickRemoveSong = useCallback(
    (index: number) => {
      removeSong?.(index);
      removeFromFieldArray(index);
    },
    [removeFromFieldArray, removeSong]
  );

  const onClickAddSong = (
    fileAccepted: File[],
    fileRejected: FileRejection[]
  ) => {
    const result = addSong?.(fileAccepted, fileRejected);
    if (result !== undefined) {
      appendToFieldArray({ title: result });
    }
  };

  const onClickSubmit = (data: NewAlbumForm) => {
    if (imageFile) {
      submitAlbum?.({
        data,
        imageFile,
        creatorId,
        releaseId,
        isLabel: isLabel ?? false,
      });
    }
  };

  // TODO: make this dynamic, get values from server
  const artistsWithVariousArtists = [
    ...artists,
    {
      id: '0b600e0a-96d0-4ec0-bc94-2587a6b3507a',
      name: 'Various Artists',
    },
  ];

  return (
    <FormProvider {...hookForm}>
      {(acceptedFiles ?? []).length > 0 &&
      (fileRejections ?? []).length === 0 ? (
        <Grid container={true} spacing={2}>
          <Grid item={true} xs={12} sm={6}>
            {image ? (
              <img
                style={{
                  minHeight: 50,
                  minWidth: 50,
                  maxHeight: 250,
                  maxWidth: 250,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  flexShrink: 1,
                }}
                src={image}
              />
            ) : (
              <ImageUploader
                className={classes.imageUploader}
                withIcon={true}
                buttonText="Select Image"
                onChange={onDrop}
                imgExtension={['.jpg', '.png', 'jpeg']}
                maxFileSize={5242880}
                singleImage={true}
                style={{ width: undefined }}
              />
            )}
          </Grid>

          <Grid item={true} xs={12} sm={6}>
            <Flex flexDirection="column" fullWidth={true}>
              <TextField
                inputRef={hookForm.register({
                  required: {
                    value: true,
                    message: 'Required',
                  },
                  minLength: {
                    value: 2,
                    message: 'Enter at least 2 characters',
                  },
                })}
                margin="normal"
                fullWidth={true}
                name={'album.title'}
                label="Title"
                id={'release-title'}
                helperText={hookForm.errors.album?.title?.message}
                error={hookForm.errors.album?.title !== undefined}
              />
              <TextField
                inputRef={hookForm.register({
                  required: {
                    value: true,
                    message: 'Required',
                  },
                  minLength: {
                    value: 2,
                    message: 'Enter at least 2 characters',
                  },
                })}
                margin="normal"
                multiline={true}
                fullWidth={true}
                name={'album.description'}
                label="Description"
                id={'release-description'}
                helperText={hookForm.errors.album?.description?.message}
                error={hookForm.errors.album?.description !== undefined}
              />
            </Flex>
          </Grid>
          <Grid item={true} xs={12} sm={6}>
            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
              <Controller
                as={
                  <DatePicker
                    disableFuture={true}
                    openTo="year"
                    format="DD/MM/yyyy"
                    label="Date"
                    views={['year', 'month', 'date']}
                    helperText={hookForm.errors.album?.releaseDate?.message}
                    error={hookForm.errors.album?.releaseDate !== undefined}
                    style={{ flex: 1 }}
                    value={undefined}
                    onChange={() => null}
                    placeholder="Release Date"
                  />
                }
                rules={{
                  validate: {
                    nonEmpty: (value: Date | null) =>
                      value !== null || 'Please select a release date',
                  },
                }}
                control={hookForm.control}
                defaultValue={new Date()}
                value="album.releaseDate"
                name="album.releaseDate"
              />
            </MuiPickersUtilsProvider>
          </Grid>
          {isLabel ? (
            <Grid item={true} xs={12} sm={6}>
              <Controller
                name="album.artist"
                control={hookForm.control}
                rules={{
                  validate: (value: Artist) =>
                    hookForm.getValues('album.artist') !== 'Various Artists'
                      ? value !== null || 'Please select an artist'
                      : undefined,
                }}
                defaultValue={null}
                render={(controllerProps) => (
                  <Autocomplete
                    {...controllerProps}
                    options={
                      (isLabel ? artistsWithVariousArtists : artists) ?? []
                    }
                    getOptionLabel={(option) => option.name}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onChange={(e: any, values: any) =>
                      hookForm.setValue('album.artist', values)
                    }
                    style={{ width: '100%' }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth={true}
                        label="Artist"
                        helperText={hookForm.errors.album?.artist?.message}
                        error={hookForm.errors.album?.artist !== undefined}
                      />
                    )}
                  />
                )}
              />
            </Grid>
          ) : null}

          <Spacing.section.Major />

          {fieldArrayFields.length > 0 ? (
            <>
              <List style={{ width: '100%' }}>
                {fieldArrayFields.map((data, index) => {
                  return (
                    <li key={data.id}>
                      <Uploader
                        creatorId={creatorId}
                        releaseId={releaseId}
                        songData={(songsForUpload ?? [])[index]}
                        index={index}
                      />

                      <Spacing.section.Minor />

                      <SongForm
                        formData={data}
                        index={index}
                        removeSong={onClickRemoveSong}
                        artists={artists}
                      />
                      {fieldArrayFields.length !== index + 1 ? (
                        <Spacing.section.Major />
                      ) : null}
                    </li>
                  );
                })}
              </List>
              <Grid item={true} xs={12}>
                <FileUploadButton
                  acceptedTypes="audio/*"
                  onDrop={(fileAccepted, fileRejected) =>
                    onClickAddSong(fileAccepted, fileRejected)
                  }
                />

                <Spacing.BetweenComponents />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={hookForm.handleSubmit(onClickSubmit)}
                >
                  {busyState ? (
                    <CircularProgress />
                  ) : (
                    <Typography variant="body2">Submit</Typography>
                  )}
                </Button>
              </Grid>
            </>
          ) : null}
        </Grid>
      ) : (
        <DropzoneContainer
          // borderColor={getColor()}
          borderColor={theme.palette.grey[500]}
          {...getRootProps?.({})}
        >
          <input {...getInputProps?.()} />
          <Typography variant="h5">Drop audio files here</Typography>

          {(fileRejections ?? []).length > 0 ? (
            <Typography variant="body1">
              Some files were rejected, please check you are submitting audio
              files.
            </Typography>
          ) : null}
          <Spacing.BetweenComponents />

          <Typography variant="body1">Or</Typography>

          <Spacing.BetweenComponents />

          <Button variant="contained" color="primary">
            Select Files
          </Button>
        </DropzoneContainer>
      )}
    </FormProvider>
  );
});

// Private helpers

// const getColor = () => {
//   if (isDragAccept) {
//     return '#00e676';
//   }
//   if (isDragReject) {
//     return '#ff1744';
//   }
//   if (isDragActive) {
//     return '#2196f3';
//   }
//   return '#eeeeee';
// };

// Private Styles

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  imageUploader: {
    width: 'auto',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const DropzoneContainer = styled.div(
  (props: { borderColor: string } & WithTheme): CSSObject => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: '2px',
    borderRadius: '2px',
    borderColor: props.borderColor,
    borderStyle: 'dashed',
    // backgroundColor: props.theme.palette.background.default,
    // color: props.theme.palette.background.default,
    outline: 'none',
    transition: 'border 0.24s ease-in-out',
    id: 'dropzone',
    cursor: 'pointer',
  })
);

AlbumForm.displayName = 'AlbumForm';
AlbumForm.whyDidYouRender = true;
