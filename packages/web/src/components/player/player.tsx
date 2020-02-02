import React, { useState } from 'react';
import { RowContainer } from 'components';
import { PlayArrow, Pause, SkipPrevious, SkipNext } from '@material-ui/icons';
// import { useMediaState } from 'components';
import { usePlayState } from 'components';

export const Player = (props: Player) => {
  const { audio } = props;

  const currentState = usePlayState(audio);

  const play = () => {
    audio.play();
  };

  const pause = () => {
    audio.pause();
  };

  console.log('currentState', currentState);

  return (
    <RowContainer>
      <SkipPrevious />
      {currentState === 'playing' ? <Pause onClick={pause} /> : <PlayArrow onClick={play} />}
      <SkipNext />
    </RowContainer>
  );
};
