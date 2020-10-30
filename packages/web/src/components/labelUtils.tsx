import { Menu, MenuItem } from '@material-ui/core';
import { Label } from 'commonTypes';
import { MenuPosition } from 'commonTypes';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface LabelUtils {
  data: Label;
  anchorEl: null | HTMLElement;
  menuPosition: MenuPosition | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

export const LabelUtils = (props: LabelUtils) => {
  const playerContext = useContext(PlayerContext);
  const history = useHistory();
  const location = useLocation();

  const { data, anchorEl, setAnchorEl } = props;

  const onMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickPlayNow = () => {
    if (
      data.songs !== undefined &&
      data.songs !== null &&
      data.songs.length > 0
    ) {
      playerContext?.replaceQueueWithSongs(data.songs);
    }

    onMenuClose();
  };

  const onClickGoToLabel = () => {
    history.push(`${consts.routes.LABEL}/${data.id}`);
    onMenuClose();
  };

  const makeMenu = () => (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onMenuClose}
    >
      {location.pathname.includes('dashboard') ? null : (
        <MenuItem onClick={handleClickPlayNow}>Play Now</MenuItem>
      )}
      <MenuItem onClick={onClickGoToLabel}>Go to Label</MenuItem>
    </Menu>
  );

  return makeMenu();
};
