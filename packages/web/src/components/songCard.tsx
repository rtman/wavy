import { BaseCardProps, MenuPosition, Song } from 'commonTypes';
import { PlayerContext } from 'context';
import React, { CSSProperties, useContext, useState } from 'react';

import { BaseCard } from './baseCard';
import { SongUtils } from './songUtils';

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
