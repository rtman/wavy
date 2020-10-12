import { Flex, useTimer } from 'components';
import { TrackPositionSlider } from 'components';
import { PlayerContext } from 'context';
import moment from 'moment';
import React, { useContext, useState } from 'react';

import { TimeText } from './styles';

export const ProgressBar = () => {
  // const { audio, duration } = props;
  const playerContext = useContext(PlayerContext);
  const audio = playerContext?.currentSong?.audio;

  const [position, setPosition] = useState<number>(0);
  const [isSeeking, setIsSeeking] = useState<boolean>(false);

  const updatePosition = () => {
    if (!isSeeking && audio) {
      setPosition(audio.currentTime);
    }
  };

  useTimer(300, updatePosition);

  //   console.log('duration', duration);
  //   console.log('currentPosition', currentPosition);
  //   console.log('seekPosition', seekPosition);
  //   console.log('position', position);

  const onSeeking = (
    _event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    setIsSeeking(true);
    // setSeekPosition(event.target.value);
    // console.log('onSeeking - event.target', _event.target);

    //   console.log('onSeeking - value', value);

    // setSeekPosition(value as number);
    setPosition(value as number);
  };

  const onSeekCommitted = (
    _event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    setPosition(value as number);

    // console.log('onSeekCommitted - event.target.value', event.target.value);
    console.log('onSeekCommitted - value', value);
    setIsSeeking(false);
    if (audio) {
      audio.currentTime = position;
    }
  };

  //   console.log('isSeeking', isSeeking);
  const getFormattedTime = (value: number) => {
    const duration = moment.duration(value, 'seconds').as('millisecond');
    const formatted = moment.utc(duration).format('mm:ss');
    return formatted;
  };

  const duration = audio?.duration ?? 0;

  return (
    <Flex alignItems="center" fullWidth={true} style={{ margin: '0px 8px' }}>
      <TimeText>{getFormattedTime(position)}</TimeText>
      <TrackPositionSlider
        min={0}
        max={duration}
        value={position}
        onChange={onSeeking}
        onChangeCommitted={onSeekCommitted}
      />
      <TimeText>{getFormattedTime(duration)}</TimeText>
    </Flex>
  );
};
