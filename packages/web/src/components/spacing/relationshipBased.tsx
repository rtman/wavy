import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const getStyles = (props: { spacingMult: number }) =>
  makeStyles((theme: Theme) => ({
    root: {
      display: 'inline-block',
      width: theme.spacing(props.spacingMult),
      height: theme.spacing(props.spacingMult),
    },
  }));

const useBetweenComponentsStyles = getStyles({ spacingMult: 1 });

export const BetweenComponents = () => (
  <span className={useBetweenComponentsStyles().root} />
);

const useBetweenParagraphsStyles = getStyles({ spacingMult: 4 });

export const BetweenParagraphs = () => (
  <span className={useBetweenParagraphsStyles().root} />
);

const useFromScreenEdgesStyles = getStyles({ spacingMult: 1.5 });

export const FromScreenEdges = () => (
  <span className={useFromScreenEdgesStyles().root} />
);
