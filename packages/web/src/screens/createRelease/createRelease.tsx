import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  IconButton,
  List,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { FileUploadButton, Flex, Spacing } from 'components';
import * as consts from 'consts';
import * as firebase from 'firebase';
import * as helpers from 'helpers';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import ImageUploader from 'react-images-upload';
import { useHistory, useParams } from 'react-router-dom';
import { CreateAlbumArgs, CreateAlbumSongArgs, NewSongArgs } from 'types';

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

interface SongsForUpload {
  title: string;
  file?: File;
  uploadDone: boolean;
  uploadError?: boolean;
  uploadProgress: number;
}

export const CreateRelease = () => {
  const history = useHistory();
  const { id } = useParams();
  console.log('id', id);
  const { enqueueSnackbar } = useSnackbar();
  const [songsForUpload, setSongsForUpload] = useState<SongsForUpload[]>([]);
  const [uploadTasks, setUploadTasks] = useState<firebase.storage.UploadTask[]>(
    []
  );
  // const [acceptedFiles, setacceptedFiles] = useState<File[]>([]);
  // const [fileRejections, setfileRejections] = useState<File[]>([]);

  const classes = useStyles();
  const uploadFile = helpers.hooks.useFirebaseStorageUpload();
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

  const { register, control, handleSubmit, reset, setValue } = useForm({
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
            uploadDone: false,
            uploadError: false,
            uploadProgress: 0,
          };
        });

      setSongsForUpload(makeSongsForUpload());
      reset({ songs: makeFormFromDropzone() });
    }
  }, [acceptedFiles, reset]);

  const removeSong = (index: number) => {
    remove(index);

    const resolvedSongsForUpload = [...songsForUpload];
    resolvedSongsForUpload.splice(index, 1);
    setSongsForUpload(resolvedSongsForUpload);

    if (resolvedSongsForUpload.length === 0) {
      acceptedFiles.splice(0, acceptedFiles.length);
    }
    // acceptedFiles.splice(index, 1);
  };

  const addSong = (fileAccepted: File[], fileRejected: FileRejection[]) => {
    console.log('*debug* addFileToAddedSong fileAccepted', fileAccepted);
    console.log('*debug* addFileToAddedSong fileRejected', fileRejected);
    if (fileAccepted.length > 0) {
      const newFile = fileAccepted[0];
      const resolvedSongsForUpload = [...songsForUpload];

      if (newFile.name.lastIndexOf('.') !== -1) {
        const titleWithoutExtension = newFile.name.substring(
          0,
          newFile.name.lastIndexOf('.')
        );
        append({ title: titleWithoutExtension.trim() });
      } else {
        append({ title: newFile.name.trim() });
      }

      resolvedSongsForUpload.push({
        title: newFile.name.trim(),
        file: newFile,
        uploadDone: false,
        uploadProgress: 0,
        uploadError: false,
      });

      setSongsForUpload(resolvedSongsForUpload);
    }

    if (fileRejected.length > 0) {
      enqueueSnackbar('Error! Wrong file type please try again', {
        variant: 'error',
        autoHideDuration: 4000,
      });
    }
  };

  const onSubmit = async (data: {
    album: CreateAlbumArgs;
    songs: NewSongArgs[];
  }) => {
    console.log('*debug* onSubmit album', data.album);
    console.log('*debug* onSubmit songs', data.songs);

    const resolvedSongsForUpload = songsForUpload.map((song, index) => {
      return {
        ...song,
        title: data.songs[index].title.trim(),
      };
    });

    console.log(
      '*debug* onSubmit resolvedSongsForUpload',
      resolvedSongsForUpload
    );

    songsForUpload.forEach((song) => {
      if (song.file) {
        const newUploadTask = uploadFile({
          rootDir: id,
          parentDir: 'albums',
          file: song.file,
        });
        setUploadTasks([...uploadTasks, newUploadTask]);
      }
    });

    // const result = await uploadImage({
    //   parentId: id,
    //   parentDir: 'album',
    //   fileName: 'profileImage',
    // });

    // console.log('result', result);

    // if (result) {
    //   await createAlbum({
    //     variables: {
    //       input: {
    //         ...data.album,
    //         description: '',
    //         id: result.id,
    //         artistId: id,
    //         imageRef: result.gsUrl,
    //         imageUrl: result.downloadUrl,
    //         songsToAdd: data.songs,
    //       },
    //     },
    //   });
    // }
  };

  console.log('*debug* acceptedFiles', acceptedFiles);
  console.log('*debug* fileRejections', fileRejections);

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

          <form onSubmit={handleSubmit(onSubmit)}>
            <List>
              {fields.map((item, index) => {
                return (
                  <Flex key={item.id}>
                    <Flex flexDirection="column">
                      <Controller
                        as={<TextField />}
                        variant="outlined"
                        margin="normal"
                        required={true}
                        fullWidth={true}
                        name={`songs[${index}].title`}
                        label="Title"
                        id={`songs[${index}].title`}
                        autoComplete="title"
                        control={control}
                        defaultValue={item.title} // make sure to set up
                      />
                    </Flex>
                    <IconButton
                      type="submit"
                      color="primary"
                      className={classes.submit}
                      onClick={() => removeSong(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Flex>
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
