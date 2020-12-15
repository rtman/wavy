import { BaseCardProps, MenuPosition, Song } from 'types';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { CSSProperties, memo, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';

import { BaseCard } from './baseCard';
import { SongMenuItems } from './songMenuItems';

interface SongCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: Song;
  onClick?: () => void;
  style?: CSSProperties;
}

export const SongCard = memo((props: SongCardProps) => {
  const replaceQueueWithSongs = useContextSelector(
    PlayerContext,
    (values) => values?.replaceQueueWithSongs
  );
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;
  const {
    album: { id: albumId, label },
    artist: { id: artistId },
  } = data;

  const onClickPlay = useCallback(() => {
    if (replaceQueueWithSongs) {
      replaceQueueWithSongs([data]);
    }
  }, [data, replaceQueueWithSongs]);

  const onClickNavToItem = useCallback(() => {
    history.push(`${consts.routes.ALBUM}/${albumId}`);
    setAnchorEl(null);
  }, [albumId, history]);

  const onClickTitle = useCallback(() => {
    history.push(`${consts.routes.ALBUM}/${albumId}`);
  }, [history, albumId]);

  const onClickSubtitle = useCallback(() => {
    history.push(`${consts.routes.ARTIST}/${artistId}`);
  }, [history, artistId]);

  const onClickCaption = useCallback(() => {
    if (label) {
      history.push(`${consts.routes.LABEL}/${label.id}`);
    }
  }, [history, label]);

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  const menuItems = useCallback(
    () => (
      <SongMenuItems
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
      onClick={onClick ?? onClickNavToItem}
      onClickTitle={onClickTitle}
      onClickSubtitle={onClickSubtitle}
      onClickCaption={onClickCaption}
      onClickPlay={onClickPlay}
      setMenuPosition={setMenuPosition}
      menuItems={menuItems()}
      {...props}
    />
  );
});

SongCard.displayName = 'SongCard';
