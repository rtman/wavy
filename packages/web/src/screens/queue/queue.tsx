import { Screen, SongRow } from 'components';
import * as consts from 'consts';
import React, { useEffect, useContext, useState, Fragment } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import {
  Container,
  CircularProgress,
  Divider,
  List,
  Typography,
} from '@material-ui/core';
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
  }, [songIds, submitSongIds]);

  const renderSongs = () => {
    if (data?.songsById?.length > 0) {
      const songs = data?.songsById;
      const sortedSongs: Song[] = [];
      songs.forEach((s: Song) => {
        sortedSongs[songIds.indexOf(s.id)] = s;
      });
      const songsList = sortedSongs.map((song: Song, index: number) => {
        return (
          <Fragment key={song.id}>
            <SongRow song={song} />
            {index < songs.length - 1 ? <Divider /> : null}
          </Fragment>
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
        <CircularProgress />
      ) : (
        <Container>
          <Typography variant="h1">Queue</Typography>
          {renderSongs()}
        </Container>
      )}
    </Screen>
  );
};
