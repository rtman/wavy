import './App.css';

import { CircularProgress, Grid, MuiThemeProvider } from '@material-ui/core';
import { AppContainer, BottomBar, Navigator, Player, TopBar } from 'components';
import {
  AuthContext,
  PlayerProvider,
  SearchProvider,
  UserProvider,
} from 'context';
import { SnackbarProvider } from 'notistack';
import React, { useContext } from 'react';

import { makeTheme } from './theme';

export const App = () => {
  const authContext = useContext(AuthContext);
  const theme = makeTheme();

  const { initialising, signedIn, loading } = authContext ?? {};

  console.log('*debug* app authContext', authContext);

  // Loading App
  if (initialising || loading) {
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

  // Signed In
  if (signedIn) {
    return (
      <MuiThemeProvider theme={theme}>
        <AppContainer>
          <SnackbarProvider maxSnack={3}>
            <PlayerProvider>
              <SearchProvider>
                <TopBar>
                  <UserProvider>
                    <Navigator />
                  </UserProvider>
                </TopBar>
                <BottomBar>
                  <UserProvider>
                    <Player />
                  </UserProvider>
                </BottomBar>
              </SearchProvider>
            </PlayerProvider>
          </SnackbarProvider>
        </AppContainer>
      </MuiThemeProvider>
    );
  } else {
    // Sign up / log in
    return (
      <MuiThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <Navigator />
        </SnackbarProvider>
      </MuiThemeProvider>
    );
  }
};
