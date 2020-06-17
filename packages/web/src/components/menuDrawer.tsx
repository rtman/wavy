import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { ListItemLink } from 'components';
import React, { useContext } from 'react';

import * as consts from 'consts';
import { AuthContextState } from 'context';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
  })
);

export const MenuDrawer = () => {
  const classes = useStyles();
  // const theme = useTheme();
  const authContextState = useContext(AuthContextState);

  const onClickLogout = () => authContextState?.logout();

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItemLink to={consts.routes.HOME}>
          <ListItemText primary="Home" />
        </ListItemLink>
        <ListItemLink to={consts.routes.SEARCH}>
          <ListItemText primary="Search" />
        </ListItemLink>
        <ListItemLink to={consts.routes.QUEUE}>
          <ListItemText primary="Queue" />
        </ListItemLink>
        <ListItemLink to={consts.routes.PLAYLISTS}>
          <ListItemText primary="Playlists" />
        </ListItemLink>
        <ListItemLink to={consts.routes.FOLLOWING}>
          <ListItemText primary="Following" />
        </ListItemLink>

        <ListItemLink to={consts.routes.FAVOURITES}>
          <ListItemText primary="Favourites" />
        </ListItemLink>
      </List>
      <Divider />
      <List>
        <ListItem button={true} onClick={onClickLogout}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
};
