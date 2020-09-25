import { useMutation, useQuery } from '@apollo/react-hooks';
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
import { makeStyles, WithTheme } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';
import {
  FileUploadButton,
  // Flex,
  SongUploadForm,
  Spacing,
} from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import * as helpers from 'helpers';
import { UploadStatus } from 'helpers/hooks';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
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
import {
  CreateAlbumArgs,
  Mutation,
  MutationAddSongsToAlbumArgs,
  MutationCreateAlbumArgs,
  NewSongArgs,
  Query,
} from 'types';
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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface SongForUpload {
  title: string;
  storagePath?: string;
  file: File;
}

interface Tag {
  id: string;
  title: string;
}

interface Artist {
  id: string;
  name: string;
  __typename: string;
}

interface SongFields {
  artist?: Artist;
  hasSupportingArtists?: boolean;
  isrc?: string;
  supportingArtists?: Artist[];
  title?: string;
}

interface AlbumFields {
  title?: string;
  artist?: Artist;
  releaseDate?: Date;
  variousArtists?: boolean;
}

interface Form {
  album: AlbumFields;
  songs: SongFields[];
}

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
  const [inputValue, setInputValue] = useState<string>('');
  const [artistAutocompleteOpen, setArtistAutoCompleteOpen] = useState<boolean>(
    false
  );
  const handleOpenArtistAutocomplete = () =>
    inputValue.length > 1 ? setArtistAutoCompleteOpen(true) : null;

  const handleInputChange = (
    _event: React.ChangeEvent<{}>,
    newInputValue: string
  ) => {
    setInputValue(newInputValue);
    newInputValue.length > 1
      ? setArtistAutoCompleteOpen(true)
      : setArtistAutoCompleteOpen(false);
  };

  const {
    loading: artistsLoading,
    error: artistsError,
    data: artistsData,
  } = useQuery<Pick<Query, 'artists'>>(consts.queries.artist.ARTISTS);

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

  const hookForm = useForm<Form>({
    defaultValues: {
      album: {
        title: undefined,
        artist: undefined,
        releaseDate: undefined,
        variousArtists: false,
      },
      songs: [
        {
          title: undefined,
          hasSupportingArtists: false,
          supportingArtists: [],
          isrc: undefined,
          artist: undefined,
        },
      ],
    },
  });
  const { reset } = hookForm;
  const { fields, append, remove } = useFieldArray<SongFields>({
    control: hookForm.control,
    name: 'songs',
  });

  const watchVariousArtists = hookForm.watch('album.variousArtists');

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
      // console.log('*debug* fields', fields);

      const makeFormFromDropzone = () =>
        acceptedFiles.map(
          (file): SongFields => {
            // const song = fields[index];
            // console.log('*debug* makeFormFromDropzone song', song);
            if (file.name.lastIndexOf('.') !== -1) {
              const titleWithoutExtension = file.name.substring(
                0,
                file.name.lastIndexOf('.')
              );
              return {
                title: titleWithoutExtension.trim(),
              };
            } else {
              return { title: file.name.trim() };
            }
          }
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

  // TODO: fix issue with changing index number, restarting/bugging out upload
  // if you remove an element anywhere but the end of the array it assigns a different index to the
  // child components this seems to re mount the component (or restart the process).
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

  return (
    <FormProvider {...hookForm}>
      <Container>
        {/* <Flex flexDirection="column"> */}
        <Spacing.section.Minor />
        <Typography variant="h1">New Release</Typography>

        <Spacing.section.Minor />

        {acceptedFiles.length > 0 && fileRejections.length === 0 ? (
          <>
            {image ? (
              <img src={image} width={500} height={500} />
            ) : (
              <ImageUploader
                withIcon={true}
                buttonText="Select Image"
                onChange={onDrop}
                imgExtension={['.jpg', '.png', 'jpeg']}
                maxFileSize={5242880}
                singleImage={true}
              />
            )}

            <Spacing.section.Minor />

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
              // defaultValue={`${item.title}`}
              variant="outlined"
              margin="normal"
              fullWidth={true}
              name={'album.title'}
              label="Release Title"
              id={'release-title'}
              helperText={hookForm.errors.album?.title?.message}
              error={hookForm.errors.album?.title !== undefined}
            />

            <FormControlLabel
              control={
                <Switch
                  inputRef={hookForm.register()}
                  name={'album.variousArtists'}
                  // label="Various Artists"
                  id={'various-artists'}
                />
              }
              label="Various Artists"
            />

            {watchVariousArtists ? null : (
              <Autocomplete
                id="album-artist"
                options={artistsData?.artists ?? []}
                getOptionLabel={(option) => option.name ?? ''}
                open={artistAutocompleteOpen}
                onOpen={handleOpenArtistAutocomplete}
                onClose={() => setArtistAutoCompleteOpen(false)}
                inputValue={inputValue}
                onInputChange={handleInputChange}
                filterSelectedOptions={true}
                // defaultValue={}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth={true}
                    inputRef={
                      !hookForm.getValues('album.variousArtists')
                        ? hookForm.register({
                            required: 'Required',
                            // validate: {
                            //   notEmpty: (value: Artist) =>
                            //     value !== undefined ||
                            //     'Please select an artist',
                            // },
                          })
                        : undefined
                    }
                    variant="standard"
                    label="Artist"
                    name={'album.artist'}
                    helperText={hookForm.errors.album?.artist?.name?.message}
                    error={hookForm.errors.album?.artist !== undefined}
                  />
                )}
              />
            )}

            <Controller
              as={DatePicker}
              control={hookForm.control}
              onChange={(selected: Date | Date[]) => selected}
              name="album.releaseDate"
              className="input"
            />

            {songsForUpload.length > 0 ? (
              <form onSubmit={hookForm.handleSubmit(onSubmit)}>
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
                          artists={artistsData?.artists ?? []}
                        />
                      </li>
                    );
                  })}
                </List>

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
                  className={classes.submit}
                  onClick={hookForm.handleSubmit(onSubmit)}
                >
                  {called || loading ? (
                    <CircularProgress />
                  ) : (
                    <Typography variant="body2">Submit</Typography>
                  )}
                </Button>
              </form>
            ) : null}
            {/* </Flex> */}
          </>
        ) : (
          <DropzoneContainer
            // borderColor={getColor()}
            borderColor={'#eeee'}
            {...getRootProps({})}
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here</p>
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
