import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  // Button,
  Container,
  //   FormControl,
  //   FormControlLabel,
  // Grid,
  // IconButton,
  // Link,
  List,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import MoreIcon from '@material-ui/icons/More';
import { Flex, Spacing } from 'components';
// import * as consts from 'consts';
// import { UserContext } from 'context';
import React, { useContext } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
// import { useHistory, useLocation, useParams } from 'react-router-dom';
// import { Album } from 'types';

interface SongInput {
  title: string;
  // genres: string[];
  // releaseDate: Date;
  // supportingArtists: string[];
}

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

  const onSubmit = (data: { songs: SongInput[] }) => console.log('data', data);

  return (
    <Container>
      {/* <Flex flexDirection="column"> */}
      <Spacing.section.Minor />
      <Typography variant="h1">New Release</Typography>

      <Spacing.section.Minor />

      <form onSubmit={handleSubmit(onSubmit)}>
        <List>
          {fields.map((item, index) => {
            return (
              <React.Fragment key={item.id}>
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={() => remove(index)}
                >
                  Delete
                </Button>
              </React.Fragment>
            );
          })}
        </List>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => {
            append({ title: '' });
          }}
        >
          Add Song
        </Button>

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
      {/* </Flex> */}
    </Container>
  );
};
