import { useMutation } from '@apollo/react-hooks';
import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons';
import { ProgressBar } from 'components';
import { RowContainer, StyledButton } from 'components';
import * as consts from 'consts';
import { PlayerContext, UserContext } from 'context';
import * as helpers from 'helpers';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Mutation,
  MutationUpdateSongPlayCountArgs,
  MutationUserPlayedSongArgs,
} from 'types';

import { SongArtist, SongInfoContainer, SongTitle } from './styles';

const minimumPlayRatio = 0.2;

export const Player = () => {
  const playerContext = useContext(PlayerContext);
  const userContext = useContext(UserContext);
  const [filteredMediaState, setFilteredMediaState] = useState<string>('');
  const [minimumPlayLength, setMinimumPlayLength] = useState<number>(0);

  const { user, geoLocation } = userContext ?? {};
  const { id: userId } = user ?? {};

  const [submitUpdateSongPlayCount] = useMutation<
    Pick<Mutation, 'updateSongPlayCount'>,
    MutationUpdateSongPlayCountArgs
  >(consts.mutations.UPDATE_SONG_PLAY_COUNT, {
    onCompleted() {
      console.log('submitUpdatedSongPlayCount onComplete');
    },
  });

  const [userPlayedSong] = useMutation<
    Pick<Mutation, 'userPlayedSong'>,
    MutationUserPlayedSongArgs
  >(consts.mutations.USER_PLAYED_SONG, {
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
          variables: { input: { id: currentSong?.id } },
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
  // console.log('playerContext currentSong', currentSong);
  const songTitle = currentSong?.title ?? '';
  const songArtist = currentSong?.artist?.name ?? '';

  const onClickArtist = () => {
    history.push(`${consts.routes.ARTIST}/${currentSong?.artist.id}`);
  };

  const onClickSong = () => {
    return null;
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
    <RowContainer width={'100%'}>
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
      <SongInfoContainer>
        <SongTitle onClick={onClickSong}>{songTitle}</SongTitle>
        <SongArtist onClick={onClickArtist}>{songArtist}</SongArtist>
      </SongInfoContainer>
    </RowContainer>
  );
};
