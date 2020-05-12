import { Screen, SongRow, Spacing } from 'components';
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
import { Song, QuerySongsByIdArgs } from 'types';

interface SongsByIdData {
  songsById: Song[];
}

export const Queue = () => {
  const playerContext = useContext(PlayerContext);
  const [songIds, setSongIds] = useState<string[]>([]);
  const [
    submitSongIds,
    { loading: queryLoading, data: queryData },
  ] = useLazyQuery<SongsByIdData, QuerySongsByIdArgs>(
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
    if (songIds.length > 0) {
      submitSongIds({ variables: { ids: songIds } });
    } else {
      console.log('queue.submitSongIds - no ids');
    }
  }, [songIds, submitSongIds]);

  const songs = queryData?.songsById ?? [];

  const renderSongs = () => {
    if (songs.length > 0) {
      const sortedSongs: Song[] = [];
      songs.forEach((s) => {
        sortedSongs[songIds.indexOf(s.id)] = s;
      });
      const songsList = sortedSongs.map((song, index: number) => {
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
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <Container>
          <Spacing.section.Minor />
          <Typography variant="h1">Queue</Typography>
          <Spacing.section.Minor />
          {renderSongs()}
        </Container>
      )}
    </Screen>
  );
};
