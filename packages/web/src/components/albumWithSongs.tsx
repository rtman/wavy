import { AlbumRow, SongRow } from 'components';
import React from 'react';
import { Divider, List } from '@material-ui/core';

export const AlbumWithSongs = (album: Album) => {
  const renderSongs = () => {
    const songsList = album.songs.map((song: Song, index) => {
      return (
        <React.Fragment key={song.id}>
          <SongRow {...song} />
          {index !== album.songs.length ? <Divider /> : null}
        </React.Fragment>
      );
    });

    return <List>{songsList}</List>;
  };

  return (
    <>
      <AlbumRow {...album} />
      {renderSongs()}
    </>
  );
};
