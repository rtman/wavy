import React, { FunctionComponent } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
// import MenuIcon from '@material-ui/icons/Menu';
// import AddIcon from '@material-ui/icons/Add';
// import SearchIcon from '@material-ui/icons/Search';
// import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - 240px)`,
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

export const BottomBar: FunctionComponent<any> = (props) => {
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
