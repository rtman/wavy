import React, { useEffect, useState } from 'react';
import { RowContainer, useTimer } from 'components';
import { Slider } from '@material-ui/core';
import moment from 'moment';

export const ProgressBar = (props: ProgressBar) => {
  const { audio, duration } = props;
  const [seekPosition, setSeekPosition] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const [isSeeking, setIsSeeking] = useState<boolean>(false);

  const updatePosition = () => {
    if (!isSeeking) {
      setPosition(audio.currentTime);
    }
  };

  useTimer(300, updatePosition);

  //   console.log('duration', duration);
  //   console.log('currentPosition', currentPosition);
  //   console.log('seekPosition', seekPosition);
  //   console.log('position', position);

  const onSeeking = (_event: React.ChangeEvent<{}>, value: number | number[]) => {
    setIsSeeking(true);
    // setSeekPosition(event.target.value);
    // console.log('onSeeking - event.target', _event.target);

    //   console.log('onSeeking - value', value);

    // setSeekPosition(value as number);
    setPosition(value as number);
  };

  const onSeekCommitted = (event: React.ChangeEvent<{}>, value: number | number[]) => {
    setPosition(value as number);

    // console.log('onSeekCommitted - event.target.value', event.target.value);
    console.log('onSeekCommitted - value', value);
    setIsSeeking(false);
    audio.currentTime = position;
  };

  //   console.log('isSeeking', isSeeking);
  const getFormattedTime = (value: number) => {
    const duration = moment.duration(value, 'seconds').as('millisecond');
    const formatted = moment.utc(duration).format('mm:ss');
    return formatted;
  };

  return (
    <RowContainer width="100%" margin="0px 8px">
      <div>{getFormattedTime(position)}</div>
      <Slider min={0} max={duration} value={position} onChange={onSeeking} onChangeCommitted={onSeekCommitted} />
      <div>{getFormattedTime(duration)}</div>
    </RowContainer>
  );
};
