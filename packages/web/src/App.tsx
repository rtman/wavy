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
import { MuiThemeProvider } from '@material-ui/core';
import { makeTheme } from './theme';

import './App.css';

export const App = () => {
  const authContextState = useContext(AuthContextState);
  const theme = makeTheme();
  console.log('App, firebaseUser', authContextState?.firebaseUser);

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
        <AppContainer>
          <TopBar></TopBar>
          <Navigator />
        </AppContainer>
      </MuiThemeProvider>
    );
  }
};
