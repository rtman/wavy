import { Menu, MenuItem } from '@material-ui/core';
import { MenuPosition, Playlist, SongPlaylist } from 'commonTypes';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

interface PlaylistUtils {
  data: Playlist;
  anchorEl: null | HTMLElement;
  menuPosition: MenuPosition | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

export const PlaylistUtils = (props: PlaylistUtils) => {
  const playerContext = useContext(PlayerContext);
  const history = useHistory();

  const { data, anchorEl, setAnchorEl } = props;

  const onMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickPlayNow = () => {
    const songs = (data.songs ?? []).map(
      (songPlaylistInstance: SongPlaylist) => songPlaylistInstance.song
    );
    playerContext?.replaceQueueWithSongs(songs);
    onMenuClose();
  };

  const onClickGoToPlaylist = () => {
    history.push(`${consts.routes.PLAYLIST}/${data.id}`);
    onMenuClose();
  };

  const makeMenu = () => {
    return (
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onMenuClose}
      >
        <MenuItem onClick={handleClickPlayNow}>Play Now</MenuItem>
        <MenuItem onClick={onClickGoToPlaylist}>Go to Playlist</MenuItem>
      </Menu>
    );
  };

  return makeMenu();
};
