import { MenuItem } from '@material-ui/core';
import { MenuPosition, User } from 'commonTypes';
import React from 'react';

interface UserMenuItemsProps {
  data: User;
  menuPosition: MenuPosition | null;
  closeMenu: () => void;
}

export const UserMenuItems = (props: UserMenuItemsProps) => {
  const onClickGoToUser = () => {
    // TODO: implement when user screen is available
  };

  return (
    <>
      <MenuItem onClick={onClickGoToUser}>Go to User</MenuItem>
    </>
  );
};
