import { BaseCardProps, Label, MenuPosition } from 'commonTypes';
// import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { CSSProperties, useCallback, useContext, useState } from 'react';
// import { useHistory } from 'react-router-dom';

import { BaseCard } from './baseCard';
import { LabelMenuItems } from './labelMenuItems';

interface LabelCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: Label;
  onClick?: () => void;
  style?: CSSProperties;
}

export const LabelCard = (props: LabelCardProps) => {
  // const history = useHistory();
  const playerContext = useContext(PlayerContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  // const onClickGoToLabel = () => {
  //   history.push(`${consts.routes.LABEL}/${data.id}`);
  //   setAnchorEl(null);
  // };

  const onClickPlay = () => {
    const songs = (data.albums ?? []).map((album) =>
      (album.songs ?? []).reduce((song) => song)
    );
    playerContext?.replaceQueueWithSongs(songs);
  };

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  return (
    <BaseCard
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      onClick={onClick ?? onClickPlay}
      setMenuPosition={setMenuPosition}
      menuItems={
        <LabelMenuItems
          data={data}
          menuPosition={menuPosition}
          closeMenu={closeMenu}
        />
      }
      {...props}
    />
  );
};
