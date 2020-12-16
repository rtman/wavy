import { MenuItem } from '@material-ui/core';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MenuPosition, Playlist, SongPlaylist } from 'types';

interface PlaylistMenuItemsProps {
  data: Playlist;
  menuPosition: MenuPosition | null;
  closeMenu: () => void;
}

export const PlaylistMenuItems = (props: PlaylistMenuItemsProps) => {
  const playerContext = useContext(PlayerContext);
  const history = useHistory();

  const { data, closeMenu } = props;

  const handleClickPlayNow = () => {
    const songs = (data.songs ?? []).map(
      (songPlaylistInstance: SongPlaylist) => songPlaylistInstance.song
    );

    playerContext?.replaceQueueWithSongs(songs);
    closeMenu();
  };

  const onClickGoToPlaylist = () => {
    history.push(`${consts.routes.PLAYLIST}/${data.id}`);
    closeMenu();
  };

  return (
    <>
      <MenuItem onClick={handleClickPlayNow}>Play Now</MenuItem>
      <MenuItem onClick={onClickGoToPlaylist}>Go to Playlist</MenuItem>
    </>
  );
};
