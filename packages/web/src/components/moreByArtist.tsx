import { AlbumCard } from 'components';
import React from 'react';
import { Album } from 'types';

interface AlbumWithSongsProps {
  album: Album;
}

export const MoreByArtist = (props: AlbumWithSongsProps) => {
  const { album } = props;

  return (
    <React.Fragment>
      <AlbumCard album={album} />
    </React.Fragment>
  );
};
