import {
  BaseCardProps,
  MenuPosition,
  Playlist,
  SongPlaylist,
} from 'commonTypes';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { CSSProperties, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';

import { BaseCard } from './baseCard';
import { PlaylistMenuItems } from './playlistMenuItems';

interface PlaylistCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: Playlist;
  onClick?: () => void;
  style?: CSSProperties;
}

export const PlaylistCard = (props: PlaylistCardProps) => {
  const replaceQueueWithSongs = useContextSelector(
    PlayerContext,
    (values) => values?.replaceQueueWithSongs
  );
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;
  const { id: playlistId } = data;

  const onClickPlay = useCallback(() => {
    if (replaceQueueWithSongs) {
      const songs = (data.songs ?? []).map(
        (songPlaylistInstance: SongPlaylist) => songPlaylistInstance.song
      );
      replaceQueueWithSongs(songs);
    }
  }, [data, replaceQueueWithSongs]);

  const onClickNavToItem = useCallback(() => {
    history.push(`${consts.routes.PLAYLIST}/${playlistId}`);
  }, [history, playlistId]);

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  const menuItems = useCallback(
    () => (
      <PlaylistMenuItems
        data={data}
        menuPosition={menuPosition}
        closeMenu={closeMenu}
      />
    ),
    [data, closeMenu, menuPosition]
  );

  return (
    <BaseCard
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      onClick={onClick ?? onClickNavToItem}
      onClickPlay={onClickPlay}
      setMenuPosition={setMenuPosition}
      menuItems={menuItems()}
      {...props}
    />
  );
};

PlaylistCard.displayName = 'PlaylistName';
