import { BaseListItemProps, MenuPosition, Song } from 'commonTypes';
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

  const onClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  const onClickPlay = () => {
    playerContext?.replaceQueueWithSongs([data]);
  };

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  return (
    <>
      <BaseListItem
        onClick={onClick ?? onClickPlay}
        onClickOpenMenu={onClickOpenMenu}
        {...props}
      />
      <SongMenuItems
        data={data}
        menuPosition={menuPosition}
        closeMenu={closeMenu}
      />
    </>
  );
};
