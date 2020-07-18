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
import { makeStyles, WithTheme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { Flex, Spacing } from 'components';
import * as consts from 'consts';
import { useOnDropImage, useUploadImage } from 'helpers/hooks';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
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

  const classes = useStyles();
  const { onDrop, image, imageFile } = useOnDropImage();
  const {
    getRootProps,
    getInputProps,
    open,
    acceptedFiles,
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

  const { register, control, handleSubmit } = useForm({
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

  console.log('*debug* acceptedFiles', acceptedFiles);

  return (
    <Container>
      {/* <Flex flexDirection="column"> */}
      <Spacing.section.Minor />
      <Typography variant="h1">New Release</Typography>

      <Spacing.section.Minor />

      {acceptedFiles.length === 0 ? (
        <DropzoneContainer borderColor={getColor()} {...getRootProps({})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here</p>
          <button type="button" onClick={open}>
            Open File Dialog
          </button>
        </DropzoneContainer>
      ) : (
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
                    <IconButton
                      type="submit"
                      color="primary"
                      className={classes.submit}
                      onClick={() => remove(index)}
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
              onClick={() => {
                append({ title: '' });
              }}
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
      )}
    </Container>
  );
};
