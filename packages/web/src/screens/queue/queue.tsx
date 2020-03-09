import { ContentContainer, Screen, SongRow, SubTitle } from 'components';
import React, { useEffect, useContext, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Divider, List } from '@material-ui/core';
import { PlayerContext } from 'context';

const SONGS_BY_ID_QUERY = gql`
  query SongsById($ids: [ID]!) {
    songsById(ids: $ids) {
      id
      title
      artist_id
      artist_name
      album_title
      album_id
      genres
      url
      duration
      image
      date
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
    if (data?.songsById?.length > 0) {
      const songs = data?.songsById;
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
