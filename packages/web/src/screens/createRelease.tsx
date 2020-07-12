import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  // Button,
  Container,
  //   FormControl,
  //   FormControlLabel,
  // Grid,
  IconButton,
  // Link,
  List,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
// import MoreIcon from '@material-ui/icons/More';
import { Flex, Spacing } from 'components';
import * as consts from 'consts';
// import * as helpers from 'helpers';
import { useOnDropImage, useUploadImage } from 'helpers/hooks';
import { useSnackbar } from 'notistack';
// import { UserContext } from 'context';
import React, { useContext } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import ImageUploader from 'react-images-upload';
import {
  useHistory,
  // useLocation,
  useParams,
} from 'react-router-dom';
import { CreateAlbumArgs, CreateAlbumSongArgs } from 'types';

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
  //   const userContext = useContext(UserContext);
  const history = useHistory();
  //   const location = useLocation();
  const { id } = useParams();
  console.log('id', id);
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();
  const { onDrop, image, imageFile } = useOnDropImage();
  const { uploadImage } = useUploadImage(imageFile);

  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      songs: [{ title: '' }],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: 'songs',
    }
  );

  const [createAlbum, { loading, called, error }] = useMutation(
    consts.mutations.CREATE_ALBUM,
    {
      onCompleted(data) {
        console.log('onCompleted data', data);
        if (data.createAlbum.id) {
          enqueueSnackbar('Success! Artist Created', {
            variant: 'success',
            autoHideDuration: 4000,
          });
          history.push(`/artist/${data.createArtist.id}`);
        } else {
          enqueueSnackbar('Error! Artist Not Created', {
            variant: 'error',
            autoHideDuration: 4000,
          });
        }
      },
    }
  );

  const onSubmit = async (data: {
    album: CreateAlbumArgs;
    songs: CreateAlbumSongArgs[];
  }) => {
    const result = await uploadImage({
      parentId: id,
      parentDir: 'album',
      fileName: 'profileImage',
    });

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

  return (
    <Container>
      {/* <Flex flexDirection="column"> */}
      <Spacing.section.Minor />
      <Typography variant="h1">New Release</Typography>

      <Spacing.section.Minor />

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
                {/* <TextField
                    inputRef={register()}
                    defaultValue={`${item.title}`}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name={`[${index}].title`}
                    label="Title"
                    id={`[${index}].title`}
                    autoComplete="title"
                  /> */}

                <Controller
                  as={<TextField />}
                  // inputRef={register()}
                  variant="outlined"
                  margin="normal"
                  required={true}
                  fullWidth={true}
                  name={`songs[${index}].title`}
                  label="Title"
                  id={`songs[${index}].title`}
                  autoComplete="title"
                  control={control}
                  defaultValue={item.title} // make sure to set up defaultValue
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
          Submit
        </Button>
      </form>
      {/* </Flex> */}
    </Container>
  );
};
