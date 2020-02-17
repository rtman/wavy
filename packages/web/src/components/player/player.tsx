import React, { useState } from 'react';
import { RowContainer } from 'components';
import { PlayArrow, Pause, SkipPrevious, SkipNext, TextFields } from '@material-ui/icons';
// import { useMediaState } from 'components';
import { ProgressBar, usePlayState } from 'components';
import { ColumnContainer } from 'components/columnContainer';
import { SongArtist, SongTitle } from './styles';

export const Player = (props: Player) => {
  const { audio, currentSong } = props;

  const currentState = usePlayState(audio);

  const play = () => {
    audio.play();
  };

  const pause = () => {
    audio.pause();
  };

  console.log('currentState', currentState);

  const duration = currentSong?.duration ?? 0;
  const songTitle = currentSong?.title ?? '';
  const songArtist = currentSong?.artist_name ?? '';

  return (
    <RowContainer width={'100%'}>
      <SkipPrevious />
      {currentState === 'playing' ? <Pause onClick={pause} /> : <PlayArrow onClick={play} />}
      <SkipNext />
      <ProgressBar audio={audio} duration={duration} />
      <ColumnContainer>
        <SongTitle>{songTitle}</SongTitle>
        <SongArtist>{songArtist}</SongArtist>
      </ColumnContainer>
    </RowContainer>
  );
};
