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
  List,
  ListItemAvatar,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import {
  Mutation,
  MutationCreatePlaylistArgs,
  Query,
  QueryPlaylistsByUserIdArgs,
} from 'commonTypes';
import { Flex, PlaylistListItem, Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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

export const Playlists = () => {
  const userContext = useContext(UserContext);
  const classes = useStyles();
  const history = useHistory();

  const { user } = userContext ?? {};

  const [newModalVisible, setNewModalVisible] = useState<boolean>(false);
  const [newPlaylistTitle, setNewPlaylistTitle] = useState<string>('');
  const [newPlaylistDescription, setNewPlaylistDescription] = useState<string>(
    ''
  );

  const { id: userId } = user ?? {};

  const [
    getPlaylists,
    { loading: queryLoading, data: queryData },
  ] = useLazyQuery<
    Pick<Query, 'playlistsByUserId'>,
    QueryPlaylistsByUserIdArgs
  >(consts.queries.playlist.PLAYLISTS_BY_USER_ID, {
    fetchPolicy: 'network-only',
  });

  const [createPlaylist] = useMutation<
    Pick<Mutation, 'createPlaylist'>,
    MutationCreatePlaylistArgs
  >(consts.mutations.playlist.CREATE_PLAYLIST, {
    onCompleted() {
      if (userId) {
        getPlaylists({ variables: { userId } });
      }
    },
  });

  useEffect(() => {
    if (userId) {
      getPlaylists({ variables: { userId } });
    }
  }, [userId, getPlaylists]);

  const onClickGoToPlaylist = (playlistId: string) => {
    history.push(`${consts.routes.PLAYLIST}/${playlistId}`);
  };

  const playlists = queryData?.playlistsByUserId ?? [];
  const renderPlaylists = () => {
    if (playlists.length > 0) {
      const playlistsList = playlists.map((playlist, index: number) => {
        return (
          <React.Fragment key={playlist.id}>
            <PlaylistListItem
              onClick={() => onClickGoToPlaylist(playlist.id)}
              data={playlist}
              title={playlist.title}
              leftAccessory={
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    // TODO: Make profileImage mandatory, if user doesnt provide them default one will be provided
                    src={playlist.profileImageUrlSmall ?? ''}
                  />
                </ListItemAvatar>
              }
            />
            {index < playlists.length - 1 ? <Divider /> : null}
          </React.Fragment>
        );
      });
      return <List className={classes.list}>{playlistsList}</List>;
    } else {
      return null;
    }
  };

  const onClickNew = (value: boolean) => () => {
    setNewModalVisible(value);
  };

  const onClickSave = () => {
    if (userId) {
      createPlaylist({
        variables: {
          input: {
            userId,
            title: newPlaylistTitle,
            description: newPlaylistDescription,
          },
        },
      });
      setNewModalVisible(false);
    }
  };

  const handleOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNewPlaylistTitle(event.target.value);

  const handleOnChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setNewPlaylistDescription(event.target.value);

  return (
    <Container>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <Flex flexDirection="column">
          <Spacing.section.Minor />
          <Typography variant="h5">Playlists</Typography>
          <Spacing.section.Minor />

          <Button
            variant="contained"
            color="primary"
            onClick={onClickNew(true)}
          >
            New
          </Button>

          <Spacing.section.Minor />
          {renderPlaylists()}
        </Flex>
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
    </Container>
  );
};
