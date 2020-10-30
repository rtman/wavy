import { BaseListItemProps, MenuPosition, Song } from 'commonTypes';
import { PlayerContext } from 'context';
import React, { useContext, useState } from 'react';

import { BaseListItem } from './baseListItem';
import { SongUtils } from './songUtils';

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

  return (
    <>
      <BaseListItem
        onClick={onClick ?? onClickPlay}
        onClickOpenMenu={onClickOpenMenu}
        {...props}
      />
      <SongUtils
        data={data}
        anchorEl={anchorEl}
        menuPosition={menuPosition}
        setAnchorEl={setAnchorEl}
      />
    </>
  );
};
