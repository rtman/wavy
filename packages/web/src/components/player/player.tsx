import { useMutation } from '@apollo/react-hooks';
import { createStyles, makeStyles, Typography } from '@material-ui/core';
import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons';
import {
  Mutation,
  MutationUpdateSongPlayCountArgs,
  MutationUserPlayedSongArgs,
} from 'commonTypes';
import { ProgressBar } from 'components';
import { Flex, StyledButton } from 'components';
import * as consts from 'consts';
import { PlayerContext, UserContext } from 'context';
import * as helpers from 'helpers';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() =>
  createStyles({
    clickableText: {
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  })
);

const minimumPlayRatio = 0.2;

export const Player = () => {
  const playerContext = useContext(PlayerContext);
  const userContext = useContext(UserContext);
  const classes = useStyles();

  const [filteredMediaState, setFilteredMediaState] = useState<string>('');
  const [minimumPlayLength, setMinimumPlayLength] = useState<number>(0);

  const { user, geoLocation } = userContext ?? {};
  const { id: userId } = user ?? {};

  const [submitUpdateSongPlayCount] = useMutation<
    Pick<Mutation, 'updateSongPlayCount'>,
    MutationUpdateSongPlayCountArgs
  >(consts.mutations.song.UPDATE_SONG_PLAY_COUNT, {
    onCompleted() {
      console.log('submitUpdatedSongPlayCount onComplete');
    },
  });

  const [userPlayedSong] = useMutation<
    Pick<Mutation, 'userPlayedSong'>,
    MutationUserPlayedSongArgs
  >(consts.mutations.song.USER_PLAYED_SONG, {
    onCompleted() {
      console.log('userPlayedSong onComplete');
    },
  });

  const currentSong = playerContext?.currentSong;
  const allMediaStates = helpers.hooks.useMediaState(
    currentSong?.audio ?? new Audio()
  );
  const duration = currentSong?.audio?.duration;
  const playCountTimerRef = useRef<number>(0);

  useEffect(() => {
    if (duration) {
      setMinimumPlayLength(duration * minimumPlayRatio);
    }
  }, [duration]);

  // TODO: come up with a way to pause timer or restart timers with the
  // time left when a user pauses playback. Take timer start and then when paused
  // take difference, use that as new timer value. However need to monitor media states for pause -> seek or pause -> next track, pause -> play, becomes complex.
  useEffect(() => {
    console.log('*debug* filteredMediaState', filteredMediaState);
    console.log('*debug* userId', userId);
    console.log('*debug* currentSong?.id', currentSong?.id);
    console.log('*debug* geoLocation', geoLocation);
    if (filteredMediaState === 'playing' && userId && currentSong?.id) {
      console.log('*debug* playcount timerSet');
      playCountTimerRef.current = setTimeout(() => {
        console.log('*debug* playcount callback');

        submitUpdateSongPlayCount({
          variables: { input: { songId: currentSong?.id } },
        });

        userPlayedSong({
          variables: {
            input: {
              userId,
              songId: currentSong?.id,
              city: geoLocation?.city,
              country: geoLocation?.country,
              lat: geoLocation?.lat,
              lng: geoLocation?.lng,
            },
          },
        });
      }, minimumPlayLength * 1000);
    } else if (filteredMediaState !== 'playing') {
      console.log(
        '*debug* playCount - not playing playCountTimerRef',
        playCountTimerRef
      );

      if (playCountTimerRef.current) {
        console.log('*debug* playCount - reset timer');
        clearTimeout(playCountTimerRef.current);
      }
    }
  }, [
    filteredMediaState,
    currentSong,
    minimumPlayLength,
    submitUpdateSongPlayCount,
    userPlayedSong,
    userId,
    geoLocation,
  ]);

  useEffect(() => {
    setFilteredMediaState(
      helpers.filterMediaStates(allMediaStates, filteredMediaState)
    );
  }, [allMediaStates, filteredMediaState]);

  const history = useHistory();
  const songTitle = currentSong?.title ?? '';
  const songArtist = currentSong?.artist?.name ?? '';

  const onClickArtist = () => {
    history.push(`${consts.routes.ARTIST}/${currentSong?.artist.id}`);
  };

  const onClickSong = () => {
    history.push(`${consts.routes.ALBUM}/${currentSong?.albumId}`);
  };

  const onClickPlay = () => {
    if (filteredMediaState !== 'pause') {
      playerContext?.playQueue();
    } else {
      playerContext?.unPause();
    }
  };

  useEffect(() => {
    if (filteredMediaState === 'ended') {
      playerContext?.playNextSongInQueue();
    }
    // TODO: Re enable and fix deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredMediaState]);
  // }, [filteredMediaState, playerContext]);

  return (
    <Flex alignItems="center" fullWidth={true}>
      <StyledButton onClick={playerContext?.playPreviousSongInQueue}>
        <SkipPrevious />
      </StyledButton>
      <StyledButton>
        {filteredMediaState === 'playing' ? (
          <Pause onClick={playerContext?.pause} />
        ) : (
          <PlayArrow onClick={onClickPlay} />
        )}
      </StyledButton>
      <StyledButton onClick={playerContext?.playNextSongInQueue}>
        <SkipNext />
      </StyledButton>
      <ProgressBar />
      <Flex flexDirection="column">
        <Typography
          className={classes.clickableText}
          noWrap={true}
          variant="caption"
          onClick={onClickSong}
        >
          {songTitle}
        </Typography>
        <Typography
          className={classes.clickableText}
          noWrap={true}
          variant="overline"
          onClick={onClickArtist}
        >
          {songArtist}
        </Typography>
      </Flex>
    </Flex>
  );
};
