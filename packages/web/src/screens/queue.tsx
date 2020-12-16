import { useLazyQuery } from '@apollo/client';
import {
  Avatar,
  CircularProgress,
  Container,
  createStyles,
  Divider,
  List,
  ListItemAvatar,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { Flex, SongListItem, Spacing } from 'components';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Query, QuerySongsByIdArgs, Song } from 'types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItemAvatar: {
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(2),
    },
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    list: {
      width: '100%',
    },
  })
);

export const Queue = () => {
  const playerContext = useContext(PlayerContext);
  const classes = useStyles();

  const [songIds, setSongIds] = useState<string[]>([]);

  const queue = playerContext?.queue;

  const [
    submitSongIds,
    { loading: queryLoading, data: queryData },
  ] = useLazyQuery<Pick<Query, 'songsById'>, QuerySongsByIdArgs>(
    consts.queries.song.SONGS_BY_ID_QUERY
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
      submitSongIds({ variables: { songIds } });
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
      const songsList = sortedSongs.map((song, index: number) => (
        <Fragment key={song.id}>
          <SongListItem
            onClick={() => playerContext?.playSongInQueue(song)}
            leftAccessory={
              <>
                <Flex alignItems="center" alignSelf="center">
                  <Typography variant="body1">{index + 1}</Typography>
                </Flex>
                <Spacing.BetweenParagraphs />
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    src={song.album.profileImageUrlSmall ?? undefined}
                  />
                </ListItemAvatar>
              </>
            }
            title={song.title}
            subtitle={song.artist.name}
            caption={song.label?.name}
            data={song}
          />
          {index < sortedSongs.length - 1 ? <Divider /> : null}
        </Fragment>
      ));

      return <List className={classes.list}>{songsList}</List>;
    } else {
      return null;
    }
  };

  return (
    <Container maxWidth={false}>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <Flex flexDirection="column">
          <Spacing.section.Minor />
          <Typography variant="h4">Queue</Typography>
          <Spacing.section.Minor />
          {renderSongs()}
        </Flex>
      )}
    </Container>
  );
};
