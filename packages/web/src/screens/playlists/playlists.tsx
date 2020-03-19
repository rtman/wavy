import { ContentContainer, PlaylistRow, RowContainer, Screen, SubTitle } from 'components';
import { UserContext } from 'context';
import * as consts from 'consts';
import React, { useContext, useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Divider, List, TextField } from '@material-ui/core';

export const Playlists = () => {
  const [newModalVisible, setNewModalVisible] = useState<boolean>(false);
  const [playlistTitle, setPlaylistTitle] = useState<string>('');
  const [playlistDescription, setPlaylistDescription] = useState<string>('');
  const userContext = useContext(UserContext);
  const [getPlaylists, { loading: queryLoading, data: queryData, error: queryError }] = useLazyQuery(consts.queries.PLAYLISTS_BY_USER_ID, {
    fetchPolicy: 'network-only'
  });
  const [createPlaylist, { loading: mutationLoading, error: mutationError, data: mutationData }] = useMutation(
    consts.mutations.CREATE_PLAYLIST,
    {
      onCompleted(data) {
        getPlaylists({ variables: { userId: userContext?.user?.id } });
      }
    }
  );

  useEffect(() => {
    if (userContext?.user?.id) {
      getPlaylists({ variables: { userId: userContext?.user?.id } });
    }
  }, [userContext?.user?.id]);

  const renderPlaylists = () => {
    if (queryData?.playlistsByUserId?.length > 0) {
      const playlistsList = queryData.playlistsByUserId.map((playlist: Playlist, index: number) => {
        return (
          <>
            <PlaylistRow key={playlist.id} playlist={playlist} />
            {index < queryData.playlistsByUserId.length - 1 ? <Divider /> : null}
          </>
        );
      });
      return <List>{playlistsList}</List>;
    } else {
      return null;
    }
  };

  const onClickNew = (value: boolean) => () => {
    setNewModalVisible(value);
  };

  const onClickSave = () => {
    createPlaylist({ variables: { user_ids: [userContext?.user?.id], title: playlistTitle, description: playlistDescription } });
    setNewModalVisible(false);
  };

  const handleOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => setPlaylistTitle(event.target.value);

  const handleOnChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => setPlaylistDescription(event.target.value);

  return (
    <Screen>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <ContentContainer>
          <SubTitle>Playlists</SubTitle>
          <RowContainer>
            <Button onClick={onClickNew(true)}>New</Button>
          </RowContainer>
          {renderPlaylists()}
        </ContentContainer>
      )}
      <Dialog open={newModalVisible} onClose={onClickNew(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Playlist</DialogTitle>
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
          <Button onClick={onClickNew(false)} color="primary">
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
