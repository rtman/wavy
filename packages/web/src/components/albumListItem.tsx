import { Album, BaseListItemProps, MenuPosition } from 'commonTypes';
import { BaseListItem } from 'components';
import { PlayerContext } from 'context';
import React, { CSSProperties, useContext, useState } from 'react';

import { AlbumUtils } from './albumUtils';

interface AlbumListItemProps
  extends Omit<BaseListItemProps, 'onClickOpenMenu'> {
  data: Album;
  onClick?: () => void;
  style?: CSSProperties;
}

export const AlbumListItem = (props: AlbumListItemProps) => {
  const playerContext = useContext(PlayerContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  const onClickPlay = () => {
    playerContext?.replaceQueueWithSongs(data.songs ?? []);
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
      <BaseListItem
        onClick={onClick ?? onClickPlay}
        onClickOpenMenu={onClickOpenMenu}
        {...props}
      />
      <AlbumUtils
        data={data}
        anchorEl={anchorEl}
        menuPosition={menuPosition}
        setAnchorEl={setAnchorEl}
      />
    </>
  );
};
