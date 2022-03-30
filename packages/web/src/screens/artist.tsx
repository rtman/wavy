import { useLazyQuery } from '@apollo/client';
import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  createStyles,
  Divider,
  Grid,
  List,
  ListItemAvatar,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { AccountBox } from '@material-ui/icons';
import { AlbumListItem, Flex, SongListItem, Spacing } from 'components';
import * as consts from 'consts';
import { PlayerContext, UserContext } from 'context';
import React, { Fragment, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Album,
  IdParam,
  Query,
  QueryArtistByIdArgs,
  Song,
  UpdateFollowingType,
} from 'types';

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
    album: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    list: {
      width: '100%',
    },
  })
);

export const Artist = () => {
  const classes = useStyles();
  const theme = useTheme();
  const smSizeAndUp = useMediaQuery(theme.breakpoints.up('sm'));
  const { id } = useParams<IdParam>();

  const [
    getArtistById,
    { loading: artistLoading, data: artistData },
  ] = useLazyQuery<Pick<Query, 'artistById'>, QueryArtistByIdArgs>(
    consts.queries.artist.ARTIST_BY_ID,
    {
      fetchPolicy: 'network-only',
    }
  );

  const userContext = useContext(UserContext);
  const playerContext = useContext(PlayerContext);
  const artistFollows = userContext?.user?.artistFollows ?? [];
  const artistSongs = (artistData?.artistById.albums ?? [])
    .map((album) => (album.songs ?? []).reduce((song) => song))
    .filter((song) => song.active);
  const artistAlbums = (artistData?.artistById.albums ?? []).filter(
    (album) => album.active
  );
  const artistName = artistData?.artistById.name ?? '';
  const artistDescription = artistData?.artistById.description;
  const artistImageUrl = artistData?.artistById.profileImageUrlSmall;

  useEffect(() => {
    if (id) {
      getArtistById({
        variables: { artistId: id },
      });
    } else {
      console.log('artist.getArtistById - no Id');
    }
  }, [getArtistById, id]);

  const onClickToggleFollow = () => {
    if (id) {
      userContext?.updateFollowing({ id, type: UpdateFollowingType.Artist });
    }
  };

  const getFollowTitle = () => {
    if (id) {
      return artistFollows?.find((f) => f.artist.id === id)
        ? 'Unfollow'
        : 'Follow';
    } else {
      return 'Loading';
    }
  };

  const renderTopSongs = () => {
    console.log('*debug artistSongs', artistSongs);
    const artistSongsDesc = artistSongs
      .sort((a, b) => b.playCount - a.playCount)
      .slice(0, 5);

    if (
      artistSongsDesc.length > 0 &&
      artistSongsDesc.filter((song) => song.playCount > 0).length > 0
    ) {
      const songsList = artistSongsDesc.map((song: Song, index: number) => (
        <Fragment key={song.id}>
          <SongListItem
            leftAccessory={
              <Flex alignItems="center" alignSelf="center">
                <Typography variant="body1">{index + 1}</Typography>
                <Spacing.BetweenParagraphs />
              </Flex>
            }
            title={song.title}
            caption={song.label?.name}
            data={song}
          />
          {index < artistSongsDesc.length - 1 ? <Divider /> : null}
        </Fragment>
      ));

      return (
        <>
          <Grid item={true} xs={12}>
            <Typography variant="h5">Top Songs</Typography>
          </Grid>
          <Grid item={true} xs={12}>
            <List className={classes.list}>{songsList}</List>
          </Grid>
        </>
      );
    } else {
      return null;
    }
  };

  const renderAlbums = () => {
    if (artistAlbums.length > 0) {
      const albumsList = artistAlbums.map(
        (album: Album, albumIndex: number) => {
          const songsList = (album.songs ?? []).map(
            (song: Song, songIndex: number) => (
              <Fragment key={song.id}>
                <SongListItem
                  leftAccessory={
                    <Flex alignItems="center" alignSelf="center">
                      <Typography variant="body1">{songIndex + 1}</Typography>
                      <Spacing.BetweenParagraphs />
                    </Flex>
                  }
                  title={song.title}
                  // caption={song.label?.name}
                  data={song}
                />
                {songIndex < (album.songs ?? []).length - 1 ? (
                  <Divider />
                ) : null}
              </Fragment>
            )
          );

          return (
            <Fragment key={album.id}>
              <AlbumListItem
                style={{
                  marginBottom: theme.spacing(2),
                  marginTop: theme.spacing(2),
                }}
                data={album}
                title={album.title}
                caption={album.label?.name}
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
        }
      );

      return (
        <>
          <Grid item={true} xs={12}>
            <Typography variant="h5">Albums</Typography>
          </Grid>
          <Grid item={true} xs={12}>
            <List className={classes.list}>{albumsList}</List>
          </Grid>
        </>
      );
    } else {
      return null;
    }
  };

  const onClickPlayNow = () => {
    playerContext?.replaceQueueWithSongs(artistSongs);
  };

  const renderNameButtonsAndDescription = () => (
    <Flex flexDirection="column" fullWidth={true}>
      <Typography variant="h4">{artistName}</Typography>
      <Spacing.section.Minor />
      <Grid item={true} xs={12}>
        <Button
          disabled={artistSongs.length === 0}
          variant="contained"
          color="primary"
          onClick={onClickPlayNow}
        >
          Play Now
        </Button>

        <Spacing.BetweenComponents />

        <Button
          variant="outlined"
          color="primary"
          onClick={onClickToggleFollow}
        >
          {getFollowTitle()}
        </Button>
      </Grid>
      <Spacing.section.Minor />

      {artistDescription ? (
        <>
          <Grid item={true} xs={12}>
            <Typography variant="h5">Description</Typography>
          </Grid>
          <Spacing.section.Minor />
          <Grid item={true} xs={12}>
            <Typography variant="body1">{artistDescription}</Typography>
          </Grid>
        </>
      ) : null}
    </Flex>
  );

  const renderProfileImage = () =>
    artistImageUrl ? (
      <img
        alt="Artist Profile"
        style={{
          alignSelf: 'center',
          minHeight: 50,
          minWidth: 50,
          maxHeight: 250,
          maxWidth: 250,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
        src={artistImageUrl}
      />
    ) : (
      <AccountBox
        style={{
          alignSelf: 'center',
          minHeight: 50,
          minWidth: 50,
          maxHeight: 250,
          maxWidth: 250,
          width: '100%',
          height: '100%',
        }}
      />
    );

  return (
    <Container maxWidth={false}>
      {artistLoading ? (
        <CircularProgress />
      ) : (
        <Grid container={true} spacing={2}>
          <Grid item={true} xs={12}>
            {smSizeAndUp ? (
              <Flex>
                {renderProfileImage()}
                <Spacing.BetweenParagraphs />
                {renderNameButtonsAndDescription()}
              </Flex>
            ) : (
              <Flex flexDirection="column">
                {renderProfileImage()}
                <Spacing.section.Minor />
                {renderNameButtonsAndDescription()}
              </Flex>
            )}
          </Grid>
          {renderTopSongs()}
          {renderAlbums()}
        </Grid>
      )}
    </Container>
  );
};
