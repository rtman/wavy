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
import {
  Album,
  IdParam,
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
    listItemAvatar: {
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(2),
    },
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    list: {
      width: '100%',
    },
  })
);

export const Label = () => {
  const { id } = useParams<IdParam>();
  const userContext = useContext(UserContext);
  const playerContext = useContext(PlayerContext);
  const classes = useStyles();
  const theme = useTheme();
  const smSizeAndUp = useMediaQuery(theme.breakpoints.up('sm'));

  const [getLabel, { loading: labelLoading, data: labelData }] = useLazyQuery<
    Pick<Query, 'labelById'>,
    QueryLabelByIdArgs
  >(consts.queries.label.LABEL_BY_ID, {
    fetchPolicy: 'network-only',
  });

  const labelFollows = userContext?.user?.labelFollows ?? [];

  const labelArtists = (labelData?.labelById?.artists ?? []).filter(
    (artistLabel) => artistLabel.artist.claimed
  );
  const labelAlbums = (labelData?.labelById?.albums ?? []).filter(
    (album) => album.active
  );
  const labelImageUrl = labelData?.labelById?.profileImageUrlSmall;
  const labelName = labelData?.labelById?.name ?? '';
  const labelDescription = labelData?.labelById?.description;
  const labelSongs = (labelData?.labelById?.albums ?? [])
    .map((album) => (album.songs ?? []).reduce((song) => song))
    .filter((song) => song.active);

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
              data={artist}
              leftAccessory={
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    src={artist.profileImageUrlSmall ?? undefined}
                  />
                </ListItemAvatar>
              }
              title={artist.name}
            />
            {index < labelArtists.length - 1 ? <Divider /> : null}
          </Fragment>
        );
      });
      return (
        <>
          <Grid item={true} xs={12}>
            <Typography variant="h5">Artists</Typography>
          </Grid>
          <Grid item={true} xs={12}>
            <List style={{ width: '100%' }}>{artistsList}</List>
          </Grid>
        </>
      );
    } else {
      return null;
    }
  };

  const renderAlbums = () => {
    if (labelAlbums.length > 0) {
      const albumsList = labelAlbums.map((album: Album, albumIndex: number) => {
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
                data={song}
              />
              {songIndex < (album.songs ?? []).length - 1 ? <Divider /> : null}
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
              subtitle={album.artist.name}
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
            {albumIndex < labelAlbums.length - 1 ? <Divider /> : null}
          </Fragment>
        );
      });
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
    if (labelSongs.length > 0) {
      playerContext?.replaceQueueWithSongs(labelSongs);
    }
  };

  const renderNameButtonsAndDescription = () => (
    <Flex flexDirection="column" fullWidth={true}>
      <Typography variant="h4">{labelName}</Typography>
      <Spacing.section.Minor />
      <Grid item={true} xs={12}>
        <Button
          disabled={labelAlbums.length === 0}
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

      {labelDescription ? (
        <>
          <Grid item={true} xs={12}>
            <Typography variant="h5">Description</Typography>
          </Grid>
          <Spacing.section.Minor />
          <Grid item={true} xs={12}>
            <Typography variant="body1">{labelDescription}</Typography>
          </Grid>
        </>
      ) : null}
    </Flex>
  );

  const renderProfileImage = () =>
    labelImageUrl ? (
      <img
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
        src={labelImageUrl}
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
      {labelLoading || labelData === undefined ? (
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
          {renderArtists()}
          {renderAlbums()}
        </Grid>
      )}
    </Container>
  );
};
