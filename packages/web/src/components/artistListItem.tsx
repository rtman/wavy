import { Artist, MenuPosition } from 'commonTypes';
import { BaseListItemProps } from 'commonTypes';
import { BaseListItem } from 'components';
import * as consts from 'consts';
import React, { CSSProperties, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ArtistMenuItems } from './artistMenuItems';

interface ArtistListItemProps
  extends Omit<BaseListItemProps, 'onClickOpenMenu'> {
  data: Artist;
  onClick?: () => void;
  style?: CSSProperties;
}

export const ArtistListItem = (props: ArtistListItemProps) => {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  const onClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const onClickGoToArtist = () => {
    history.push(`${consts.routes.ARTIST}/${data.id}`);
    closeMenu();
  };

  return (
    <>
      <BaseListItem
        onClick={onClick ?? onClickGoToArtist}
        onClickOpenMenu={onClickOpenMenu}
        {...props}
      />
      <ArtistMenuItems
        data={data}
        menuPosition={menuPosition}
        closeMenu={closeMenu}
      />
    </>
  );
};
