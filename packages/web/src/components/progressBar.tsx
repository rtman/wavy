import { Slider, Typography } from '@material-ui/core';
import { Flex, Spacing } from 'components';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

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
  }, [currentTime]);

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
    setIsSeeking(false);
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
      <Spacing.section.Minor />
      <Slider
        min={0}
        max={duration}
        value={position}
        onChange={onSeeking}
        onChangeCommitted={onSeekCommitted}
      />
      <Spacing.section.Minor />
      <Typography variant="caption">
        {getFormattedTime(duration ?? 0)}
      </Typography>
    </Flex>
  );
};
