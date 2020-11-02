import { BaseCardProps, MenuPosition, Song } from 'commonTypes';
import { PlayerContext } from 'context';
import React, { CSSProperties, useCallback, useContext, useState } from 'react';

import { BaseCard } from './baseCard';
import { SongMenuItems } from './songMenuItems';

interface SongCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: Song;
  onClick?: () => void;
  style?: CSSProperties;
}

export const SongCard = (props: SongCardProps) => {
  const playerContext = useContext(PlayerContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  const onClickPlay = () => {
    playerContext?.replaceQueueWithSongs([data]);
  };

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  return (
    <BaseCard
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      onClick={onClick ?? onClickPlay}
      setMenuPosition={setMenuPosition}
      menuItems={
        <SongMenuItems
          data={data}
          menuPosition={menuPosition}
          closeMenu={closeMenu}
        />
      }
      {...props}
    />
  );
};
