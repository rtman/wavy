import AppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import * as consts from 'consts';
import React, { FunctionComponent } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${consts.drawer.width}px)`,
        marginLeft: 240,
      },
      top: 'auto',
      bottom: 0,
      backgroundColor: 'white',
    },
    grow: {
      flexGrow: 1,
    },
  })
);

export const BottomBar: FunctionComponent = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <div className={classes.grow} />
        {props.children}
      </Toolbar>
    </AppBar>
  );
};
