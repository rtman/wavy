import {
  ProfileContainer,
  ProfileHeaderImage,
  ProfileHeaderImageContainer,
  ProfileHeaderTitle,
  ContentContainer,
  Screen,
  SongRow,
  SubTitle,
  RowContainer
} from 'components';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Divider, List, TextField } from '@material-ui/core';
import { PlayerContext } from 'context';
import * as helpers from 'helpers';

const PLAYLIST_BY_ID_WITH_SONGS_QUERY = gql`
  query PlaylistByIdWithSongs($id: ID!) {
    playlistByIdWithSongs(id: $id) {
      title
      description
      image
      user_ids
      songs {
        id
        album_id
        artist_id
        artist_name
        title
        image
        url
      }
    }
  }
`;

const UPDATE_PLAYLIST_INFO = gql`
  mutation UpdatePlaylistInfo($title: String!, $description: String!, $id: ID!) {
    updatePlaylistInfo(title: $title, description: $description, id: $id) {
      title
      description
    }
  }
`;

export const Playlist = () => {
  const { id } = useParams();
  const playerContext = useContext(PlayerContext);
  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
  const [playlistTitle, setPlaylistTitle] = useState<string>('');
  const [playlistDescription, setPlaylistDescription] = useState<string>('');
  const getPlaylist = useLazyQuery(PLAYLIST_BY_ID_WITH_SONGS_QUERY);
  const submitPlaylistInfo = useMutation(UPDATE_PLAYLIST_INFO);
  const playlistImageUrl = helpers.hooks.useGetStorageHttpUrl(getPlaylist[1].data?.playlistByIdWithSongs?.image);

  useEffect(() => {
    getPlaylist[0]({ variables: { id } });
  }, []);

  useEffect(() => {
    getPlaylist[0]({ variables: { id } });
    console.log('submitPlaylistInfo[1].data', submitPlaylistInfo[1].data);
  }, [submitPlaylistInfo[1].data]);

  const renderSongs = () => {
    if (getPlaylist[1].data?.playlistByIdWithSongs?.songs.length > 0) {
      const songsList = getPlaylist[1].data.playlistByIdWithSongs.songs.map((song: Song, index: number) => {
        return (
          <>
            <SongRow key={song.id} song={song} />
            {index < getPlaylist[1].data.playlistByIdWithSongs.songs.length - 1 ? <Divider /> : null}
          </>
        );
      });
      return <List>{songsList}</List>;
    } else {
      return null;
    }
  };

  const onClickEdit = (value: boolean) => () => {
    setEditModalVisible(value);
  };

  const onClickSave = () => {
    submitPlaylistInfo[0]({ variables: { title: playlistTitle, description: playlistDescription, id } });
    setEditModalVisible(false);
  };

  const handleOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => setPlaylistTitle(event.target.value);

  const handleOnChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => setPlaylistDescription(event.target.value);

  return (
    <Screen>
      {getPlaylist[1].loading ? (
        <CircularProgress />
      ) : (
        <ContentContainer>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src={playlistImageUrl} />
            <ProfileHeaderTitle>{getPlaylist[1].data?.playlistByIdWithSongs?.title}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <ProfileContainer>
            <RowContainer>
              <Button onClick={() => playerContext.replaceQueueWithSongs(getPlaylist[1].data?.playlistByIdWithSongs?.songs)}>
                Play Now
              </Button>
              <Button onClick={onClickEdit(true)}>Edit</Button>
            </RowContainer>
            <SubTitle>Description</SubTitle>
            <div>{getPlaylist[1].data?.playlistByIdWithSongs?.description}</div>
            <SubTitle>Songs</SubTitle>
            {renderSongs()}
          </ProfileContainer>
        </ContentContainer>
      )}
      <Dialog open={editModalVisible} onClose={onClickEdit(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Playlist</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus={true}
            margin="dense"
            id="title"
            label="Title"
            fullWidth={true}
            onChange={handleOnChangeTitle}
            value={playlistTitle}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            multiline={true}
            fullWidth={true}
            onChange={handleOnChangeDescription}
            value={playlistDescription}
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
