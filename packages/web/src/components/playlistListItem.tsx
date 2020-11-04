import {
  BaseListItemProps,
  MenuPosition,
  Playlist,
  SongPlaylist,
} from 'commonTypes';
import { PlayerContext } from 'context';
import React, { CSSProperties, useCallback, useContext, useState } from 'react';

import { BaseListItem } from './baseListItem';
import { PlaylistMenuItems } from './playlistMenuItems';

interface PlaylistListItemProps
  extends Omit<BaseListItemProps, 'onClickOpenMenu'> {
  onClick?: () => void;
  data: Playlist;
  style?: CSSProperties;
}

export const PlaylistListItem = (props: PlaylistListItemProps) => {
  const playerContext = useContext(PlayerContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  const closeMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleClickPlayNow = () => {
    const songs = (data.songs ?? []).map(
      (songPlaylistInstance: SongPlaylist) => songPlaylistInstance.song
    );
    playerContext?.replaceQueueWithSongs(songs);
    closeMenu();
  };

  return (
    <BaseListItem
      onClick={onClick ?? handleClickPlayNow}
      setMenuPosition={setMenuPosition}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      menuItems={
        <PlaylistMenuItems
          data={data}
          menuPosition={menuPosition}
          closeMenu={closeMenu}
        />
      }
      {...props}
    />
  );
};
