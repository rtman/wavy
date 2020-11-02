import { Album, BaseListItemProps, MenuPosition } from 'commonTypes';
import { BaseListItem } from 'components';
import { PlayerContext } from 'context';
import React, { CSSProperties, useCallback, useContext, useState } from 'react';

import { AlbumMenuItems } from './albumMenuItems';

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

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  return (
    <>
      <BaseListItem onClick={onClick ?? onClickPlay} {...props} />
      <AlbumMenuItems
        data={data}
        menuPosition={menuPosition}
        closeMenu={closeMenu}
      />
    </>
  );
};
