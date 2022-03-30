import { MenuItem } from '@material-ui/core';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { memo, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Label } from 'types';
import { MenuPosition } from 'types';

interface LabelMenuItemsProps {
  data: Label;
  menuPosition: MenuPosition | null;
  closeMenu: () => void;
}

export const LabelMenuItems = memo((props: LabelMenuItemsProps) => {
  const playerContext = useContext(PlayerContext);
  const history = useHistory();
  const location = useLocation();

  const { data, closeMenu } = props;

  const handleClickPlayNow = () => {
    if (
      data.songs !== undefined &&
      data.songs !== null &&
      data.songs.length > 0
    ) {
      playerContext?.replaceQueueWithSongs(data.songs);
    }

    closeMenu();
  };

  const onClickGoToLabel = () => {
    history.push(`${consts.routes.LABEL}/${data.id}`);
    closeMenu();
  };

  return (
    <>
      {location.pathname.includes('dashboard') ? null : (
        <MenuItem onClick={handleClickPlayNow}>Play Now</MenuItem>
      )}
      <MenuItem onClick={onClickGoToLabel}>Go to Label</MenuItem>
    </>
  );
});
