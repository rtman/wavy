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
      display: 'flex',
      flexDirection: props.flexDirection,
      flexWrap: props.flexWrap,
      justifyContent: props.justifyContent,
      alignItems: props.alignItems,
      alignSelf: props.alignSelf,
      width: props.fullWidth ? '100%' : undefined,
    },
  })();

export interface FlexProps {
  className?: string;
  flexDirection?: FlexDirectionProperty;
  flexWrap?: FlexWrapProperty;
  alignItems?: AlignItemsProperty;
  alignSelf?: AlignSelfProperty;
  justifyContent?: JustifyContentProperty;
  fullWidth?: boolean;
  style?: CSSProperties;
}

export const Flex = (props: PropsWithChildren<FlexProps>) => {
  const {
    className,
    flexDirection = 'row',
    flexWrap = 'nowrap',
    justifyContent = 'flex-start',
    alignItems = 'flex-start',
    alignSelf,
    fullWidth,
  } = props;

  const classes = useStyles({
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignSelf,
    fullWidth,
  });

  return (
    <div className={`${classes.root} ${className ?? ''}`} style={props.style}>
      {props.children}
    </div>
  );
};
