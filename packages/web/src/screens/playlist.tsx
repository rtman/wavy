import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  TextField,
  Typography,
} from '@material-ui/core';
import {
  ContentContainer,
  ProfileContainer,
  ProfileHeaderImage,
  ProfileHeaderImageContainer,
  ProfileHeaderTitle,
  RowContainer,
  Screen,
  SongRow,
  Spacing,
} from 'components';
import * as consts from 'consts';
import { PlayerContext, UserContext } from 'context';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Mutation,
  MutationUpdatePlaylistInfoArgs,
  Query,
  QueryPlaylistByIdArgs,
  SongPlaylist,
  UpdateFollowingType,
} from 'types';

export const Playlist = () => {
  const { id } = useParams();
  const userContext = useContext(UserContext);
  const playerContext = useContext(PlayerContext);
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
              <SongRow song={song} />
              {index < playlistSongs.length - 1 ? <Divider /> : null}
            </Fragment>
          );
        }
      );
      return <List>{songsList}</List>;
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
    <Screen>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <ContentContainer>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src={playlistImageUrl} />
            <ProfileHeaderTitle>{playlistTitle}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <ProfileContainer>
            <RowContainer>
              <Button
                variant="contained"
                color="primary"
                onClick={onClickPlayNow}
              >
                Play Now
              </Button>
              <Spacing.BetweenComponents />
              {userIsPlaylistOwner ? (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={onClickEdit(true)}
                >
                  Edit
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={onClickToggleFollow}
                >
                  {getFollowTitle()}
                </Button>
              )}
            </RowContainer>
            <Spacing.section.Minor />
            <Typography variant="h1">Description</Typography>
            <Spacing.section.Minor />
            <Typography variant="body1">{playlistDescription}</Typography>
            <Spacing.section.Minor />
            <Typography variant="h1">Songs</Typography>
            <Spacing.section.Minor />
            {renderSongs()}
          </ProfileContainer>
        </ContentContainer>
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
    </Screen>
  );
};
