import {
  BaseCardProps,
  MenuPosition,
  Playlist,
  SongPlaylist,
} from 'commonTypes';
import { PlayerContext } from 'context';
import React, { CSSProperties, useContext, useState } from 'react';

import { BaseCard } from './baseCard';
import { PlaylistUtils } from './playlistUtils';

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

  const handleClickPlayNow = () => {
    const songs = (data.songs ?? []).map(
      (songPlaylistInstance: SongPlaylist) => songPlaylistInstance.song
    );
    playerContext?.replaceQueueWithSongs(songs);
    setAnchorEl(null);
  };

  const onClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  return (
    <>
      <BaseCard
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
