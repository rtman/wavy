import { Album, BaseCardProps, MenuPosition } from 'commonTypes';
import { BaseCard } from 'components';
import { PlayerContext } from 'context';
import React, { CSSProperties, memo, useCallback, useState } from 'react';
import { useContextSelector } from 'use-context-selector';

import { AlbumMenuItems } from './albumMenuItems';

interface AlbumCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: Album;
  onClick?: () => void;
  style?: CSSProperties;
}

export const AlbumCard = memo((props: AlbumCardProps) => {
  const replaceQueueWithSongs = useContextSelector(
    PlayerContext,
    (values) => values?.replaceQueueWithSongs
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  const songs = data.songs ?? [];

  const onClickPlay = useCallback(() => {
    if (replaceQueueWithSongs) {
      replaceQueueWithSongs(songs ?? []);
    }
  }, [songs, replaceQueueWithSongs]);

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  const menuItems = useCallback(
    () => (
      <AlbumMenuItems
        data={data}
        menuPosition={menuPosition}
        closeMenu={closeMenu}
      />
    ),
    [closeMenu, data, menuPosition]
  );

  return (
    <BaseCard
      onClick={onClick ?? onClickPlay}
      setMenuPosition={setMenuPosition}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      menuItems={menuItems()}
      {...props}
    />
  );
});

AlbumCard.displayName = 'AlbumCard';
