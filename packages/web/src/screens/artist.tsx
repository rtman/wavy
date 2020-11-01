import { useLazyQuery } from '@apollo/react-hooks';
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
  useTheme,
} from '@material-ui/core';
import {
  Album,
  Artist as ArtistType,
  IdParam,
  Query,
  QueryArtistByIdArgs,
  Song,
  UpdateFollowingType,
} from 'commonTypes';
import { AlbumListItem, Flex, SongListItem, Spacing } from 'components';
import * as consts from 'consts';
import { PlayerContext, UserContext } from 'context';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  const { id } = useParams<IdParam>();
  const [artist, setArtist] = useState<ArtistType | undefined>(undefined);

  const [getArtistById, { loading: queryLoading }] = useLazyQuery<
    Pick<Query, 'artistById'>,
    QueryArtistByIdArgs
  >(consts.queries.artist.ARTIST_BY_ID, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setArtist(data.artistById);
    },
  });

  const userContext = useContext(UserContext);
  const playerContext = useContext(PlayerContext);
  const artistFollows = userContext?.user?.artistFollows ?? [];
  const artistSongs =
    (artist?.albums ?? []).map((album) =>
      (album.songs ?? []).reduce((song) => song)
    ) ?? [];
  const artistAlbums = artist?.albums ?? [];
  const artistName = artist?.name ?? '';
  const artistDescription = artist?.description ?? '';
  const artistImageUrl = artist?.profileImageUrlLarge ?? '';

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
      return <List className={classes.list}>{songsList}</List>;
    } else {
      return null;
    }
  };

  const renderAlbums = () => {
    if (artistAlbums) {
      const albumsList = artistAlbums.map(
        (album: Album, albumIndex: number) => {
          const songsList = artistSongs.map((song: Song, songIndex: number) => (
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
                caption={album.label?.name}
                leftAccessory={
                  <ListItemAvatar className={classes.listItemAvatar}>
                    <Avatar
                      className={classes.avatar}
                      variant="square"
                      src={album.profileImageUrlSmall}
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
      return <List className={classes.list}>{albumsList}</List>;
    } else {
      return null;
    }
  };

  const onClickPlayNow = () => {
    playerContext?.replaceQueueWithSongs(artistSongs);
  };

  return (
    <Container>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <Flex flexDirection="column">
          <Grid container={true} style={{ flexShrink: 1 }}>
            <img
              style={{
                minHeight: 50,
                minWidth: 50,
                maxHeight: 250,
                maxWidth: 250,
                objectFit: 'contain',
              }}
              src={artistImageUrl}
            />

            <Spacing.section.Minor />

            <Grid item={true}>
              <Typography variant="h4">{artistName}</Typography>

              <Spacing.BetweenComponents />

              <Flex>
                <Button
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
              </Flex>
            </Grid>
          </Grid>

          <Spacing.section.Minor />

          <Typography variant="h5">Description</Typography>

          <Spacing.section.Minor />

          <Typography variant="body1">{artistDescription}</Typography>

          <Spacing.section.Minor />

          <Typography variant="h5">Top Songs</Typography>

          <Spacing.section.Minor />

          {renderTopSongs()}

          <Spacing.section.Minor />

          <Typography variant="h5">Albums</Typography>

          <Spacing.section.Minor />

          {renderAlbums()}

          <Spacing.section.Minor />
        </Flex>
      )}
    </Container>
  );
};
