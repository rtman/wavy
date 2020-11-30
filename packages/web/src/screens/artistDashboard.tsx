import { useLazyQuery } from '@apollo/react-hooks';
import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItemAvatar,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';
import { IdParam, Query, QueryArtistByIdArgs } from 'commonTypes';
import { AlbumListItem, Flex, SongListItem, Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, {
  Fragment,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItemAvatar: {
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(2),
    },
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
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
  const theme = useTheme();

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

  const [
    getArtistById,
    { loading: queryLoading, data: artistData },
  ] = useLazyQuery<Pick<Query, 'artistById'>, QueryArtistByIdArgs>(
    consts.queries.artist.ARTIST_BY_ID,
    {
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setSelectedOption(data.artistById.id);
      },
    }
  );

  useEffect(() => {
    if (id) {
      getArtistById({
        variables: { artistId: id },
      });
    } else {
      console.log('artist.getArtistById - no Id');
    }
  }, [getArtistById, id]);

  const artistAlbums = artistData?.artistById.albums ?? [];

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

  const renderAlbums = () => {
    if (artistAlbums.length > 0) {
      const albumsList = artistAlbums.map((album, albumIndex) => {
        const songsList = (album.songs ?? []).map((song, songIndex) => (
          <Fragment key={song.id}>
            <SongListItem
              leftAccessory={
                <Flex alignItems="center" alignSelf="center">
                  <Typography variant="body1">{songIndex + 1}</Typography>
                  <Spacing.BetweenParagraphs />
                </Flex>
              }
              title={song.title}
              data={song}
            />
            {songIndex < (album.songs ?? []).length - 1 ? <Divider /> : null}
          </Fragment>
        ));

        return (
          <Fragment key={album.id}>
            <AlbumListItem
              style={{
                marginBottom: theme.spacing(2),
                marginTop: theme.spacing(2),
              }}
              data={album}
              title={album.title}
              leftAccessory={
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    src={album.profileImageUrlSmall ?? undefined}
                  />
                </ListItemAvatar>
              }
            />
            {songsList}
            {albumIndex < artistAlbums.length - 1 ? <Divider /> : null}
          </Fragment>
        );
      });
      return (
        <>
          <Grid item={true} xs={12}>
            <Typography variant="h5">Albums</Typography>
          </Grid>
          <Grid item={true} xs={12}>
            <List>{albumsList}</List>
          </Grid>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <Container maxWidth={false}>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <Grid container={true} spacing={2}>
          <Grid item={true} xs={12}>
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

            <Grid item={true} container={true}>
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
            <Spacing.section.Minor />
            <Grid item={true} xs={12}>
              <Typography variant="h5">Stats</Typography>
            </Grid>
            <Spacing.section.Minor />
            <Grid item={true} xs={12}>
              <Typography variant="h5">Plays</Typography>
            </Grid>
            <Spacing.section.Minor />
            <Grid item={true} xs={12}>
              <Typography variant="body1">{getPlayCount}</Typography>
            </Grid>
            <Spacing.section.Major />
            {renderAlbums()}
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
