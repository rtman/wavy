import {
  AppContainer,
  BottomBar,
  Navigator,
  NavMenu,
  Player,
  TopBar,
} from 'components';
import React, { useContext } from 'react';
import { AuthContextState, PlayerProvider, UserProvider } from 'context';
import { CircularProgress, Grid, MuiThemeProvider } from '@material-ui/core';
import { makeTheme } from './theme';

import './App.css';

export const App = () => {
  const authContextState = useContext(AuthContextState);
  const theme = makeTheme();
  console.log('App, firebaseUser', authContextState?.firebaseUser);
  console.log('App, initialising', authContextState?.initialising);

  if (authContextState?.initialising) {
    return (
      <Grid
        container={true}
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }

  if (authContextState?.firebaseUser) {
    return (
      <MuiThemeProvider theme={theme}>
        <AppContainer>
          <PlayerProvider>
            <TopBar>
              <NavMenu />
            </TopBar>
            <UserProvider>
              <Navigator />
            </UserProvider>
            <BottomBar>
              <Player />
            </BottomBar>
          </PlayerProvider>
        </AppContainer>
      </MuiThemeProvider>
    );
  } else {
    return (
      <MuiThemeProvider theme={theme}>
        <Navigator />
      </MuiThemeProvider>
    );
  }
};
