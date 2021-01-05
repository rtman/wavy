import { useMutation } from '@apollo/client';
import {
  createStyles,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons';
import { ProgressBar } from 'components';
import { Flex } from 'components';
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
import {
  Mutation,
  MutationUpdateSongPlayCountArgs,
  MutationUserPlayedSongArgs,
  Song,
} from 'types';
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
  currentSong?: Song;
}

const minimumPlayRatio = 0.2;
const timeUpdateInterval = 100;
const skipBackThresholdS = 5;

const audio = new Audio();

export const Player = (props: PlayerProps) => {
  const { currentSong } = props;

  const [isSeeking, setIsSeeking] = useState<boolean>(false);

  const userInitiatedPlayback = useContextSelector(
    PlayerContext,
    (values) => values?.userInitiatedPlayback
  );

  const setUserInitiatedPlayback = useContextSelector(
    PlayerContext,
    (values) => values?.setUserInitiatedPlayback
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

  const mediaState = helpers.hooks.useFilteredMediaState(audio);

  useEffect(() => {
    if (currentSong && userInitiatedPlayback) {
      audio.src = currentSong.urlHigh;
      // TODO: This may need an await to function properly
      void audio.play();
    }
  }, [currentSong, userInitiatedPlayback]);

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

        // TODO: This may need an await to function properly
        void submitUpdateSongPlayCount({
          variables: { input: { songId: currentSong?.id } },
        });

        // TODO: This may need an await to function properly
        void userPlayedSong({
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

  const onClickPlay = useCallback(async () => {
    setUserInitiatedPlayback?.(true);
    await audio.play();
    // TODO: test fixing this
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickPause = useCallback(() => {
    audio.pause();
  }, []);

  useEffect(() => {
    if (mediaState === 'ended' && playNextSongInQueue) {
      playNextSongInQueue();
    }
  }, [mediaState, playNextSongInQueue]);

  const setCurrentTimeFromSeek = useCallback((value: number) => {
    audio.currentTime = value;
  }, []);

  const onClickPlayPrevious = () => {
    if (currentTime < skipBackThresholdS) {
      playPreviousSongInQueue?.();
    } else {
      setCurrentTimeFromSeek(0);
    }
  };

  audio.ondurationchange = () => {
    setDuration(audio.duration);
  };

  let timeout: ReturnType<typeof setTimeout> | undefined;

  audio.ontimeupdate = () => {
    if (timeout) {
      return;
    }

    timeout = setTimeout(() => {
      if (!isSeeking) {
        setCurrentTime(audio.currentTime);
      }
      timeout = undefined;
    }, timeUpdateInterval);
  };

  return (
    <Flex alignItems="center" fullWidth={true}>
      <IconButton size="small" onClick={onClickPlayPrevious}>
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
