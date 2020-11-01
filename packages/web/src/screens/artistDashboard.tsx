import { useLazyQuery } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Artist as ArtistType,
  IdParam,
  QueryArtistByIdArgs,
} from 'commonTypes';
import { Flex, Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

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
  const { id } = useParams<IdParam>();
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
  >(consts.queries.artist.ARTIST_BY_ID, {
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
        variables: { artistId: id },
      });
    } else {
      console.log('artist.getArtistById - no Id');
    }
  }, [getArtistById, id]);

  const artistAlbums = artist?.albums ?? [];

  const getPlayCount = useMemo(() => {
    let totalPlayCount = 0;
    artistAlbums.forEach((album) =>
      (album.songs ?? []).forEach((song) => {
        totalPlayCount += song.playCount;
      })
    );
    return totalPlayCount;
  }, [artistAlbums]);

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

          <Grid container={true}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push(`/artistCreateRelease/${id}`)}
            >
              Create Release
            </Button>

            {/* <Button
            color="primary"
            onClick={() => history.push(`/manageDiscography/${id}`)}
          >

            Manage Discography
          </Button> */}
            <Spacing.BetweenComponents />

            <Button
              variant="outlined"
              color="primary"
              onClick={() => history.push(`/artist/${id}`)}
            >
              View Artist
            </Button>
          </Grid>

          <Spacing.section.Major />

          <Typography variant="h5">Stats</Typography>

          <Spacing.section.Minor />

          <Typography variant="h5">Plays</Typography>

          <Spacing.section.Minor />

          <Typography variant="body1">{getPlayCount}</Typography>
        </Flex>
      )}
    </Container>
  );
};
