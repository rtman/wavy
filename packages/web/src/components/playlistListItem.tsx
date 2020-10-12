import { Menu, MenuItem } from '@material-ui/core';
import { CustomListItemProps, Playlist, SongPlaylist } from 'commonTypes';
import { CustomListItem } from 'components';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { CSSProperties, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

interface PlaylistListItemProps
  extends Omit<CustomListItemProps, 'onClickOpenMenu'> {
  onClick?: () => void;
  playlist: Playlist;
  style?: CSSProperties;
}

export const PlaylistListItem = (props: PlaylistListItemProps) => {
  const playerContext = useContext(PlayerContext);
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { onClick, playlist } = props;

  const onClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickPlayNow = () => {
    const songs = (playlist.songs ?? []).map(
      (songPlaylistInstance: SongPlaylist) => songPlaylistInstance.song
    );
    playerContext?.replaceQueueWithSongs(songs);
    onMenuClose();
  };

  const onClickGoToPlaylist = () => {
    history.push(`${consts.routes.PLAYLIST}/${playlist.id}`);
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

  return (
    <>
      <CustomListItem onClickOpenMenu={onClick ?? onClickOpenMenu} {...props} />
      {makeMenu()}
    </>
  );
};
