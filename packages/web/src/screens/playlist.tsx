import { useLazyQuery, useMutation } from '@apollo/client';
import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  List,
  ListItemAvatar,
  makeStyles,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { AccountBox } from '@material-ui/icons';
import { Flex, SongListItem, Spacing } from 'components';
import * as consts from 'consts';
import { playlist } from 'consts/mutations';
import { PlayerContext, UserContext } from 'context';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Mutation,
  MutationUpdatePlaylistInfoArgs,
  Query,
  QueryPlaylistByIdArgs,
  SongPlaylist,
} from 'types';
import { IdParam } from 'types';

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

export const Playlist = () => {
  const { id } = useParams<IdParam>();
  const userContext = useContext(UserContext);
  const playerContext = useContext(PlayerContext);
  const classes = useStyles();
  const theme = useTheme();
  const smSizeAndUp = useMediaQuery(theme.breakpoints.up('sm'));

  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
  const [newPlaylistTitle, setNewPlaylistTitle] = useState<string>('');
  const [newPlaylistDescription, setNewPlaylistDescription] = useState<string>(
    ''
  );
  const [
    getPlaylist,
    { loading: playlistLoading, data: playlistData },
  ] = useLazyQuery<Pick<Query, 'playlistById'>, QueryPlaylistByIdArgs>(
    consts.queries.playlist.PLAYLIST_BY_ID,
    {
      fetchPolicy: 'network-only',
    }
  );
  const [submitPlaylistInfo] = useMutation<
    Pick<Mutation, 'updatePlaylistInfo'>,
    MutationUpdatePlaylistInfoArgs
  >(consts.mutations.playlist.UPDATE_PLAYLIST_INFO, {
    onCompleted() {
      if (id) {
        getPlaylist({ variables: { playlistId: id } });
      }
    },
  });

  const playlistFollows = userContext?.user?.playlistFollows ?? [];
  const playlistSongs = playlistData?.playlistById?.songs ?? [];
  const playlistImageUrl =
    playlistData?.playlistById?.profileImageUrlLarge ?? '';
  const playlistTitle = playlistData?.playlistById?.title ?? '';
  const playlistDescription = playlistData?.playlistById?.description ?? '';
  const playlistUsers = playlistData?.playlistById?.users ?? [];

  // const userIsPlaylistOwner = playlistUsers.find(
  //   (user) => userContext?.user?.id === user.userId
  // )
  //   ? true
  //   : false;

  useEffect(() => {
    if (id) {
      getPlaylist({ variables: { playlistId: id } });
    }
  }, [getPlaylist, id]);

  // const onClickToggleFollow = () => {
  //   if (id) {
  //     userContext?.updateFollowing({ id, type: UpdateFollowingType.Playlist });
  //   }
  // };

  // const getFollowTitle = () => {
  //   if (id) {
  //     return playlistFollows?.find((f) => f.playlist.id === id)
  //       ? 'Unfollow'
  //       : 'Follow';
  //   } else {
  //     return 'Loading';
  //   }
  // };

  const renderSongs = () => {
    if (playlistSongs.length > 0) {
      const songsList = playlistSongs.map(
        (songInstance: SongPlaylist, index: number) => {
          const song = songInstance.song;

          return (
            <Fragment key={song.id}>
              <SongListItem
                data={song}
                title={song.title}
                subtitle={song.artist.name}
                caption={song.label?.name}
                leftAccessory={
                  <ListItemAvatar className={classes.listItemAvatar}>
                    <Avatar
                      className={classes.avatar}
                      variant="square"
                      src={song.album.profileImageUrlSmall ?? undefined}
                    />
                  </ListItemAvatar>
                }
              />
              {index < playlistSongs.length - 1 ? <Divider /> : null}
            </Fragment>
          );
        }
      );

      return (
        <>
          <Grid item={true} xs={12}>
            <Typography variant="h5">Songs</Typography>
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

  const onClickEdit = (value: boolean) => () => {
    setEditModalVisible(value);
  };

  const onClickSave = () => {
    submitPlaylistInfo({
      variables: {
        input: {
          title: playlistTitle,
          description: playlistDescription,
          playlistId: id,
        },
      },
    });
    setEditModalVisible(false);
  };

  const handleOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNewPlaylistTitle(event.target.value);

  const handleOnChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setNewPlaylistDescription(event.target.value);

  const onClickPlayNow = () => {
    if (playlistSongs.length > 0) {
      const songs = playlistSongs.map(
        (songInstance: SongPlaylist) => songInstance.song
      );

      playerContext?.replaceQueueWithSongs(songs);
    }
  };

  const renderNameButtonsAndDescription = () => (
    <Flex flexDirection="column" fullWidth={true}>
      <Typography variant="h4">{playlistTitle}</Typography>
      <Spacing.section.Minor />
      <Grid item={true} xs={12}>
        <Button
          disabled={playlistSongs.length === 0}
          variant="contained"
          color="primary"
          onClick={onClickPlayNow}
        >
          Play Now
        </Button>
        {/* <Spacing.BetweenComponents />

        <Button
          variant="outlined"
          color="primary"
          onClick={onClickToggleFollow}
        >
          {getFollowTitle()}
        </Button> */}
      </Grid>

      <Spacing.section.Minor />

      {playlistDescription ? (
        <>
          <Grid item={true} xs={12}>
            <Typography variant="h5">Description</Typography>
          </Grid>
          <Spacing.section.Minor />
          <Grid item={true} xs={12}>
            <Typography variant="body1">{playlistDescription}</Typography>
          </Grid>
        </>
      ) : null}
    </Flex>
  );

  const renderProfileImage = () =>
    playlistImageUrl ? (
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
        src={playlistImageUrl}
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
      {playlistLoading ? (
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
          {renderSongs()}
        </Grid>
      )}
      <Dialog
        open={editModalVisible}
        onClose={onClickEdit(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Playlist</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus={true}
            margin="dense"
            id="title"
            label="Title"
            fullWidth={true}
            onChange={handleOnChangeTitle}
            value={newPlaylistTitle}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            multiline={true}
            fullWidth={true}
            onChange={handleOnChangeDescription}
            value={newPlaylistDescription}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickEdit(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={onClickSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
