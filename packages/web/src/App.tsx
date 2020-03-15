import { AppContainer, BottomBar, Navigator, NavMenu, Player, TopBar } from 'components';
import React from 'react';
import { PlayerProvider, UserProvider } from 'context';
import './App.css';
import firebase from 'firebase';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

export const App = () => {
  const [user, initialising, error] = useAuthState(firebase.auth());

  console.log('initialising', initialising);

  if (user) {
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
