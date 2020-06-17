import { makeStyles } from '@material-ui/core';
import {
  AlignItemsProperty,
  FlexDirectionProperty,
  FlexWrapProperty,
  JustifyContentProperty,
} from 'csstype';
import React, { PropsWithChildren } from 'react';

const useStyles = (props: FlexProps) =>
  makeStyles({
    root: {
      display: 'flex',
      flexDirection: props.flexDirection,
      flexWrap: props.flexWrap,
      justifyContent: props.justifyContent,
      alignItems: props.alignItems,
    },
  })();

export interface FlexProps {
  className?: string;
  flexDirection?: FlexDirectionProperty;
  flexWrap?: FlexWrapProperty;
  alignItems?: AlignItemsProperty;
  justifyContent?: JustifyContentProperty;
}

export const Flex = (props: PropsWithChildren<FlexProps>) => {
  const {
    className,
    flexDirection = 'row',
    flexWrap = 'nowrap',
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
  } = props;

  const classes = useStyles({
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
  });

  return (
    <div className={`${classes.root} ${className ?? ''}`}>{props.children}</div>
  );
};
