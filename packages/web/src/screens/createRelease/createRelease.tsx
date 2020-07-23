import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  List,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  FileUploadButton,
  // Flex,
  SongUploadField,
  Spacing,
} from 'components';
import * as consts from 'consts';
import * as helpers from 'helpers';
import { UploadStatus } from 'helpers/hooks';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { useFieldArray, useForm } from 'react-hook-form';
import ImageUploader from 'react-images-upload';
import { useHistory, useParams } from 'react-router-dom';
import {
  CreateAlbumArgs,
  // CreateAlbumSongArgs,
  NewSongArgs,
} from 'types';
import { uuid } from 'uuidv4';

import { DropzoneContainer } from './styles';

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

export interface SongForUpload {
  title: string;
  ref?: string;
  url?: string;
  file: File;
}

export const CreateRelease = () => {
  const history = useHistory();
  const { id } = useParams();

  const { enqueueSnackbar } = useSnackbar();
  const [songsForUpload, setSongsForUpload] = useState<SongForUpload[]>([]);
  const [uploadStatuses, setUploadStatuses] = useState<UploadStatus[]>([]);
  const [releaseId, setReleaseId] = useState<string>('');
  // const [acceptedFiles, setacceptedFiles] = useState<File[]>([]);
  // const [fileRejections, setfileRejections] = useState<File[]>([]);

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

  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      songs: [{ title: '' }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'songs',
  });

  const [createAlbum, { loading, called, error }] = useMutation(
    consts.mutations.CREATE_ALBUM,
    {
      onCompleted(data) {
        console.log('onCompleted data', data);
        if (data.createAlbum.id) {
          enqueueSnackbar('Success! Release Created', {
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
    }
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

  const getColor = () => {
    if (isDragAccept) {
      return '#00e676';
    }
    if (isDragReject) {
      return '#ff1744';
    }
    if (isDragActive) {
      return '#2196f3';
    }
    return '#eeeeee';
  };

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const makeFormFromDropzone = () =>
        acceptedFiles.map((file) => {
          if (file.name.lastIndexOf('.') !== -1) {
            const titleWithoutExtension = file.name.substring(
              0,
              file.name.lastIndexOf('.')
            );
            return { title: titleWithoutExtension.trim() };
          } else {
            return { title: file.name.trim() };
          }
        });

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

    const resolvedSongsForUpload = songsForUpload.map((song, index) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { file, ...rest } = song;

      return {
        ...rest,
        title: data.songs[index].title.trim(),
        ref: uploadStatuses[index].data?.gsUrl,
        url: uploadStatuses[index].data?.downloadUrl,
      };
    });

    console.log(
      '*debug* onSubmit resolvedSongsForUpload',
      resolvedSongsForUpload
    );

    const result = await uploadImage({
      rootDir: id,
      parentDir: 'albums',
      childDir: releaseId,
      fileName: 'albumImage',
    });

    console.log('result', result);

    if (result) {
      await createAlbum({
        variables: {
          input: {
            ...data.album,
            description: '', //TODO: description field, undefined uses default ''
            id: result.id,
            artistId: id,
            imageRef: result.gsUrl,
            imageUrl: result.downloadUrl,
            songsToAdd: resolvedSongsForUpload,
          },
        },
      });
    }
  };

  console.log('*debug* acceptedFiles', acceptedFiles);
  console.log('*debug* fileRejections', fileRejections);
  console.log('*debug* uploadStatuses', uploadStatuses);
  console.log('*debug* songsForUpload', songsForUpload);

  return (
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
            inputRef={register()}
            // defaultValue={`${item.title}`}
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth={true}
            name={'album.title'}
            label="Release Title"
            id={'album.title'}
            autoComplete="album title"
          />

          {songsForUpload.length > 0 ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <List>
                {fields.map((item, index) => {
                  return (
                    <SongUploadField
                      creatorId={id}
                      releaseId={releaseId}
                      songData={songsForUpload[index]}
                      formData={item}
                      index={index}
                      setUploadStatusCallback={setUploadStatus}
                      control={control}
                      removeSong={() => removeSong(index)}
                    />
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
        <DropzoneContainer borderColor={getColor()} {...getRootProps({})}>
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
  );
};
