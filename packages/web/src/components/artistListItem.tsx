import { Artist, MenuPosition } from 'types';
import { BaseListItemProps } from 'types';
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

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const onClickGoToArtist = () => {
    history.push(`${consts.routes.ARTIST}/${data.id}`);
    closeMenu();
  };

  return (
    <BaseListItem
      onClick={onClick ?? onClickGoToArtist}
      setMenuPosition={setMenuPosition}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      menuItems={
        <ArtistMenuItems
          data={data}
          menuPosition={menuPosition}
          closeMenu={closeMenu}
        />
      }
      {...props}
    />
  );
};
