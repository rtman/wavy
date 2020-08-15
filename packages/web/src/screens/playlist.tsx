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
import { PlayerContext } from 'context';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Query, QueryPlaylistByIdArgs, SongPlaylist } from 'types';

export const Playlist = () => {
  const { id } = useParams();
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
    consts.queries.PLAYLIST_BY_ID,
    {
      fetchPolicy: 'network-only',
    }
  );
  const [submitPlaylistInfo] = useMutation(
    consts.mutations.UPDATE_PLAYLIST_INFO,
    {
      onCompleted() {
        if (id) {
          getPlaylist({ variables: { id } });
        }
      },
    }
  );

  const playlistSongs = queryData?.playlistById?.songs ?? [];
  const playlistImageUrl = queryData?.playlistById?.imageUrl ?? '';
  const playlistTitle = queryData?.playlistById?.title ?? '';
  const playlistDescription = queryData?.playlistById?.description ?? '';

  useEffect(() => {
    if (id) {
      getPlaylist({ variables: { id } });
    }
  }, [getPlaylist, id]);

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
        input: { title: playlistTitle, description: playlistDescription, id },
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

  console.log('data', queryData);

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
              <Button
                variant="outlined"
                color="primary"
                onClick={onClickEdit(true)}
              >
                Edit
              </Button>
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
