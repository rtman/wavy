import { Typography } from '@material-ui/core';
import { Flex, useTimer } from 'components';
import { TrackPositionSlider } from 'components';
import { PlayerContext } from 'context';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { useContextSelector } from 'use-context-selector';

import { TimeText } from './styles';

interface ProgressBarProps {
  duration?: number;
  currentTime?: number;
  setCurrentTimeFromSeek: (value: number) => void;
  setIsSeeking: (value: boolean) => void;
  isSeeking: boolean;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const {
    currentTime,
    duration,
    isSeeking,
    setCurrentTimeFromSeek,
    setIsSeeking,
  } = props;

  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    if (!isSeeking) {
      setPosition(currentTime ?? 0);
    }
  });

  const onSeeking = (
    _event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    setIsSeeking(true);
    setPosition(value as number);
  };

  const onSeekCommitted = (
    _event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    setPosition(value as number);
    setCurrentTimeFromSeek(position);
    // prevents jumping of seek position when committing
    setTimeout(() => setIsSeeking(false), 10);

    console.log('onSeekCommitted - value', value);
  };

  const getFormattedTime = (value: number) => {
    if (isNaN(value)) {
      return '00:00';
    }

    const duration = moment.duration(value, 'seconds').as('millisecond');
    const formatted = moment.utc(duration).format('mm:ss');
    return formatted;
  };

  return (
    <Flex alignItems="center" fullWidth={true} style={{ margin: '0px 8px' }}>
      <Typography variant="caption">{getFormattedTime(position)}</Typography>
      <TrackPositionSlider
        min={0}
        max={duration}
        value={position}
        onChange={onSeeking}
        onChangeCommitted={onSeekCommitted}
      />
      <Typography variant="caption">
        {getFormattedTime(duration ?? 0)}
      </Typography>
    </Flex>
  );
};
