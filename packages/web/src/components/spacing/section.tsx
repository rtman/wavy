import React from 'react';

import { makeStyles, Theme } from '@material-ui/core';

const getStyles = (props: { spacingMult: number }) =>
  makeStyles((theme: Theme) => ({
    root: {
      display: 'inline-block',
      width: theme.spacing(props.spacingMult),
      height: theme.spacing(props.spacingMult),
    },
  }));

const useMajorStyles = getStyles({ spacingMult: 6 });
const useMinorStyles = getStyles({ spacingMult: 2 });

export const Major = () => <span className={useMajorStyles().root} />;

export const Minor = () => <span className={useMinorStyles().root} />;
