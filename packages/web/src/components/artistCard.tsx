import { Artist, BaseCardProps, MenuPosition, Song } from 'commonTypes';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { CSSProperties, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';

import { ArtistMenuItems } from './artistMenuItems';
import { BaseCard } from './baseCard';

interface ArtistCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: Artist;
  onClick?: () => void;
  style?: CSSProperties;
}

export const ArtistCard = (props: ArtistCardProps) => {
  const replaceQueueWithSongs = useContextSelector(
    PlayerContext,
    (values) => values?.replaceQueueWithSongs
  );

  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;
  const { albums, id: artistId } = data;

  const onClickNavToItem = useCallback(() => {
    history.push(`${consts.routes.ARTIST}/${artistId}`);
    setAnchorEl(null);
  }, [history, artistId]);

  const onClickTitle = useCallback(() => {
    history.push(`${consts.routes.ARTIST}/${artistId}`);
  }, [history, artistId]);

  const onClickPlay = useCallback(() => {
    if (replaceQueueWithSongs) {
      const songs: Song[] = [];
      (albums ?? []).forEach((album) => {
        (album.songs ?? []).forEach((song) => songs.push(song));
      });
      replaceQueueWithSongs(songs);
    }
  }, [albums, replaceQueueWithSongs]);

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  const menuItems = useCallback(
    () => (
      <ArtistMenuItems
        data={data}
        menuPosition={menuPosition}
        closeMenu={closeMenu}
      />
    ),
    [data, menuPosition, closeMenu]
  );

  return (
    <BaseCard
      onClick={onClick ?? onClickNavToItem}
      onClickPlay={onClickPlay}
      onClickTitle={onClickTitle}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      setMenuPosition={setMenuPosition}
      menuItems={menuItems()}
      {...props}
    />
  );
};

ArtistCard.displayName = 'ArtistCard';
