import { useLazyQuery } from '@apollo/react-hooks';
import {
  CircularProgress,
  Container,
  Divider,
  List,
  Typography,
} from '@material-ui/core';
import { Screen, SongRow, Spacing } from 'components';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { QuerySongsByIdArgs, Song } from 'types';

interface SongsByIdData {
  songsById: Song[];
}

export const Queue = () => {
  const playerContext = useContext(PlayerContext);
  const queue = playerContext?.queue;
  const [songIds, setSongIds] = useState<string[]>([]);
  const [
    submitSongIds,
    { loading: queryLoading, data: queryData },
  ] = useLazyQuery<SongsByIdData, QuerySongsByIdArgs>(
    consts.queries.SONGS_BY_ID_QUERY
  );

  useEffect(() => {
    const songIds_: string[] = [];
    console.log('queue', queue);

    if (queue) {
      queue.forEach((song: Song) => {
        songIds_.push(song.id);
      });
      setSongIds(songIds_);
    }
  }, [queue]);

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
