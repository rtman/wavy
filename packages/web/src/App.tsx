import './App.css';

import { CircularProgress, Grid, MuiThemeProvider } from '@material-ui/core';
import { AppContainer, BottomBar, Navigator, Player, TopBar } from 'components';
import {
  AuthContextState,
  PlayerProvider,
  SearchProvider,
  UserProvider,
} from 'context';
import React, { useContext } from 'react';

import { makeTheme } from './theme';

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
            <SearchProvider>
              <TopBar>
                <UserProvider>
                  <Navigator />
                </UserProvider>
              </TopBar>
              <BottomBar>
                <Player />
              </BottomBar>
            </SearchProvider>
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
