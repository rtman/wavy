import { Artist, BaseCardProps, MenuPosition, Song } from 'commonTypes';
// import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { CSSProperties, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ArtistUtils } from './artistUtils';
import { BaseCard } from './baseCard';

interface ArtistCardProps extends Omit<BaseCardProps, 'onClickOpenMenu'> {
  data: Artist;
  onClick?: () => void;
  style?: CSSProperties;
}

export const ArtistCard = (props: ArtistCardProps) => {
  const history = useHistory();
  const playerContext = useContext(PlayerContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const { data, onClick } = props;

  // const onClickGoToArtist = () => {
  //   history.push(`${consts.routes.ARTIST}/${data.id}`);
  //   setAnchorEl(null);
  // };

  const onClickPlayNow = () => {
    const songs: Song[] = [];
    (data.albums ?? []).forEach((album) => {
      (album.songs ?? []).forEach((song) => songs.push(song));
    });
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
      <ArtistUtils
        data={data}
        anchorEl={anchorEl}
        menuPosition={menuPosition}
        setAnchorEl={setAnchorEl}
      />
    </>
  );
};
