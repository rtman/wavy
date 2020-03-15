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
import * as consts from 'consts';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Divider, List, TextField } from '@material-ui/core';
import { PlayerContext } from 'context';
import * as helpers from 'helpers';

export const Playlist = () => {
  const { id } = useParams();
  const playerContext = useContext(PlayerContext);
  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
  const [playlistTitle, setPlaylistTitle] = useState<string>('');
  const [playlistDescription, setPlaylistDescription] = useState<string>('');
  const [getPlaylist, { loading: queryLoading, data: queryData, error: queryError }] = useLazyQuery(
    consts.queries.PLAYLIST_BY_ID_WITH_SONGS_QUERY,
    {
      fetchPolicy: 'no-cache'
    }
  );
  const [submitPlaylistInfo, { loading: mutationLoading, error: mutationError, data: mutationData }] = useMutation(
    consts.mutations.UPDATE_PLAYLIST_INFO,
    {
      onCompleted(data) {
        getPlaylist({ variables: { id } });
      }
    }
  );
  const playlistImageUrl = helpers.hooks.useGetStorageHttpUrl(queryData?.playlistByIdWithSongs?.image);

  useEffect(() => {
    getPlaylist({ variables: { id } });
  }, []);

  const renderSongs = () => {
    if (queryData?.playlistByIdWithSongs?.songs.length > 0) {
      const songsList = queryData.playlistByIdWithSongs.songs.map((song: Song, index: number) => {
        return (
          <>
            <SongRow key={song.id} song={song} />
            {index < queryData.playlistByIdWithSongs.songs.length - 1 ? <Divider /> : null}
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
    submitPlaylistInfo({ variables: { title: playlistTitle, description: playlistDescription, id } });
    setEditModalVisible(false);
  };

  const handleOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => setPlaylistTitle(event.target.value);

  const handleOnChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => setPlaylistDescription(event.target.value);

  return (
    <Screen>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <ContentContainer>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src={playlistImageUrl} />
            <ProfileHeaderTitle>{queryData?.playlistByIdWithSongs?.title}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <ProfileContainer>
            <RowContainer>
              <Button onClick={() => playerContext.replaceQueueWithSongs(queryData?.playlistByIdWithSongs?.songs)}>Play Now</Button>
              <Button onClick={onClickEdit(true)}>Edit</Button>
            </RowContainer>
            <SubTitle>Description</SubTitle>
            <div>{queryData?.playlistByIdWithSongs?.description}</div>
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
