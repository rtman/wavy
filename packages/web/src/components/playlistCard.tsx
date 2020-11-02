import {
  BaseCardProps,
  MenuPosition,
  Playlist,
  SongPlaylist,
} from 'commonTypes';
import { PlayerContext } from 'context';
import React, { CSSProperties, useCallback, useContext, useState } from 'react';

import { BaseCard } from './baseCard';
import { PlaylistMenuItems } from './playlistMenuItems';

interface PlaylistCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: Playlist;
  onClick?: () => void;
  style?: CSSProperties;
}

export const PlaylistCard = (props: PlaylistCardProps) => {
  const playerContext = useContext(PlayerContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  const onClickPlay = () => {
    const songs = (data.songs ?? []).map(
      (songPlaylistInstance: SongPlaylist) => songPlaylistInstance.song
    );
    playerContext?.replaceQueueWithSongs(songs);
  };

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  return (
    <BaseCard
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      onClick={onClick ?? onClickPlay}
      setMenuPosition={setMenuPosition}
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
