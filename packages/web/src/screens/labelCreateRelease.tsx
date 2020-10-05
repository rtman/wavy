import { useMutation, useQuery } from '@apollo/react-hooks';
import MomentUtils from '@date-io/moment';
import {
  Button,
  CircularProgress,
  Container,
  FormControlLabel,
  List,
  Switch,
  TextField,
  Typography,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles, WithTheme } from '@material-ui/core/styles';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import {
  AlbumFields,
  Artist,
  CreateAlbumArgs,
  Mutation,
  MutationAddSongsToAlbumArgs,
  MutationCreateAlbumArgs,
  NewAlbumForm,
  NewSongArgs,
  Query,
  SongFields,
  SongForUpload,
} from 'commonTypes';
import {
  // Autocomplete,
  FileUploadButton,
  Flex,
  // Flex,
  SongUploadForm,
  Spacing,
} from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import * as helpers from 'helpers';
import { UploadStatus } from 'helpers/hooks';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import ImageUploader from 'react-images-upload';
import { useHistory, useParams } from 'react-router-dom';
import styled, { CSSObject } from 'styled-components';
import { uuid } from 'uuidv4';

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
  // submit: {
  //   margin: theme.spacing(3, 0, 2),
  // },
}));

export const LabelCreateRelease = () => {
  const history = useHistory();
  const { id } = useParams();
  const userContext = useContext(UserContext);

  const { enqueueSnackbar } = useSnackbar();
  const [songsForUpload, setSongsForUpload] = useState<SongForUpload[]>([]);
  const [uploadStatuses, setUploadStatuses] = useState<UploadStatus[]>([]);
  const [releaseId, setReleaseId] = useState<string>('');
  // const [acceptedFiles, setacceptedFiles] = useState<File[]>([]);
  // const [fileRejections, setfileRejections] = useState<File[]>([]);

  const {
    loading: labelByIdLoading,
    error: labelByIdError,
    data: labelByIdData,
  } = useQuery<Pick<Query, 'labelById'>>(consts.queries.label.LABEL_BY_ID, {
    variables: { labelId: id },
  });

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

  const [
    addSongsToAlbum,
    {
      loading: addSongsToAlbumLoading,
      called: addSongsToAlbumCalled,
      error: addSongsToAlbumError,
    },
  ] = useMutation<
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

  const classes = useStyles();
  // const uploadFile = helpers.hooks.useFirebaseStorageUpload();
  const { onDrop, image, imageFile } = helpers.hooks.useOnDropImage();
  const {
    getRootProps,
    getInputProps,
    open,
    acceptedFiles,
    fileRejections,
    isDragAccept,
    isDragActive,
    isDragReject,
  } = useDropzone({
    // Disable click and keydown behavior
    // noClick: true,
    // noKeyboard: true,
    accept: 'audio/*',
    // noDragEventsBubbling: true,
    // preventDropOnDocument: true,
  });

  const { uploadImage } = helpers.hooks.useUploadImage(imageFile);

  const hookForm = useForm<NewAlbumForm>({
    defaultValues: {
      album: {
        artist: null,
        newArtistEmail: '',
        newArtistName: '',
        isNewArtist: false,
        releaseDate: null,
        title: '',
        variousArtists: false,
      },
      songs: [
        {
          artist: null,
          newArtistEmail: '',
          newArtistName: '',
          hasSupportingArtists: false,
          isNewArtist: false,
          isrc: '',
          title: '',
          supportingArtists: null,
        },
      ],
    },
  });
  const { reset } = hookForm;
  const { fields, append, remove } = useFieldArray<SongFields>({
    control: hookForm.control,
    name: 'songs',
  });

  const watchVariousArtists: AlbumFields['artist'] = hookForm.watch(
    'album.artist'
  );
  const watchIsNewArtist: AlbumFields['isNewArtist'] = hookForm.watch(
    'album.isNewArtist'
  );

  useEffect(() => {
    setReleaseId(uuid());
  }, []);

  useEffect(() => {
    if (error) {
      enqueueSnackbar('Error! Release Not Created', {
        variant: 'error',
        autoHideDuration: 4000,
      });
    }
  }, [error, enqueueSnackbar]);

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const makeFormFromDropzone = () =>
        acceptedFiles.map(
          (file): SongFields => ({
            artist: null,
            newArtistEmail: '',
            newArtistName: '',
            hasSupportingArtists: false,
            isNewArtist: false,
            isrc: '',
            supportingArtists: [],
            title:
              file.name.lastIndexOf('.') !== -1
                ? file.name.substring(0, file.name.lastIndexOf('.'))
                : file.name.trim(),
          })
        );

      const makeSongsForUpload = () =>
        acceptedFiles.map((file) => {
          return {
            title: file.name.trim(),
            file: file,
          };
        });

      setSongsForUpload(makeSongsForUpload());
      reset({ songs: makeFormFromDropzone() });
    }
  }, [acceptedFiles, reset]);

  const removeSong = (index: number) => {
    if (uploadStatuses[index]) {
      const upload = uploadStatuses[index];

      if (upload.complete && upload.task) {
        upload.task.snapshot.ref.delete();
      }

      if (upload.running && !upload.complete && upload.task) {
        upload.task.cancel();
      }

      const resolvedSongsForUpload = [...songsForUpload];
      resolvedSongsForUpload.splice(index, 1);
      setSongsForUpload(resolvedSongsForUpload);

      if (resolvedSongsForUpload.length === 0) {
        acceptedFiles.splice(0, acceptedFiles.length);
      }

      const resolvedUploadStatuses = [...uploadStatuses];
      resolvedUploadStatuses.splice(index, 1);
      setUploadStatuses(resolvedUploadStatuses);

      remove(index);
    }
  };

  const addSong = (fileAccepted: File[], fileRejected: FileRejection[]) => {
    console.log('*debug* addFileToAddedSong fileAccepted', fileAccepted);
    console.log('*debug* addFileToAddedSong fileRejected', fileRejected);
    if (fileAccepted.length > 0) {
      const newFile = fileAccepted[0];
      const resolvedSongsForUpload = [...songsForUpload];

      let title = newFile.name.trim();

      if (newFile.name.lastIndexOf('.') !== -1) {
        title = newFile.name.substring(0, newFile.name.lastIndexOf('.')).trim();
      }

      resolvedSongsForUpload.push({
        title: newFile.name.trim(),
        file: newFile,
      });

      setSongsForUpload(resolvedSongsForUpload);

      append({ title });
    }

    if (fileRejected.length > 0) {
      enqueueSnackbar('Error! Wrong file type please try again', {
        variant: 'error',
        autoHideDuration: 4000,
      });
    }
  };

  const setUploadStatus = (newUploadStatus: UploadStatus, index: number) => {
    const uploadStatusesCloned = [...uploadStatuses];
    uploadStatusesCloned[index] = newUploadStatus;
    setUploadStatuses(uploadStatusesCloned);
  };

  const onSubmit = async (data: {
    album: CreateAlbumArgs;
    songs: NewSongArgs[];
  }) => {
    console.log('*debug* onSubmit data.album', data.album);
    console.log('*debug* onSubmit data.songs', data.songs);
    // if (
    //   uploadStatuses.find((upload) => upload.data === undefined) === undefined
    // ) {
    //   const resolvedSongsForUpload = songsForUpload.map((song, index) => {
    //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //     const { file, ...rest } = song;

    //     // data is checked above for undefined in the find
    //     // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    //     const uploadData = uploadStatuses[index].data!;

    //     return {
    //       ...rest,
    //       title: data.songs[index].title.trim(),
    //       storagePath: uploadData.gsUrl,
    //       url: uploadData.downloadUrl,
    //     };
    //   });

    //   console.log(
    //     '*debug* onSubmit resolvedSongsForUpload',
    //     resolvedSongsForUpload
    //   );

    //   const result = await uploadImage({
    //     rootDir: id,
    //     parentDir: 'albums',
    //     childDir: releaseId,
    //     fileName: 'albumImage',
    //   });

    //   console.log('result', result);

    //   if (result && result.id && resolvedSongsForUpload.length > 0) {
    //     await createAlbum({
    //       variables: {
    //         input: {
    //           ...data.album,
    //           albumId: result.id,
    //           artistId: id,
    //           profileImageStoragePath: result.gsUrl,
    //         },
    //       },
    //     });
    //     // we add the songs seperately, and don't await this mutation, after creating the album because we want the audio processing to be done in the background
    //     // the album is tagged as processing and will be viewable but disabled until processing is completed
    //     addSongsToAlbum({
    //       variables: {
    //         input: {
    //           userName: `${userContext?.user?.firstName} ${userContext?.user?.lastName}`,
    //           albumId: result.id,
    //           artistId: id,
    //           songsToAdd: resolvedSongsForUpload ?? {
    //             title: '',
    //             storagePath: '',
    //           },
    //         },
    //       },
    //     });
    //   }
    // } else {
    //   enqueueSnackbar("Error! Files aren't done uploading", {
    //     variant: 'error',
    //     autoHideDuration: 4000,
    //   });
    // }
  };

  console.log('*debug* acceptedFiles', acceptedFiles);
  console.log('*debug* fileRejections', fileRejections);
  console.log('*debug* uploadStatuses', uploadStatuses);
  console.log('*debug* songsForUpload', songsForUpload);

  console.log('*debug* formErrors', hookForm.errors);
  console.log('*debug* watchVariousArtists', watchVariousArtists);
  console.log('*debug* watchIsNewArtist', watchIsNewArtist);

  const artistData = (labelByIdData?.labelById.artistConnections ?? []).map(
    (artistConnectionInstance) => artistConnectionInstance.artist
  );

  return (
    <FormProvider {...hookForm}>
      <Container>
        <Spacing.section.Minor />
        <Typography variant="h1">New Release</Typography>

        <Spacing.section.Minor />

        {acceptedFiles.length > 0 && fileRejections.length === 0 ? (
          <>
            <Flex>
              {image ? (
                <img src={image} width={500} height={500} />
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

              <Spacing.section.Minor />

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
                <Flex fullWidth={true}>
                  <Flex flexDirection="column" fullWidth={true}>
                    {watchVariousArtists?.name === 'Various Artists' ? null : (
                      <FormControlLabel
                        label="New Artist"
                        control={
                          <Switch
                            inputRef={hookForm.register()}
                            name={'album.isNewArtist'}
                            id={'new-artist'}
                          />
                        }
                      />
                    )}
                    {watchIsNewArtist ? (
                      <Flex fullWidth={true}>
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
                          name={'album.newArtistName'}
                          label="New Artist Name"
                          id={'new-artist-name'}
                          helperText={
                            hookForm.errors.album?.newArtistName?.message
                          }
                          error={
                            hookForm.errors.album?.newArtistName !== undefined
                          }
                        />
                        <TextField
                          inputRef={hookForm.register({
                            required: {
                              value: true,
                              message: 'Required',
                            },
                            pattern: {
                              value: consts.regex.email,
                              message: 'Please enter a valid email',
                            },
                          })}
                          margin="normal"
                          fullWidth={true}
                          name={'album.newArtistEmail'}
                          label="New Artist Email"
                          id={'new-artist-email'}
                          helperText={
                            hookForm.errors.album?.newArtistEmail?.message
                          }
                          error={
                            hookForm.errors.album?.newArtistEmail !== undefined
                          }
                        />
                      </Flex>
                    ) : (
                      <Controller
                        name="album.artist"
                        control={hookForm.control}
                        rules={{
                          validate: (value: Artist) =>
                            hookForm.getValues('album.artist') !==
                            'Various Artists'
                              ? value !== null || 'Please select an artist'
                              : undefined,
                        }}
                        defaultValue={null}
                        render={(controllerProps) => (
                          <Autocomplete
                            {...controllerProps}
                            options={artistData ?? []}
                            getOptionLabel={(option) => option.name}
                            onChange={(e: any, values: any) =>
                              hookForm.setValue('album.artist', values)
                            }
                            style={{ width: '100%' }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                fullWidth={true}
                                label="Artist"
                                helperText={
                                  hookForm.errors.album?.artist?.message
                                }
                                error={
                                  hookForm.errors.album?.artist !== undefined
                                }
                              />
                            )}
                          />
                        )}
                      />
                    )}
                  </Flex>

                  <Spacing.BetweenComponents />

                  <MuiPickersUtilsProvider
                    libInstance={moment}
                    utils={MomentUtils}
                  >
                    <Controller
                      as={
                        <DatePicker
                          disableFuture={true}
                          openTo="year"
                          format="DD/MM/yyyy"
                          label="Release Date"
                          views={['year', 'month', 'date']}
                          helperText={
                            hookForm.errors.album?.releaseDate?.message
                          }
                          error={
                            hookForm.errors.album?.releaseDate !== undefined
                          }
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
                </Flex>
              </Flex>
            </Flex>

            <Spacing.section.Major />

            {songsForUpload.length > 0 ? (
              <>
                <List>
                  {fields.map((data, index) => {
                    return (
                      <li key={data.id}>
                        <SongUploadForm
                          creatorId={id}
                          releaseId={releaseId}
                          songData={songsForUpload[index]}
                          formData={data}
                          index={index}
                          setUploadStatusCallback={setUploadStatus}
                          removeSong={() => removeSong(index)}
                          artists={artistData}
                        />
                        {fields.length !== index + 1 ? (
                          <Spacing.section.Minor />
                        ) : null}
                      </li>
                    );
                  })}
                </List>

                <Spacing.section.Major />

                <FileUploadButton
                  acceptedTypes="audio/*"
                  onDrop={(fileAccepted, fileRejected) =>
                    addSong(fileAccepted, fileRejected)
                  }
                />

                <Spacing.BetweenComponents />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  // className={classes.submit}
                  onClick={hookForm.handleSubmit(onSubmit)}
                >
                  {called || loading ? (
                    <CircularProgress />
                  ) : (
                    <Typography variant="body2">Submit</Typography>
                  )}
                </Button>
              </>
            ) : null}
          </>
        ) : (
          <DropzoneContainer
            // borderColor={getColor()}
            borderColor={'#eeee'}
            {...getRootProps({})}
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop audio files here</p>
            {fileRejections.length > 0 ? (
              <Typography variant="body1">
                Some files were rejected, please check you are submitting audio
                files.
              </Typography>
            ) : null}
            <button type="button" onClick={open}>
              Open File Dialog
            </button>
          </DropzoneContainer>
        )}
      </Container>
    </FormProvider>
  );
};

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