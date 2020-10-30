import { useLazyQuery, useMutation } from '@apollo/react-hooks';
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
} from '@material-ui/core';
import {
  Mutation,
  MutationUpdatePlaylistInfoArgs,
  Query,
  QueryPlaylistByIdArgs,
  SongPlaylist,
  UpdateFollowingType,
} from 'commonTypes';
import { IdParam } from 'commonTypes';
import { Flex, SongListItem, Spacing } from 'components';
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

  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
  const [newPlaylistTitle, setNewPlaylistTitle] = useState<string>('');
  const [newPlaylistDescription, setNewPlaylistDescription] = useState<string>(
    ''
  );
  const [
    getPlaylist,
    { loading: queryLoading, data: queryData },
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
  const playlistSongs = queryData?.playlistById?.songs ?? [];
  const playlistImageUrl = queryData?.playlistById?.profileImageUrlLarge ?? '';
  const playlistTitle = queryData?.playlistById?.title ?? '';
  const playlistDescription = queryData?.playlistById?.description ?? '';
  const playlistUsers = queryData?.playlistById?.users ?? [];

  const userIsPlaylistOwner = playlistUsers.find(
    (user) => userContext?.user?.id === user.userId
  )
    ? true
    : false;

  useEffect(() => {
    if (id) {
      getPlaylist({ variables: { playlistId: id } });
    }
  }, [getPlaylist, id]);

  const onClickToggleFollow = () => {
    if (id) {
      userContext?.updateFollowing({ id, type: UpdateFollowingType.Playlist });
    }
  };

  const getFollowTitle = () => {
    if (id) {
      return playlistFollows?.find((f) => f.playlist.id === id)
        ? 'Unfollow'
        : 'Follow';
    } else {
      return 'Loading';
    }
  };

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
                      src={song.album.profileImageUrlSmall}
                    />
                  </ListItemAvatar>
                }
              />
              {index < playlistSongs.length - 1 ? <Divider /> : null}
            </Fragment>
          );
        }
      );
      return <List className={classes.list}>{songsList}</List>;
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
              src={playlistImageUrl}
            />

            <Spacing.section.Minor />

            <Grid item={true}>
              <Typography variant="h4">{playlistTitle}</Typography>

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

                {/* <Button
                  variant="outlined"
                  color="primary"
                  onClick={onClickToggleFollow}
                >
                  {getFollowTitle()}
                </Button> */}
              </Flex>
            </Grid>
          </Grid>

          <Spacing.section.Minor />

          <Typography variant="h5">Description</Typography>

          <Spacing.section.Minor />

          <Typography variant="body1">{playlistDescription}</Typography>

          <Spacing.section.Minor />

          <Typography variant="h5">Songs</Typography>

          <Spacing.section.Minor />

          {renderSongs()}
        </Flex>
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
