import { makeStyles } from '@material-ui/core';
import * as CSS from 'csstype';
import React, { PropsWithChildren } from 'react';

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
  alignItems?: CSS.Property.AlignItems;
  alignSelf?: CSS.Property.AlignSelf;
  className?: string;
  flexDirection?: CSS.Property.FlexDirection;
  flexWrap?: CSS.Property.FlexWrap;
  fullHeight?: boolean;
  fullWidth?: boolean;
  justifyContent?: CSS.Property.JustifyContent;
  style?: CSS.Properties;
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
