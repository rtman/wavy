import { useMutation } from '@apollo/react-hooks';
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
  Mutation,
  MutationAddSongsToAlbumArgs,
  MutationCreateAlbumArgs,
  NewAlbumForm,
  NewSongArgs,
  SongFields,
} from 'commonTypes';
import {
  FileUploadButton,
  Flex,
  SongForm,
  Spacing,
  Uploader,
} from 'components';
import * as consts from 'consts';
import { CreateAlbumContext, CreateAlbumProvider, UserContext } from 'context';
import * as helpers from 'helpers';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import ImageUploader from 'react-images-upload';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const userContext = useContext(UserContext);
  const uploadStatuses = useContextSelector(
    CreateAlbumContext,
    (values) => values?.uploadStatuses
  );
  const songsForUpload = useContextSelector(
    CreateAlbumContext,
    (values) => values?.songsForUpload
  );
  const updateSongsForUpload = useContextSelector(
    CreateAlbumContext,
    (values) => values?.updateSongsForUpload
  );

  const deleteSong = useContextSelector(
    CreateAlbumContext,
    (values) => values?.deleteSong
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

  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const { onDrop, image, imageFile } = helpers.hooks.useOnDropImage();
  const { uploadImage } = helpers.hooks.useUploadImage(imageFile);

  const { artists, creatorId, isLabel, releaseId } = props;

  const [createAlbum, { loading, called, error }] = useMutation<
    Pick<Mutation, 'createAlbum'>,
    MutationCreateAlbumArgs
  >(consts.mutations.album.CREATE_ALBUM, {
    onCompleted(data) {
      console.log('onCompleted data', data);
      if (data.createAlbum.id) {
        enqueueSnackbar('Success! Release Created, songs are processing', {
          variant: 'success',
          autoHideDuration: 4000,
        });
        history.push(`/album/${data.createAlbum.id}`);
      } else {
        enqueueSnackbar('Error! Release Not Created', {
          variant: 'error',
          autoHideDuration: 4000,
        });
      }
    },
  });

  const [addSongsToAlbum] = useMutation<
    Pick<Mutation, 'addSongsToAlbum'>,
    MutationAddSongsToAlbumArgs
  >(consts.mutations.album.ADD_SONGS_ALBUM, {
    onCompleted(data) {
      console.log('onCompleted data', data);
      if (data.addSongsToAlbum) {
        enqueueSnackbar('Processing complete', {
          variant: 'success',
          autoHideDuration: 4000,
        });
      } else {
        enqueueSnackbar('Error! Processing failed', {
          variant: 'error',
          autoHideDuration: 4000,
        });
      }
    },
    onError() {
      enqueueSnackbar('Error! Processing failed', {
        variant: 'error',
        autoHideDuration: 4000,
      });
    },
  });

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
  const { reset } = hookForm;
  const { fields, append, remove } = useFieldArray<SongFields>({
    control: hookForm.control,
    name: 'songs',
  });

  useEffect(() => {
    if ((acceptedFiles ?? []).length > 0 && updateSongsForUpload) {
      console.log('*debug* albumForm useEffect');
      const makeFormFromDropzone = () =>
        acceptedFiles?.map(
          (file): SongFields => ({
            ...defaultFormValues.songs[0],
            artist: null,
            title:
              file.name.lastIndexOf('.') !== -1
                ? file.name.substring(0, file.name.lastIndexOf('.'))
                : file.name.trim(),
          })
        );

      const makeSongsForUpload = () =>
        (acceptedFiles ?? []).map((file) => {
          return {
            title: file.name.trim(),
            file: file,
          };
        });

      updateSongsForUpload(makeSongsForUpload());
      reset({ songs: makeFormFromDropzone() });
    }
  }, [acceptedFiles, reset, defaultFormValues, updateSongsForUpload]);

  const removeSong = useCallback(
    (index: number) => {
      if (deleteSong && songsForUpload) {
        deleteSong(index);
        if (songsForUpload.length === 0) {
          acceptedFiles?.splice(0, acceptedFiles?.length);
        }
        remove(index);
      }
    },
    [acceptedFiles, deleteSong, remove, songsForUpload]
  );

  const appendSong = (fileAccepted: File[], fileRejected: FileRejection[]) => {
    const result = addSong?.(fileAccepted, fileRejected);
    if (result !== undefined) {
      append({ title: result });
    }
  };

  const onClickSubmit = async (data: NewAlbumForm) => {
    console.log('*debug* onSubmit data', data);

    if (imageFile === undefined) {
      enqueueSnackbar('Please select an image to upload', {
        variant: 'warning',
        autoHideDuration: 4000,
      });
      return;
    }

    if (
      uploadStatuses &&
      songsForUpload &&
      uploadStatuses.find((upload) => upload.data === undefined) ===
        undefined &&
      data.album.artist !== null
    ) {
      const resolvedSongsForUpload: NewSongArgs[] = songsForUpload.map(
        (_song, index) => {
          // data is checked above for undefined in the find
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const uploadData = uploadStatuses[index].data!;
          const { supportingArtists, ...rest } = data.songs[index];
          const resolvedSupportingArtists = supportingArtists?.map(
            (artist) => ({
              artistId: artist.id,
            })
          );

          const getArtistId = () => {
            if (isLabel && data.album.artist?.name !== 'Various Artists') {
              return data.album.artist?.id;
            }
            if (isLabel) {
              return data.songs[index].artist?.id;
            }

            return creatorId;
          };

          return {
            artistId: getArtistId(),
            storagePath: uploadData.fullStoragePath,
            ...rest,
            supportingArtists: resolvedSupportingArtists,
          };
        }
      );
      console.log(
        '*debug* onSubmit resolvedSongsForUpload',
        resolvedSongsForUpload
      );
      const result = await uploadImage({
        rootDir: creatorId,
        parentDir: 'albums',
        childDir: releaseId,
        fileName: 'profile',
      });
      console.log('*debug* albumForm uploadImage result', result);
      const userName = `${userContext?.user?.firstName} ${userContext?.user?.lastName}`;
      if (result && result.id && resolvedSongsForUpload.length > 0) {
        const {
          artist: { id: artistId },
          ...album
        } = data.album;
        await createAlbum({
          variables: {
            input: {
              ...album,
              // if is is a label the artistId is either various or a selected artist, otherwise it is the creator of the album, the artist
              artistId: isLabel ? artistId : creatorId,
              // if isLabel, we use the creatorId which is the label for labelId otherwise we dont apply a labelId
              labelId: isLabel ? creatorId : undefined,
              albumId: releaseId,
              profileImageStoragePath: result.fullStoragePath,
              userName,
            },
          },
        });
        // we add the songs seperately, and don't await this mutation, after creating the album because we want the audio processing to be done in the background
        // the album is tagged as processing and will be viewable but disabled until processing is completed
        addSongsToAlbum({
          variables: {
            input: {
              userName,
              albumId: releaseId,
              labelId: isLabel ? creatorId : undefined,
              songsToAdd: resolvedSongsForUpload,
            },
          },
        });
      }
    } else {
      enqueueSnackbar("Error! Files aren't done uploading", {
        variant: 'error',
        autoHideDuration: 4000,
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

  console.log('*debug* albumForm acceptedFiles', acceptedFiles);
  console.log('*debug* albumForm releaseId', releaseId);
  console.log('*debug* albumForm uploadStatuses', uploadStatuses);
  console.log('*debug* albumForm songsForUpload', songsForUpload);

  // const setUploadStatusCallback = useCallback(() => setUploadStatus, []);

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

          <Grid item={true} xs={12} sm={6} md={3}>
            <Flex flexDirection="column">
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
                label="Release Title"
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
                    label="Release Date"
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
                defaultValue="album.releaseDate"
                value="album.releaseDate"
                name="album.releaseDate"
              />
            </MuiPickersUtilsProvider>
          </Grid>
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

          <Spacing.section.Major />

          {(songsForUpload ?? []).length > 0 ? (
            <>
              <List style={{ width: '100%' }}>
                {fields.map((data, index) => {
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
                        removeSong={removeSong}
                        artists={artists}
                      />
                      {fields.length !== index + 1 ? (
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
                    appendSong(fileAccepted, fileRejected)
                  }
                />

                <Spacing.BetweenComponents />

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
