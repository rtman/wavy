import { Album, BaseCardProps, MenuPosition } from 'types';
import { BaseCard } from 'components';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { CSSProperties, memo, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';

import { AlbumMenuItems } from './albumMenuItems';

interface AlbumCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: Album;
  onClick?: () => void;
  style?: CSSProperties;
}

export const AlbumCard = memo((props: AlbumCardProps) => {
  const replaceQueueWithSongs = useContextSelector(
    PlayerContext,
    (values) => values?.replaceQueueWithSongs
  );
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;
  const { id: albumId, artist, label, songs } = data;

  const onClickPlay = useCallback(() => {
    if (replaceQueueWithSongs) {
      replaceQueueWithSongs(songs ?? []);
    }
  }, [songs, replaceQueueWithSongs]);

  const onClickNavToItem = useCallback(() => {
    history.push(`${consts.routes.ALBUM}/${albumId}`);
  }, [history, albumId]);

  const onClickTitle = useCallback(() => {
    history.push(`${consts.routes.ALBUM}/${albumId}`);
  }, [history, albumId]);

  const onClickSubtitle = useCallback(() => {
    if (artist) {
      history.push(`${consts.routes.ARTIST}/${artist.id}`);
    }
  }, [history, artist]);

  const onClickCaption = useCallback(() => {
    if (label) {
      history.push(`${consts.routes.LABEL}/${label.id}`);
    }
  }, [history, label]);

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  const menuItems = useCallback(
    () => (
      <AlbumMenuItems
        data={data}
        menuPosition={menuPosition}
        closeMenu={closeMenu}
      />
    ),
    [closeMenu, data, menuPosition]
  );

  return (
    <BaseCard
      onClick={onClick ?? onClickNavToItem}
      onClickPlay={onClickPlay}
      onClickTitle={onClickTitle}
      onClickSubtitle={onClickSubtitle}
      onClickCaption={onClickCaption}
      setMenuPosition={setMenuPosition}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      menuItems={menuItems()}
      {...props}
    />
  );
});

AlbumCard.displayName = 'AlbumCard';
