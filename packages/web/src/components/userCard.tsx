// import { PlayerContext } from 'context';
import React, { CSSProperties, useCallback, useState } from 'react';
import { BaseCardProps, MenuPosition, User } from 'types';

import { BaseCard } from './baseCard';
import { UserMenuItems } from './userMenuItems';

interface UserCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: User;
  onClick?: () => void;
  style?: CSSProperties;
}

export const UserCard = (props: UserCardProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  const onClickGoToUser = useCallback(() => {
    // TODO: implement when user screen is available
  }, []);

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  const menuItems = useCallback(
    () => (
      <UserMenuItems
        data={data}
        menuPosition={menuPosition}
        closeMenu={closeMenu}
      />
    ),
    [data, menuPosition, closeMenu]
  );

  return (
    <BaseCard
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      onClick={onClick ?? onClickGoToUser}
      setMenuPosition={setMenuPosition}
      menuItems={menuItems()}
      {...props}
    />
  );
};

UserCard.displayName = 'UserCard';
