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
import UploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import { Flex, Spacing, FileUploadButton } from 'components';
import * as consts from 'consts';
import { useOnDropImage, useUploadImage } from 'helpers/hooks';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import Dropzone, { useDropzone, FileRejection } from 'react-dropzone';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import ImageUploader from 'react-images-upload';
import { useHistory, useParams } from 'react-router-dom';
import { CreateAlbumArgs, CreateAlbumSongArgs } from 'types';

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

export const CreateRelease = () => {
  const history = useHistory();
  const { id } = useParams();
  console.log('id', id);
  const { enqueueSnackbar } = useSnackbar();
  // const [acceptedFiles, setacceptedFiles] = useState<File[]>([]);
  // const [fileRejections, setfileRejections] = useState<File[]>([]);

  const classes = useStyles();
  const { onDrop, image, imageFile } = useOnDropImage();
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

  const { uploadImage } = useUploadImage(imageFile);

  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      songs: [{ title: '' }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'songs',
  });

  useEffect(() => {
    const populateForm = () => {
      if (acceptedFiles.length > 0) {
        return acceptedFiles.map((file) => {
          return { title: file.name };
        });
      }

      return undefined;
    };

    reset({ songs: populateForm() });
  }, [acceptedFiles, reset]);

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

  const onSubmit = async (data: {
    album: CreateAlbumArgs;
    songs: CreateAlbumSongArgs[];
  }) => {
    const result = await uploadImage({
      parentId: id,
      parentDir: 'album',
      fileName: 'profileImage',
    });

    console.log('result', result);

    if (result) {
      await createAlbum({
        variables: {
          input: {
            ...data.album,
            description: '',
            id: result.id,
            artistId: id,
            imageRef: result.gsUrl,
            imageUrl: result.downloadUrl,
            songsToAdd: data.songs,
          },
        },
      });
    }
  };

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

  const removeSong = (index: number) => {
    remove(index);

    acceptedFiles.splice(index, 1);
  };

  const addSong = () => {
    append({ title: '' });
  };

  const addFileToAddedSong = (
    fileAccepted: File[],
    fileRejected: FileRejection[],
    index: number
  ) => {
    console.log('*debug* addFileToAddedSong fileAccepted', fileAccepted);
    console.log('*debug* addFileToAddedSong fileRejected', fileRejected);
    console.log('*debug* addFileToAddedSong', index);
    // TODO: need a file open dialog here to select the file of the right type audio/* and then add it to acceptedFiles
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
                      {acceptedFiles[index] === undefined ? (
                        <FileUploadButton
                          acceptedTypes="audio/*"
                          onDrop={(fileAccepted, fileRejected) =>
                            addFileToAddedSong(
                              fileAccepted,
                              fileRejected,
                              index
                            )
                          }
                        />
                      ) : null}
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

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={addSong}
            >
              Add Song
            </Button>

            <Spacing.BetweenComponents />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {called || loading ? <CircularProgress /> : 'Submit'}
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
