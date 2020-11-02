import { BaseListItemProps, MenuPosition, User } from 'commonTypes';
import React, { useCallback, useState } from 'react';

import { BaseListItem } from './baseListItem';
import { UserMenuItems } from './userMenuItems';

interface UserListItemProps extends Omit<BaseListItemProps, 'onClickOpenMenu'> {
  onClick?: () => void;
  user: User;
}

export const UserListItem = (props: UserListItemProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { onClick, user } = props;

  const onClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  const onClickGoToUser = () => {
    // TODO: implement when user screen is available
  };

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  return (
    <>
      <BaseListItem
        onClick={onClick ?? onClickGoToUser}
        onClickOpenMenu={onClickOpenMenu}
        {...props}
      />
      <UserMenuItems
        data={user}
        menuPosition={menuPosition}
        closeMenu={closeMenu}
      />
    </>
  );
};
