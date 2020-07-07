import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  // Button,
  Container,
  //   FormControl,
  //   FormControlLabel,
  Grid,
  IconButton,
  Link,
  List,
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
  memo,
  useState,
} from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
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

// const SongInputRow = ({ index }: { index: number }) => {
//   const { getValues, setValue } = useFormContext();
//   const values = getValues();
//   const titleKey = `[${index}].title`;
//   const title = values[titleKey];

//   return (
//     <TextField
//       defaultValue={title}
//       variant="outlined"
//       margin="normal"
//       required
//       fullWidth
//       id={titleKey}
//       label="Title"
//       name={titleKey}
//       autoComplete="title"
//       onChange={(e) => {
//         setValue(titleKey, e.target.value);
//       }}
//     />
//   );
// };

export const CreateRelease = () => {
  //   const userContext = useContext(UserContext);
  //   const history = useHistory();
  //   const location = useLocation();
  //   const { id } = useParams();
  const classes = useStyles();

  const [numberOfSongs, setNumberOfSongs] = useState<number>(1);
  const [inputList, setInputList] = useState<SongInput[]>([{ title: '' }]);

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

  // const renderSongInputForm = () => {
  //   const songInputsList: JSX.Element[] = [];

  //   const makeSongInputs = () => {
  //     for (let i = 0; i < numberOfSongs; i++) {
  //       songInputsList.push(
  //         <React.Fragment key={`${numberOfSongs}-song-input`}>
  //           {SongInputRow({ index: i })}
  //         </React.Fragment>
  //       );
  //     }
  //     return <List>{songInputsList}</List>;
  //   };

  //   const onSubmit = (data: Record<string, any>) => {
  //     console.log('Data', data);
  //   };

  //   return (
  //     <form
  //       className={classes.form}
  //       noValidate
  //       onSubmit={handleSubmit((data) => onSubmit(data))}
  //     >
  //       {makeSongInputs()}
  //       <Button
  //         type="submit"
  //         fullWidth
  //         variant="contained"
  //         color="primary"
  //         className={classes.submit}
  //       >
  //         Submit
  //       </Button>
  //     </form>
  //   );
  // };

  const onSubmit = (data: any) => console.log('data', data);

  return (
    <Container>
      <Flex flexDirection="column">
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
              append({ title: 'appendBill' });
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
      </Flex>
    </Container>
  );
};
