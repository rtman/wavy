import { Menu, MenuItem } from '@material-ui/core';
import { Label } from 'commonTypes';
import { CustomListItemProps } from 'commonTypes';
import { CustomListItem } from 'components';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { CSSProperties, useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface LabelListItemProps extends CustomListItemProps {
  label: Label;
  style?: CSSProperties;
}

export const LabelListItem = (props: LabelListItemProps) => {
  const playerContext = useContext(PlayerContext);
  const history = useHistory();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { label } = props;

  const onClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickPlayNow = () => {
    if (
      label.songs !== undefined &&
      label.songs !== null &&
      label.songs.length > 0
    ) {
      playerContext?.replaceQueueWithSongs(label.songs);
    }

    onMenuClose();
  };

  const onClickGoToLabel = () => {
    history.push(`${consts.routes.LABEL}/${label.id}`);
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

  return (
    <>
      <CustomListItem
        onClick={onClickGoToLabel}
        onClickOpenMenu={onClickOpenMenu}
        {...props}
      />
      {makeMenu()}
    </>
  );
};
