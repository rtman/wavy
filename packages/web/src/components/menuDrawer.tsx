import React, { useContext } from 'react';
import { ListItemLink } from 'components';
import {
  Divider,
  List,
  ListItem,
  // ListItemIcon,
  ListItemText,
} from '@material-ui/core';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import {
  makeStyles,
  // useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import * as consts from 'consts';
import { AuthContextState } from 'context';

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

        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text} onClick>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      <Divider />
      <List>
        {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <ListItem button={true} onClick={onClickLogout}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
};
