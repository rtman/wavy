import { Album, Song } from 'types';
import { AlbumRow, SongRow } from 'components';
import { Divider, List } from '@material-ui/core';
import React from 'react';

interface AlbumWithSongsProps {
  album: Album;
}

export const AlbumWithSongs = (props: AlbumWithSongsProps) => {
  const { album } = props;

  const renderSongs = () => {
    const songsList = album.songs.map((song: Song, index: number) => {
      return (
        <React.Fragment key={song.id}>
          <SongRow song={song} secondaryStyle={true} />
          {index < album.songs.length - 1 ? <Divider /> : null}
        </React.Fragment>
      );
    });

    return <List>{songsList}</List>;
  };

  return (
    <>
      <AlbumRow album={album} withSongs={true} />
      {renderSongs()}
    </>
  );
};
