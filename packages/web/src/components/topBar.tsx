import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  createStyles,
  fade,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Flex, MenuDrawer } from 'components';
import * as consts from 'consts';
import { SearchContext } from 'context';
import React, { FunctionComponent, useContext } from 'react';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    appBarTitle: {
      width: '100%',
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: consts.drawer.width,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${consts.drawer.width}px)`,
        marginLeft: consts.drawer.width,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: consts.drawer.width,
    },
    content: {
      // height: '100%',
      flexGrow: 1,
      // padding: theme.spacing(3),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '0ch',
        '&:focus': {
          width: '20ch',
        },
      },
      [theme.breakpoints.down('sm')]: {
        width: '0ch',
        '&:focus': {
          width: '16ch',
        },
      },
    },
  })
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export const TopBar: FunctionComponent<Props> = (props) => {
  const { window } = props;
  const location = useLocation();
  const classes = useStyles();
  const searchContext = useContext(SearchContext);
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div
      className={classes.root}
      // height: '100%' required for autosizer in homeFeed.tsx
      style={{ height: '100%' }}
    >
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar classes={{ root: classes.root }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap={true}
            classes={{ root: classes.appBarTitle }}
          >
            Wavy
          </Typography>
          <Flex alignItems="center">
            {location.pathname.includes(consts.routes.SEARCH) ? null : (
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  value={searchContext?.searchText}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={searchContext?.onChangeSearchText}
                  onKeyDown={searchContext?.onKeyDownSearchBar}
                />
              </div>
            )}
            <IconButton aria-label="account" color="inherit">
              <AccountCircle />
            </IconButton>
          </Flex>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp={true} implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <MenuDrawer />
          </Drawer>
        </Hidden>
        <Hidden smDown={true} implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <MenuDrawer />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {/* adds spacing for top bar */}
        <div className={classes.toolbar} />
        {props.children}
        {/* adds spacing for bottom bar */}
        <div className={classes.toolbar} />
      </main>
    </div>
  );
};
