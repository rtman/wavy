import { useMutation } from '@apollo/client';
import {
  createStyles,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons';
import {
  Mutation,
  MutationUpdateSongPlayCountArgs,
  MutationUserPlayedSongArgs,
  Song,
} from 'commonTypes';
import { ProgressBar } from 'components';
import { Flex, StyledButton } from 'components';
import * as consts from 'consts';
import { PlayerContext, UserContext } from 'context';
import * as helpers from 'helpers';
import React, {
  EventHandler,
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

interface PlayerProps {
  // src?: string;
  currentSong?: Song;
}

const minimumPlayRatio = 0.2;
const timeUpdateInterval = 50;

let audio = new Audio();

export const Player = (props: PlayerProps) => {
  const { currentSong } = props;

  const [isSeeking, setIsSeeking] = useState<boolean>(false);
  // const pause = useContextSelector(PlayerContext, (values) => values?.pause);
  // const unPause = useContextSelector(
  //   PlayerContext,
  //   (values) => values?.unPause
  // );
  // const playQueue = useContextSelector(
  //   PlayerContext,
  //   (values) => values?.playQueue
  // );
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
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

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

  useEffect(() => {
    if (currentSong) {
      console.log('*debug* player currentSong', currentSong);
      // audio.pause();
      audio.src = currentSong.urlHigh;
      audio.play();
    }
  }, [currentSong]);

  useEffect(() => {
    if (currentSong) {
      console.log('*debug* player currentSong', currentSong);
    }
  }, [currentSong]);

  const mediaState = helpers.hooks.useFilteredMediaState(audio);

  useEffect(() => {
    if (duration) {
      setMinimumPlayLength(duration * minimumPlayRatio);
    }
  }, [duration]);

  // TODO: come up with a way to pause timer or restart timers with the
  // time left when a user pauses playback. Take timer start and then when paused
  // take difference, use that as new timer value. However need to monitor media states for pause -> seek or pause -> next track, pause -> play, becomes complex.
  useEffect(() => {
    // console.log('*debug* player mediaState', mediaState);
    // console.log('*debug* player userId', userId);
    // console.log('*debug* player currentSong?.id', currentSong?.id);
    // console.log('*debug* player geoLocation', geoLocation);
    if (mediaState === 'playing' && userId && currentSong) {
      // console.log('*debug* player playcount timerSet');
      playCountTimerRef.current = setTimeout(() => {
        // console.log('*debug* player playcount callback');

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
      // console.log(
      //   '*debug* player playCount - not playing playCountTimerRef',
      //   playCountTimerRef
      // );

      if (playCountTimerRef.current) {
        // console.log('*debug* player playCount - reset timer');
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
    audio.play();
  }, []);

  const onClickPause = useCallback(() => {
    audio.pause();
  }, []);

  useEffect(() => {
    if (mediaState === 'ended' && playNextSongInQueue) {
      playNextSongInQueue();
    }
  }, [mediaState, playNextSongInQueue]);

  const setCurrentTimeFromSeek = (value: number) => {
    audio.currentTime = value;
  };

  audio.ondurationchange = () => {
    // const audio = event.target as HTMLAudioElement;
    // if (audio) {
    setDuration(audio.duration);
    // }
  };

  audio.ontimeupdate = throttle(() => {
    // const audio = event.target as HTMLAudioElement;
    // if (audio) {
    console.log(
      '*debug* player ontimeupdate timeUpdateInterval',
      timeUpdateInterval
    );
    if (!isSeeking) {
      setCurrentTime(audio.currentTime);
    }
    // }
  }, timeUpdateInterval);

  return (
    <Flex alignItems="center" fullWidth={true}>
      <IconButton size="small" onClick={playPreviousSongInQueue}>
        <SkipPrevious />
      </IconButton>

      {mediaState === 'playing' ? (
        <IconButton size="small" onClick={onClickPause}>
          <Pause />
        </IconButton>
      ) : (
        <IconButton size="small" onClick={onClickPlay}>
          <PlayArrow />
        </IconButton>
      )}

      <IconButton size="small" onClick={playNextSongInQueue}>
        <SkipNext />
      </IconButton>
      <ProgressBar
        duration={duration}
        currentTime={currentTime}
        setCurrentTimeFromSeek={setCurrentTimeFromSeek}
        setIsSeeking={setIsSeeking}
        isSeeking={isSeeking}
      />
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

// Helpers

type throttleFunction<T> = (arg: T) => void;

function throttle<K>(
  func: throttleFunction<K>,
  limit: number
): throttleFunction<K> {
  let inThrottle = false;
  return (arg) => {
    if (!inThrottle) {
      func(arg);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
