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
  Query,
  QueryLabelByIdArgs,
  Song,
  UpdateFollowingType,
} from 'commonTypes';
import {
  AlbumListItem,
  ArtistListItem,
  Flex,
  SongListItem,
  Spacing,
} from 'components';
import * as consts from 'consts';
import { PlayerContext, UserContext } from 'context';
import React, { Fragment, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(2),
    },
    list: {
      width: '100%',
    },
  })
);

export const Label = () => {
  const { id } = useParams();
  const userContext = useContext(UserContext);
  const playerContext = useContext(PlayerContext);
  const classes = useStyles();
  const theme = useTheme();
  const [getLabel, { loading: queryLoading, data: queryData }] = useLazyQuery<
    Pick<Query, 'labelById'>,
    QueryLabelByIdArgs
  >(consts.queries.label.LABEL_BY_ID, {
    fetchPolicy: 'network-only',
  });

  const labelFollows = userContext?.user?.labelFollows ?? [];
  const labelSongs = queryData?.labelById?.songs ?? [];
  const labelArtists = queryData?.labelById?.artists ?? [];
  const labelAlbums = queryData?.labelById?.albums ?? [];
  const labelImageUrl = queryData?.labelById?.profileImageUrlSmall ?? '';
  const labelName = queryData?.labelById?.name ?? '';
  const labelDescription = queryData?.labelById?.description ?? '';

  useEffect(() => {
    if (id) {
      getLabel({ variables: { labelId: id } });
    }
  }, [getLabel, id]);

  const onClickToggleFollow = () => {
    if (id) {
      userContext?.updateFollowing({ id, type: UpdateFollowingType.Label });
    }
  };

  const getFollowTitle = () => {
    if (id) {
      return labelFollows?.find((f) => f.label.id === id)
        ? 'Unfollow'
        : 'Follow';
    } else {
      return 'Loading';
    }
  };

  const renderArtists = () => {
    if (labelArtists.length > 0) {
      const artistsList = labelArtists.map((artistInstance, index: number) => {
        const artist = artistInstance.artist;
        return (
          <Fragment key={artist.id}>
            <ArtistListItem
              artist={artist}
              leftAccessory={
                <ListItemAvatar>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    src={artist.profileImageUrlSmall}
                  />
                </ListItemAvatar>
              }
              title={artist.name}
            />
            {index < labelArtists.length - 1 ? <Divider /> : null}
          </Fragment>
        );
      });
      return <List style={{ width: '100%' }}>{artistsList}</List>;
    } else {
      return null;
    }
  };

  const renderAlbums = () => {
    if (labelAlbums.length > 0) {
      const albumsList = labelAlbums.map((album: Album, albumIndex: number) => {
        const songsList = album.songs.map((song: Song, songIndex: number) => (
          <Fragment key={song.id}>
            <SongListItem
              leftAccessory={
                <Flex alignItems="center" alignSelf="center">
                  <Typography variant="body1">{songIndex + 1}</Typography>
                  <Spacing.BetweenParagraphs />
                </Flex>
              }
              title={song.title}
              song={song}
            />
            {songIndex < album.songs.length - 1 ? <Divider /> : null}
          </Fragment>
        ));

        return (
          <Fragment key={album.id}>
            <AlbumListItem
              style={{
                marginBottom: theme.spacing(2),
                marginTop: theme.spacing(2),
              }}
              album={album}
              title={album.title}
              subtitle={album.artist.name}
              leftAccessory={
                <ListItemAvatar>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    src={album.profileImageUrlSmall}
                  />
                </ListItemAvatar>
              }
            />
            {songsList}
            {albumIndex < labelAlbums.length - 1 ? <Divider /> : null}
          </Fragment>
        );
      });
      return <List className={classes.list}>{albumsList}</List>;
    } else {
      return null;
    }
  };

  const onClickPlayNow = () => {
    if (labelSongs.length > 0) {
      playerContext?.replaceQueueWithSongs(labelSongs);
    }
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
              src={labelImageUrl}
            />

            <Spacing.section.Minor />

            <Grid item={true} direction="column">
              <Typography variant="h4">{labelName}</Typography>

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

          <Typography variant="body1">{labelDescription}</Typography>

          <Spacing.section.Minor />

          <Typography variant="h5">Artists</Typography>

          {renderArtists()}

          <Spacing.section.Minor />

          <Typography variant="h5">Albums</Typography>

          {renderAlbums()}
        </Flex>
      )}
    </Container>
  );
};
