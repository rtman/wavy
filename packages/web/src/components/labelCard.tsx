import { BaseCardProps, Label, MenuPosition, Song } from 'commonTypes';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { CSSProperties, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { BaseCard } from './baseCard';
import { LabelUtils } from './labelUtils';

interface LabelCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: Label;
  onClick?: () => void;
  style?: CSSProperties;
}

export const LabelCard = (props: LabelCardProps) => {
  const history = useHistory();
  const playerContext = useContext(PlayerContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  const onClickGoToLabel = () => {
    history.push(`${consts.routes.LABEL}/${data.id}`);
    setAnchorEl(null);
  };

  const onClickPlayNow = () => {
    const songs: Song[] = [];
    console.log('*debug* labelCard data.albums', data.albums);

    (data.albums ?? []).forEach((album) =>
      (album.songs ?? []).forEach((song) => songs.push(song))
    );
    playerContext?.replaceQueueWithSongs(songs);
  };

  const onClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  return (
    <>
      <BaseCard
        onClick={onClick ?? onClickPlayNow}
        onClickOpenMenu={onClickOpenMenu}
        {...props}
      />
      <LabelUtils
        data={data}
        anchorEl={anchorEl}
        menuPosition={menuPosition}
        setAnchorEl={setAnchorEl}
      />
    </>
  );
};
