import React, { useState } from 'react';
import { RowContainer } from 'components';
import { PlayArrow, Pause, SkipPrevious, SkipNext } from '@material-ui/icons';
// import { useMediaState } from 'components';
import { ProgressBar, usePlayState } from 'components';

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

  return (
    <RowContainer>
      <SkipPrevious />
      {currentState === 'playing' ? <Pause onClick={pause} /> : <PlayArrow onClick={play} />}
      <SkipNext />
      <ProgressBar audio={audio} duration={duration} />
    </RowContainer>
  );
};
