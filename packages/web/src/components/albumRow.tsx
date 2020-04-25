import * as consts from 'consts';
import { StyledButton } from 'components';
import React, { useContext, useState } from 'react';
import {
  Avatar,
  Divider,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import * as helpers from 'helpers';
import { PlayerContext, UserContext } from 'context';
import { useHistory } from 'react-router-dom';
import NestedMenuItem from 'material-ui-nested-menu-item';
import { Album } from 'types';

interface AlbumRowProps {
  album: Album;
  passedOnClickAlbum?: (album: Album) => Promise<void>;
}

export const AlbumRow = (props: AlbumRowProps) => {
  const { album, passedOnClickAlbum } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<any>(null);
  const playerContext = useContext(PlayerContext);
  const userContext = useContext(UserContext);
  const history = useHistory();

  const albumImageUrl = helpers.hooks.useGetStorageHttpUrl(album.image);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickPlayNow = () => {
    playerContext.replaceQueueWithSongs(album.songs);
    handleMenuClose();
  };

  const handleClickAddToQueue = () => {
    playerContext.addSongsToEndOfQueue(album.songs);
    handleMenuClose();
  };

  const handleClickGoToAlbum = () => {
    history.push(`${consts.routes.ALBUM}/${album?.id}`);
  };

  const onClickAlbum = () => {
    playerContext.replaceQueueWithSongs(album.songs);
  };

  const resolvedOnClick =
    typeof passedOnClickAlbum === 'function'
      ? passedOnClickAlbum
      : onClickAlbum;

  const onClickAddToPlaylist = (playlistId: string) => () => {
    const song_ids = album.songs.map((s) => s.id);
    userContext?.addSongsToPlaylist(playlistId, song_ids);
  };

  const renderPlaylists = () => {
    const playlistList = userContext?.playlists?.map((playlistInstance) => {
      const playlist = playlistInstance.playlist;
      return (
        <MenuItem key={playlist.id} onClick={onClickAddToPlaylist(playlist.id)}>
          {playlist.title}
        </MenuItem>
      );
    });

    return playlistList;
  };

  return (
    <>
      <ListItem
        alignItems="flex-start"
        onClick={() => resolvedOnClick(album)}
        button={true}
      >
        <ListItemAvatar>
          <Avatar variant="square" src={albumImageUrl} />
        </ListItemAvatar>
        <ListItemText primary={album.title} />
        <ListItemSecondaryAction>
          <StyledButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            <MoreVert />
          </StyledButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleClickPlayNow}>Play Now</MenuItem>
        <MenuItem onClick={handleClickAddToQueue}>Add to Queue</MenuItem>
        <MenuItem onClick={handleClickGoToAlbum}>Go to Album</MenuItem>
        {/* eslint-disable-next-line no-self-compare*/}
        {userContext?.playlists?.length ?? 0 > 0 ? (
          <NestedMenuItem
            label="Add to Playlist"
            parentMenuOpen={!!menuPosition}
          >
            {renderPlaylists()}
          </NestedMenuItem>
        ) : null}
      </Menu>
      <Divider variant="inset" component="li" />
    </>
  );
};
