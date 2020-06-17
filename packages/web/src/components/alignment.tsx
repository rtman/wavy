import { makeStyles } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';

const getStyles = (props: { align: 'left' | 'center' | 'right' }) =>
  makeStyles({
    root: {
      textAlign: props.align,
    },
    left: {
      display: 'inline-block',
      textAlign: 'left',
    },
  });

const useCenterStyles = getStyles({ align: 'center' });
const useRightStyles = getStyles({ align: 'right' });

export const Center = (props: PropsWithChildren<{}>) => {
  const classes = useCenterStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>{props.children}</div>
    </div>
  );
};

export const Right = (props: PropsWithChildren<{}>) => {
  const classes = useRightStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>{props.children}</div>
    </div>
  );
};
