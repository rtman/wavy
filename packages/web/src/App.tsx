import './App.css';

import { CircularProgress, Grid, MuiThemeProvider } from '@material-ui/core';
import { BottomBar, Navigator, TopBar } from 'components';
import {
  AuthContext,
  CreateAlbumProvider,
  PlayerProvider,
  SearchProvider,
} from 'context';
import { SnackbarProvider } from 'notistack';
import React, { useContext } from 'react';

import { makeTheme } from './theme';

export const App = () => {
  const authContext = useContext(AuthContext);
  const theme = makeTheme();

  const { firebaseInitialising, signedIn, loading } = authContext ?? {};

  // Loading App
  if (firebaseInitialising || loading) {
    return (
      <Grid
        container={true}
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item={true} xs={3}>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }

  // Signed In
  if (signedIn) {
    return (
      <MuiThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <PlayerProvider>
            <SearchProvider>
              <TopBar>
                <CreateAlbumProvider>
                  <Navigator />
                </CreateAlbumProvider>
              </TopBar>
            </SearchProvider>
            <BottomBar />
          </PlayerProvider>
        </SnackbarProvider>
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
