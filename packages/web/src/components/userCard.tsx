import { BaseCardProps, MenuPosition, User } from 'commonTypes';
// import { PlayerContext } from 'context';
import React, { CSSProperties, useCallback, useContext, useState } from 'react';

import { BaseCard } from './baseCard';
import { UserMenuItems } from './userMenuItems';

interface UserCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: User;
  onClick?: () => void;
  style?: CSSProperties;
}

export const UserCard = (props: UserCardProps) => {
  // const playerContext = useContext(PlayerContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  const onClickGoToUser = () => {
    // TODO: implement when user screen is available
  };

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  return (
    <BaseCard
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      onClick={onClick ?? onClickGoToUser}
      setMenuPosition={setMenuPosition}
      menuItems={
        <UserMenuItems
          data={data}
          menuPosition={menuPosition}
          closeMenu={closeMenu}
        />
      }
      {...props}
    />
  );
};
