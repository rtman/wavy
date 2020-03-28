import { ContentContainer, Screen, SongRow, SubTitle } from 'components';
import * as consts from 'consts';
import React, { useEffect, useContext, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { Divider, List } from '@material-ui/core';
import { PlayerContext } from 'context';

export const Queue = () => {
  const playerContext = useContext(PlayerContext);
  const [songIds, setSongIds] = useState<string[]>([]);
  const [submitSongIds, { loading, data }] = useLazyQuery(
    consts.queries.SONGS_BY_ID_QUERY
  );

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
      const sortedSongs: Song[] = [];
      songs.forEach((s: Song) => {
        sortedSongs[songIds.indexOf(s.id)] = s;
      });
      const songsList = sortedSongs.map((song: Song, index: number) => {
        return (
          <>
            <SongRow key={song.id} song={song} />
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
