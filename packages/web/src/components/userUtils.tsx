import { Menu, MenuItem } from '@material-ui/core';
import { MenuPosition, User } from 'commonTypes';
import React from 'react';

interface UserUtils {
  data: User;
  anchorEl: null | HTMLElement;
  menuPosition: MenuPosition | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

export const UserUtils = (props: UserUtils) => {
  const { anchorEl, setAnchorEl } = props;

  const onCloseMenu = () => {
    setAnchorEl(null);
  };

  const onClickGoToUser = () => {
    // TODO: implement when user screen is available
  };

  const makeMenu = () => {
    return (
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onCloseMenu}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: 200,
          },
        }}
      >
        <MenuItem onClick={onClickGoToUser}>Go to User</MenuItem>
      </Menu>
    );
  };

  return makeMenu();
};
