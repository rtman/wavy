import React, { useEffect, useState } from 'react';
import { RowContainer, useTimer } from 'components';
import { Slider } from '@material-ui/core';

export const ProgressBar = (props: ProgressBar) => {
  const { audio, duration } = props;
  const [seekPosition, setSeekPosition] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const [isSeeking, setIsSeeking] = useState<boolean>(false);

  const updatePosition = () => {
    if (isSeeking) {
      setPosition(seekPosition);
    } else {
      setPosition(audio.currentTime);
    }
  };

  useTimer(500, updatePosition);

  console.log('duration', duration);
  //   console.log('currentPosition', currentPosition);
  //   console.log('seekPosition', seekPosition);
  //   console.log('position', position);

  const onSeeking = (_event: React.ChangeEvent<{}>, value: number | number[]) => {
    setIsSeeking(true);
    // setSeekPosition(event.target.value);
    // console.log('onSeeking - event.target.value', event.target.value);
    if (typeof value === 'number') {
      setSeekPosition(value);
    }
  };

  const onSeekCommitted = (event: React.ChangeEvent<{}>, value: number | number[]) => {
    setIsSeeking(false);
    audio.currentTime = seekPosition;
    // console.log('onSeekCommitted - event.target.value', event.target.value);
    console.log('onSeekCommitted - value', value);
  };

  return (
    <RowContainer>
      <Slider min={0} max={duration} value={position} onChange={onSeeking} onChangeCommitted={onSeekCommitted} />
    </RowContainer>
  );
};
