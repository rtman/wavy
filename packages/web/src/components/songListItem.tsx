import { BaseListItemProps, MenuPosition, Song } from 'types';
import { PlayerContext } from 'context';
import React, { useCallback, useContext, useState } from 'react';

import { BaseListItem } from './baseListItem';
import { SongMenuItems } from './songMenuItems';

interface SongListItemProps extends Omit<BaseListItemProps, 'onClickOpenMenu'> {
  onClick?: () => void;
  data: Song;
}

export const SongListItem = (props: SongListItemProps) => {
  const playerContext = useContext(PlayerContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { onClick, data } = props;

  const onClickPlay = () => {
    playerContext?.replaceQueueWithSongs([data]);
  };

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  return (
    <BaseListItem
      onClick={onClick ?? onClickPlay}
      setMenuPosition={setMenuPosition}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      active={data.active}
      playCount={data.playCount}
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
