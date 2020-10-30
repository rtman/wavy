import {
  BaseListItemProps,
  MenuPosition,
  Playlist,
  SongPlaylist,
} from 'commonTypes';
import { PlayerContext } from 'context';
import React, { CSSProperties, useContext, useState } from 'react';

import { BaseListItem } from './baseListItem';
import { PlaylistUtils } from './playlistUtils';

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

  const onClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

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

  return (
    <>
      <BaseListItem
        onClick={onClick ?? handleClickPlayNow}
        onClickOpenMenu={onClickOpenMenu}
        {...props}
      />
      <PlaylistUtils
        data={data}
        anchorEl={anchorEl}
        menuPosition={menuPosition}
        setAnchorEl={setAnchorEl}
      />
    </>
  );
};
