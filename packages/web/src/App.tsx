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
import './App.css';

export const App = () => {
  const authContextState = useContext(AuthContextState);
  console.log('App, firebaseUser', authContextState?.firebaseUser);

  if (authContextState?.firebaseUser) {
    return (
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
    );
  } else {
    return (
      <AppContainer>
        <TopBar></TopBar>
        <Navigator />
      </AppContainer>
    );
  }
};
