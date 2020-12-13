import { useMutation } from '@apollo/client';
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
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';

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
  const currentSong = useContextSelector(
    PlayerContext,
    (values) => values?.currentSong
  );
  const pause = useContextSelector(PlayerContext, (values) => values?.pause);
  const unPause = useContextSelector(
    PlayerContext,
    (values) => values?.unPause
  );
  const playQueue = useContextSelector(
    PlayerContext,
    (values) => values?.playQueue
  );
  const playNextSongInQueue = useContextSelector(
    PlayerContext,
    (values) => values?.playNextSongInQueue
  );
  const playPreviousSongInQueue = useContextSelector(
    PlayerContext,
    (values) => values?.playPreviousSongInQueue
  );

  const userContext = useContext(UserContext);
  const classes = useStyles();
  const playCountTimerRef = useRef<number>(0);

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

  const mediaState = helpers.hooks.useFilteredMediaState(
    currentSong?.audio ?? new Audio()
  );
  const duration = currentSong?.audio?.duration;

  useEffect(() => {
    if (duration) {
      setMinimumPlayLength(duration * minimumPlayRatio);
    }
  }, [duration]);

  // TODO: come up with a way to pause timer or restart timers with the
  // time left when a user pauses playback. Take timer start and then when paused
  // take difference, use that as new timer value. However need to monitor media states for pause -> seek or pause -> next track, pause -> play, becomes complex.
  useEffect(() => {
    console.log('*debug* player mediaState', mediaState);
    console.log('*debug* player userId', userId);
    console.log('*debug* player currentSong?.id', currentSong?.id);
    console.log('*debug* player geoLocation', geoLocation);
    if (mediaState === 'playing' && userId && currentSong?.id) {
      console.log('*debug* player playcount timerSet');
      playCountTimerRef.current = setTimeout(() => {
        console.log('*debug* player playcount callback');

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
    } else if (mediaState !== 'playing') {
      console.log(
        '*debug* player playCount - not playing playCountTimerRef',
        playCountTimerRef
      );

      if (playCountTimerRef.current) {
        console.log('*debug* player playCount - reset timer');
        clearTimeout(playCountTimerRef.current);
      }
    }
  }, [
    mediaState,
    currentSong,
    minimumPlayLength,
    submitUpdateSongPlayCount,
    userPlayedSong,
    userId,
    geoLocation,
  ]);

  const history = useHistory();
  const songTitle = currentSong?.title ?? '';
  const songArtist = currentSong?.artist?.name ?? '';

  const onClickArtist = () => {
    history.push(`${consts.routes.ARTIST}/${currentSong?.artist.id}`);
  };

  const onClickSong = () => {
    history.push(`${consts.routes.ALBUM}/${currentSong?.albumId}`);
  };

  const onClickPlay = useCallback(() => {
    console.log('*debug player onClickPlay - mediaState', mediaState);
    if (mediaState !== 'pause') {
      if (playQueue) {
        playQueue();
      }
    } else {
      if (unPause) {
        unPause();
      }
    }
  }, [mediaState, playQueue, unPause]);

  useEffect(() => {
    if (mediaState === 'ended' && playNextSongInQueue) {
      playNextSongInQueue();
    }
  }, [mediaState, playNextSongInQueue]);

  console.log('*debug* player');
  console.log('*debug* player mediaState', mediaState);

  return (
    <Flex alignItems="center" fullWidth={true}>
      <StyledButton onClick={playPreviousSongInQueue}>
        <SkipPrevious />
      </StyledButton>
      <StyledButton>
        {mediaState === 'playing' ? (
          <Pause onClick={pause} />
        ) : (
          <PlayArrow onClick={onClickPlay} />
        )}
      </StyledButton>
      <StyledButton onClick={playNextSongInQueue}>
        <SkipNext />
      </StyledButton>
      <ProgressBar />
      <Flex
        flexDirection="column"
        // unset makes text truncation happen
        style={{ alignItems: 'unset', maxWidth: '20%' }}
      >
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
