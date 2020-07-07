import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  // Button,
  Container,
  //   List,
  //   FormControl,
  //   FormControlLabel,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/More';
import { Flex, Spacing } from 'components';
import * as consts from 'consts';
// import { UserContext } from 'context';
import React, {
  // useContext,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
// import { useHistory, useLocation, useParams } from 'react-router-dom';
// import { Album } from 'types';

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
  //   const history = useHistory();
  //   const location = useLocation();
  //   const { id } = useParams();
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const [numberOfSongs, setNumberOfSongs] = useState<number>(1);
  //   const [artist, setArtist] = useState<ArtistType | undefined>(undefined);

  //   const [createAlbum] = useMutation(consts.mutations.CREATE_PLAYLIST, {
  //     onCompleted() {
  //       //   if (user?.id) {
  //       //     getPlaylists({ variables: { userId: user.id } });
  //       //   }
  //     },
  //   });

  //   createAlbum({
  //     variables: {
  //       input: {
  //         userId: 'user?.id',
  //         title: 'newPlaylistTitle',
  //         description: 'newPlaylistDescription',
  //       },
  //     },
  //   });

  const onSubmit = (data: Record<string, any>) => {
    console.log('Data', data);
  };

  //   const renderSongInputForm = () => {};

  return (
    <Container>
      <Flex flexDirection="column">
        <Spacing.section.Minor />
        <Typography variant="h1">New Release</Typography>

        <Spacing.section.Minor />

        <IconButton
          color="primary"
          onClick={() => setNumberOfSongs(numberOfSongs + 1)}
        >
          <MoreIcon />
          Add Another
        </IconButton>

        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            inputRef={register}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>

        <Spacing.section.Major />
      </Flex>
    </Container>
  );
};
