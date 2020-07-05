import { useLazyQuery } from '@apollo/react-hooks';
import {
  // Button,
  CircularProgress,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  //   List,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AlbumIcon from '@material-ui/icons/Album';
import { Flex, Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Artist as ArtistType, QueryArtistByIdArgs } from 'types';

interface ArtistByIdData {
  artistById: ArtistType;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export const ArtistDashboard = () => {
  const userContext = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const classes = useStyles();

  const [artist, setArtist] = useState<ArtistType | undefined>(undefined);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const artists =
    userContext?.user?.artists?.map((element) => element.artist) ?? [];
  const labels =
    userContext?.user?.labels?.map((element) => element.label) ?? [];
  const creatorAccounts = [...artists, ...labels];

  const generateSelectOptions = () => {
    const options = creatorAccounts.map((element) => {
      const optionTitle = element.name;
      const optionId = element.id;

      return <MenuItem value={optionId}>{optionTitle}</MenuItem>;
    });

    return options;
  };

  const [getArtistById, { loading: queryLoading }] = useLazyQuery<
    ArtistByIdData,
    QueryArtistByIdArgs
  >(consts.queries.ARTIST_BY_ID, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setArtist(data.artistById);
      setSelectedOption(data.artistById.id);
      console.log('artist', artist);
    },
  });

  useEffect(() => {
    if (id) {
      getArtistById({
        variables: { id },
      });
    } else {
      console.log('artist.getArtistById - no Id');
    }
  }, [getArtistById, id]);

  // const artistSongs = artist?.songs ?? [];
  // const artistAlbums = artist?.albums ?? [];
  // const artistName = artist?.name ?? '';
  // const artistDescription = artist?.description ?? '';
  // const artistImageUrl = artist?.imageUrl ?? '';

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedId = event.target.value as string;

    setSelectedOption(selectedId);
    const selected = creatorAccounts.find(
      (element) => element.id === selectedId
    );

    switch (selected?.__typename) {
      case 'Artist':
        if (location.pathname !== `/artistDashboard/${selectedId}`) {
          history.push(`/artistDashboard/${selectedId}`);
        }
        break;
      case 'Label':
        if (location.pathname !== `/artistDashboard/${selectedId}`) {
          history.push(`/labelDashboard/${selectedId}`);
        }
        break;
    }
  };

  return (
    <Container>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <Flex flexDirection="column">
          <Spacing.section.Minor />
          {/* <Typography variant="h1">{artistName}</Typography> */}

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="creatorAccountsSelect">Account</InputLabel>
            <Select
              value={selectedOption}
              onChange={handleChange}
              inputProps={{
                name: 'creatorAccounts',
                id: 'creatorAccountsSelect',
              }}
            >
              {generateSelectOptions()}
            </Select>
          </FormControl>

          <Spacing.section.Minor />

          <IconButton
            color="primary"
            onClick={() => history.push('/createAlbum')}
          >
            <AlbumIcon />
            Create Album
          </IconButton>

          <IconButton
            color="primary"
            onClick={() => history.push('/editDiscography')}
          >
            <AlbumIcon />
            Edit Discography
          </IconButton>

          <IconButton
            color="primary"
            onClick={() => history.push(`/artist/${id}`)}
          >
            <AlbumIcon />
            View Artist
          </IconButton>

          <Spacing.section.Major />

          <Typography variant="h1">Stats</Typography>

          <Spacing.section.Minor />
        </Flex>
      )}
    </Container>
  );
};
