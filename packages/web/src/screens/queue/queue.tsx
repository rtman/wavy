import { ContentContainer, Screen, SongRow, SubTitle } from 'components';
import React, { useEffect, useContext, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Divider, List } from '@material-ui/core';
import { PlayerContext } from 'context';

const SONG_IDS_QUERY = gql`
  query SongsIdsWithArtistAlbums($songIds: [String]!) {
    songIdsWithArtistsAlbums(songIds: $songIds) {
      song_id
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
  const [submitSongIds, { loading, error, data }] = useLazyQuery(SONG_IDS_QUERY);

  useEffect(() => {
    let songIds_: string[] = [];
    playerContext.queue.forEach((song: Song) => {
      songIds_.push(song.song_id);
    });
    setSongIds(songIds_);
  }, [playerContext.queue]);

  useEffect(() => {
    submitSongIds({ variables: { songIds: songIds } });
  }, [songIds]);

  const renderSongs = () => {
    if (data?.songIdsWithArtistsAlbums?.length > 0) {
      const songs = data?.songIdsWithArtistsAlbums;
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
