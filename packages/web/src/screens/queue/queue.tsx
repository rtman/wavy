import { ContentContainer, Screen, SongRow, SubTitle } from 'components';
import React, { useEffect, useContext, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Divider, List } from '@material-ui/core';
import { PlayerContext } from 'context';

const SONGS_BY_ID_QUERY = gql`
  query SongsByIdWithAlbumArtistsJoined($ids: [ID]!) {
    songsByIdWithAlbumArtistsJoined(ids: $ids) {
      artist_id
      song_title
      album_id
      song_genres
      song_url
      song_image
      song_date
      song_id
      song_createdAt
      song_updatedAt
      artist_name
      album_title
    }
  }
`;

export const Queue = () => {
  const history = useHistory();
  const playerContext = useContext(PlayerContext);
  const [songIds, setSongIds] = useState<string[]>([]);
  const [submitSongIds, { loading, error, data }] = useLazyQuery(SONGS_BY_ID_QUERY);

  useEffect(() => {
    let songIds_: string[] = [];
    console.log('playerContext.queue', playerContext.queue);

    playerContext.queue.forEach((song: any) => {
      songIds_.push(song.id);
    });
    setSongIds(songIds_);
  }, [playerContext.queue]);

  useEffect(() => {
    submitSongIds({ variables: { ids: songIds } });
  }, [songIds]);

  const renderSongs = () => {
    if (data?.songsByIdWithAlbumArtistsJoined?.length > 0) {
      const songs = data?.songsByIdWithAlbumArtistsJoined;
      const songsList = songs.map((song: Song, index: number) => {
        return (
          <>
            <SongRow key={song.song_id} song={song} />
            {index < songs.length - 1 ? <Divider /> : null}
          </>
        );
      });
      return <List>{songsList}</List>;
    } else {
      return null;
    }
  };

  console.log('songIds', songIds);
  console.log('data', data);

  return (
    <Screen>
      {loading ? (
        <div>loading</div>
      ) : (
        <ContentContainer>
          <SubTitle>Queue</SubTitle>
          {renderSongs()}
        </ContentContainer>
      )}
    </Screen>
  );
};
