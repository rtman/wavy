import { AppContainer, BottomBar, Navigator, Player, TopBar } from 'components';
import React, { useContext } from 'react';
import { PlayerContext, PlayerProvider } from 'context';
import './App.css';

export const App = () => {
  const playerContext = useContext(PlayerContext);

  console.log('playerAudio', playerContext.playerAudio);
  console.log('currentSong', playerContext.currentSong);
  return (
    <AppContainer>
      <PlayerProvider>
        <TopBar />
        <Navigator />
        <BottomBar>
          <Player audio={playerContext.playerAudio ?? new Audio()} currentSong={playerContext.currentSong} />
        </BottomBar>
      </PlayerProvider>
    </AppContainer>
  );
};
