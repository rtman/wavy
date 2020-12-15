import { BaseCardProps, Label, MenuPosition } from 'types';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { CSSProperties, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';

import { BaseCard } from './baseCard';
import { LabelMenuItems } from './labelMenuItems';

interface LabelCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: Label;
  onClick?: () => void;
  style?: CSSProperties;
}

export const LabelCard = (props: LabelCardProps) => {
  const history = useHistory();
  const replaceQueueWithSongs = useContextSelector(
    PlayerContext,
    (values) => values?.replaceQueueWithSongs
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;
  const { id: labelId, albums } = data;

  const onClickNavToItem = useCallback(() => {
    history.push(`${consts.routes.LABEL}/${labelId}`);
    setAnchorEl(null);
  }, [history, labelId]);

  const onClickTitle = useCallback(() => {
    history.push(`${consts.routes.LABEL}/${labelId}`);
  }, [history, labelId]);

  const onClickPlay = useCallback(() => {
    if (replaceQueueWithSongs) {
      const songs = (albums ?? []).map((album) =>
        (album.songs ?? []).reduce((song) => song)
      );
      replaceQueueWithSongs(songs);
    }
  }, [albums, replaceQueueWithSongs]);

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  const menuItems = useCallback(
    () => (
      <LabelMenuItems
        data={data}
        menuPosition={menuPosition}
        closeMenu={closeMenu}
      />
    ),
    [data, closeMenu, menuPosition]
  );

  return (
    <BaseCard
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      onClick={onClick ?? onClickNavToItem}
      onClickPlay={onClickPlay}
      onClickTitle={onClickTitle}
      setMenuPosition={setMenuPosition}
      menuItems={menuItems()}
      {...props}
    />
  );
};

LabelCard.displayName = 'LabelCard';
