import { makeStyles } from '@material-ui/core';
import {
  AlignItemsProperty,
  AlignSelfProperty,
  FlexDirectionProperty,
  FlexWrapProperty,
  JustifyContentProperty,
} from 'csstype';
import React, { CSSProperties, PropsWithChildren } from 'react';

const useStyles = (props: FlexProps) =>
  makeStyles({
    root: {
      alignItems: props.alignItems,
      alignSelf: props.alignSelf,
      display: 'flex',
      flexDirection: props.flexDirection,
      flexWrap: props.flexWrap,
      height: props.fullHeight ? '100%' : undefined,
      justifyContent: props.justifyContent,
      width: props.fullWidth ? '100%' : undefined,
    },
  })();

export interface FlexProps {
  alignItems?: AlignItemsProperty;
  alignSelf?: AlignSelfProperty;
  className?: string;
  flexDirection?: FlexDirectionProperty;
  flexWrap?: FlexWrapProperty;
  fullHeight?: boolean;
  fullWidth?: boolean;
  justifyContent?: JustifyContentProperty;
  style?: CSSProperties;
}

export const Flex = (props: PropsWithChildren<FlexProps>) => {
  const {
    alignItems = 'flex-start',
    alignSelf,
    className,
    flexDirection = 'row',
    flexWrap = 'nowrap',
    fullHeight,
    fullWidth,
    justifyContent = 'flex-start',
  } = props;

  const classes = useStyles({
    alignItems,
    alignSelf,
    flexDirection,
    flexWrap,
    fullHeight,
    fullWidth,
    justifyContent,
  });

  return (
    <div className={`${classes.root} ${className ?? ''}`} style={props.style}>
      {props.children}
    </div>
  );
};
