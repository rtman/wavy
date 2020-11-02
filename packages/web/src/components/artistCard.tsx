import { Artist, BaseCardProps, MenuPosition, Song } from 'commonTypes';
// import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { CSSProperties, useCallback, useContext, useState } from 'react';

import { ArtistMenuItems } from './artistMenuItems';
import { BaseCard } from './baseCard';

interface ArtistCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: Artist;
  onClick?: () => void;
  style?: CSSProperties;
}

export const ArtistCard = (props: ArtistCardProps) => {
  const playerContext = useContext(PlayerContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  // const onClickGoToArtist = () => {
  //   history.push(`${consts.routes.ARTIST}/${data.id}`);
  //   setAnchorEl(null);
  // };

  const onClickPlay = useCallback(() => {
    const songs: Song[] = [];
    (data.albums ?? []).forEach((album) => {
      (album.songs ?? []).forEach((song) => songs.push(song));
    });
    playerContext?.replaceQueueWithSongs(songs);
  }, []);

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  return (
    <BaseCard
      onClick={onClick ?? onClickPlay}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      setMenuPosition={setMenuPosition}
      menuItems={
        <ArtistMenuItems
          data={data}
          menuPosition={menuPosition}
          closeMenu={closeMenu}
        />
      }
      {...props}
    />
  );
};
