import { AppContainer, BottomBar, Navigator, NavMenu, Player, TopBar } from 'components';
import React, { useContext } from 'react';
import { PlayerContext, PlayerProvider } from 'context';
import './App.css';

export const App = () => {
  return (
    <AppContainer>
      <PlayerProvider>
        <TopBar>
          <NavMenu />
        </TopBar>
        <Navigator />
        <BottomBar>
          <Player />
        </BottomBar>
      </PlayerProvider>
    </AppContainer>
  );
};
