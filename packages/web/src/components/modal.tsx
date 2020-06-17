import React, { PropsWithChildren } from 'react';

import {
  Button,
  Card,
  Container,
  ContainerProps,
  Modal as MaterialUIModal,
  Theme,
  makeStyles,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

import * as spacing from './spacing';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    maxHeight: '100vh',
    maxWidth: '100%',
    padding: `${theme.spacing(2)}px`,
    overflow: 'auto',
  },
  card: {
    boxShadow: 'none',
    padding: `${theme.spacing(8)}px ${theme.spacing(6)}px`,
    position: 'relative',
  },
  container: {
    outline: 'none',
    padding: 0,
  },
  closeX: {
    position: 'absolute',
    right: 0,
    top: 0,
    minWidth: 0,

    height: '36px',
    width: '36px',
  },
}));

export const Modal = (
  props: PropsWithChildren<{
    maxWidth?: ContainerProps['maxWidth'];
    open?: boolean;
    onClose?: () => void;
  }>
) => {
  const classes = useStyles();

  return (
    <MaterialUIModal
      className={classes.root}
      open={props.open ?? true}
      onClose={props.onClose}
    >
      <Container
        className={classes.container}
        maxWidth={props.maxWidth ?? 'lg'}
      >
        <Card className={classes.card}>
          <Button
            className={classes.closeX}
            variant="text"
            onClick={props.onClose}
          >
            <Close />
          </Button>

          {props.children}

          <spacing.section.Minor />

          <div>
            <Button variant="contained" color="primary" onClick={props.onClose}>
              Close
            </Button>
          </div>
        </Card>
      </Container>
    </MaterialUIModal>
  );
};
