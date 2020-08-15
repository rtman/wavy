import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  TextField,
  Typography,
} from '@material-ui/core';
import { PlaylistRow, RowContainer, Screen, Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, { useContext, useEffect, useState } from 'react';
import { Query, QueryPlaylistsByUserIdArgs } from 'types';

export const Playlists = () => {
  const [newModalVisible, setNewModalVisible] = useState<boolean>(false);
  const [newPlaylistTitle, setNewPlaylistTitle] = useState<string>('');
  const [newPlaylistDescription, setNewPlaylistDescription] = useState<string>(
    ''
  );
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  // const userId = user?.id;

  const [
    getPlaylists,
    { loading: queryLoading, data: queryData },
  ] = useLazyQuery<
    Pick<Query, 'playlistsByUserId'>,
    QueryPlaylistsByUserIdArgs
  >(consts.queries.PLAYLISTS_BY_USER_ID, {
    fetchPolicy: 'network-only',
  });

  const [createPlaylist] = useMutation(consts.mutations.CREATE_PLAYLIST, {
    onCompleted() {
      if (user?.id) {
        getPlaylists({ variables: { userId: user.id } });
      }
    },
  });

  useEffect(() => {
    if (user?.id) {
      getPlaylists({ variables: { userId: user.id } });
    }
  }, [user, getPlaylists]);

  const playlists = queryData?.playlistsByUserId ?? [];
  const renderPlaylists = () => {
    if (playlists.length > 0) {
      const playlistsList = playlists.map((playlist, index: number) => {
        return (
          <React.Fragment key={playlist.id}>
            <PlaylistRow playlist={playlist} />
            {index < playlists.length - 1 ? <Divider /> : null}
          </React.Fragment>
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
    createPlaylist({
      variables: {
        input: {
          userId: user?.id,
          title: newPlaylistTitle,
          description: newPlaylistDescription,
        },
      },
    });
    setNewModalVisible(false);
  };

  const handleOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNewPlaylistTitle(event.target.value);

  const handleOnChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setNewPlaylistDescription(event.target.value);

  return (
    <Screen>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <Container>
          <Spacing.section.Minor />
          <Typography variant="h1">Playlists</Typography>
          <Spacing.section.Minor />
          <RowContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={onClickNew(true)}
            >
              New
            </Button>
          </RowContainer>
          <Spacing.section.Minor />
          {renderPlaylists()}
        </Container>
      )}
      <Dialog
        open={newModalVisible}
        onClose={onClickNew(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Playlist</DialogTitle>
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
