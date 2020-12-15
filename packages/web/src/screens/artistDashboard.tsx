import { useApolloClient, useLazyQuery } from '@apollo/client';
import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItemAvatar,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { Block, Check } from '@material-ui/icons';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';
import { IdParam, Query, QueryArtistByIdArgs } from 'types';
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
import * as tasks from 'tasks';
import { useSnackbar } from 'notistack';

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
  const apolloClient = useApolloClient();
  const { enqueueSnackbar } = useSnackbar();

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
        console.log('*debug*  getArtistById data', data);
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

  const onClickActivateSong = async (props: {
    songId: string;
    songTitle: string;
  }) => {
    const { songId, songTitle } = props;
    const result = await tasks.setSongActive({ songId }, apolloClient);

    console.log('*debug* setSongActive result', result);

    if (result.ok && result.data) {
      await getArtistById({ variables: { artistId: id } });
      enqueueSnackbar(`${songTitle} - Sucessfully activated`, {
        variant: 'success',
        autoHideDuration: 4000,
      });
    } else {
      enqueueSnackbar(`Error - Activating ${songTitle}`, {
        variant: 'error',
        autoHideDuration: 4000,
      });
    }
  };

  const renderAlbums = () => {
    if (artistAlbums.length > 0) {
      const albumsList = artistAlbums.map((album, albumIndex) => {
        const songsList = (album.songs ?? []).map((song, songIndex) => (
          <Fragment key={song.id}>
            <SongListItem
              disabled={!song.active}
              leftAccessory={
                <Flex alignItems="center" alignSelf="center">
                  <Typography variant="body1">{songIndex + 1}</Typography>
                  <Spacing.BetweenParagraphs />
                </Flex>
              }
              rightAccessory={
                <>
                  {song.playCount ? (
                    <Flex
                      style={{
                        marginTop: '6px',
                        marginBottom: '6px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                      }}
                    >
                      <Typography variant="body2">
                        {song.playCount ?? 0}
                      </Typography>
                      <Spacing.BetweenComponents />
                    </Flex>
                  ) : null}
                  {song.active ? null : (
                    <Flex
                      style={{
                        marginTop: '6px',
                        marginBottom: '6px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                      }}
                    >
                      <IconButton
                        onClick={() =>
                          onClickActivateSong({
                            songId: song.id,
                            songTitle: song.title,
                          })
                        }
                        size="small"
                      >
                        <Check fontSize="small" />
                      </IconButton>
                    </Flex>
                  )}
                </>
              }
              title={song.title}
              data={song}
            />
            {songIndex < (album.songs ?? []).length - 1 ? <Divider /> : null}
          </Fragment>
        ));

        const getAlbumPlayCount = () => {
          let playCount = 0;

          (album.songs ?? []).forEach((song) => {
            playCount += song.playCount;
          });
          return playCount;
        };

        return (
          <Fragment key={album.id}>
            <AlbumListItem
              style={{
                marginBottom: theme.spacing(2),
                marginTop: theme.spacing(2),
              }}
              disabled={!album.active}
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
              rightAccessory={
                <>
                  <Flex
                    style={{
                      marginTop: '6px',
                      marginBottom: '6px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}
                  >
                    <Typography variant="body2">
                      {getAlbumPlayCount() ?? 0}
                    </Typography>
                    <Spacing.BetweenComponents />
                  </Flex>

                  {album.active ? null : (
                    <Flex
                      style={{
                        marginTop: '6px',
                        marginBottom: '6px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                      }}
                    >
                      <Block fontSize="small" />
                    </Flex>
                  )}
                </>
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
          </Grid>
          <Spacing.section.Minor />

          <Grid item={true} container={true}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push(`/artistCreateRelease/${id}`)}
            >
              Create Release
            </Button>

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
          <Grid item={true} container={true} xs={12}>
            <Grid item={true} xs={6}>
              <Typography variant="h5">Discography</Typography>
            </Grid>
            <Grid item={true} xs={6} alignContent="flex-end">
              <Typography align="right" variant="h5">
                {`${getPlayCount} plays`}
              </Typography>
            </Grid>
          </Grid>
          {renderAlbums()}
        </Grid>
      )}
    </Container>
  );
};
