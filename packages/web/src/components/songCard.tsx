import { BaseCardProps, MenuPosition, Song } from 'commonTypes';
import { PlayerContext } from 'context';
import React, { CSSProperties, memo, useCallback, useState } from 'react';
import { useContextSelector } from 'use-context-selector';

import { BaseCard } from './baseCard';
import { SongMenuItems } from './songMenuItems';

interface SongCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: Song;
  onClick?: () => void;
  style?: CSSProperties;
}

export const SongCard = memo((props: SongCardProps) => {
  const replaceQueueWithSongs = useContextSelector(
    PlayerContext,
    (values) => values?.replaceQueueWithSongs
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  const onClickPlay = useCallback(() => {
    if (replaceQueueWithSongs) {
      replaceQueueWithSongs([data]);
    }
  }, [data, replaceQueueWithSongs]);

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  const menuItems = useCallback(
    () => (
      <SongMenuItems
        data={data}
        menuPosition={menuPosition}
        closeMenu={closeMenu}
      />
    ),
    [data, menuPosition, closeMenu]
  );

  return (
    <BaseCard
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      onClick={onClick ?? onClickPlay}
      setMenuPosition={setMenuPosition}
      menuItems={menuItems()}
      {...props}
    />
  );
});

SongCard.displayName = 'SongCard';
