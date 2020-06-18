import { useMutation } from '@apollo/react-hooks';
import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons';
import { ProgressBar } from 'components';
import { RowContainer, StyledButton } from 'components';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import * as helpers from 'helpers';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SongArtist, SongInfoContainer, SongTitle } from './styles';

const minimumPlayRatio = 0.15;

export const Player = () => {
  const playerContext = useContext(PlayerContext);
  const [filteredMediaState, setFilteredMediaState] = useState<string>('');
  const [minimumPlayLength, setMinimumPlayLength] = useState<number>(0);
  const [isPlayCountUpdated, setIsPlayCountUpdated] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [submitUpdateSongPlayCount] = useMutation(
    consts.mutations.UPDATE_SONG_PLAY_COUNT,
    {
      onCompleted() {
        setIsPlayCountUpdated(true);
      },
    }
  );

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

  // TODO: Figure out how replays of the same song will work,
  // test if going to the next song will reset this (it should).
  useEffect(() => {
    if (filteredMediaState === 'playing' && !isPlaying) {
      setIsPlaying(true);
      if (!isPlayCountUpdated) {
        playCountTimerRef.current = setTimeout(() => {
          submitUpdateSongPlayCount({
            variables: { input: { id: currentSong?.id } },
          });
        }, minimumPlayLength * 1000);
      }
    } else if (filteredMediaState !== 'playing' && isPlaying) {
      setIsPlaying(false);
      clearTimeout(playCountTimerRef.current);
    }
  }, [
    filteredMediaState,
    currentSong,
    minimumPlayLength,
    submitUpdateSongPlayCount,
    isPlaying,
    isPlayCountUpdated,
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
