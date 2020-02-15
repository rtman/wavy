import { AppContainer, BottomBar, Navigator, Player, TopBar } from 'components';
import React, { useEffect, useState } from 'react';
import './App.css';

interface PlayerContext {
  playAudio?: (song: Song) => void;
  currentSong: Song | null;
}

export const PlayerContext = React.createContext<PlayerContext>({ playAudio: undefined, currentSong: null });

export const App = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [playerAudio, setPlayerAudio] = useState<HTMLAudioElement | null>(null);

  const playAudio = (song: Song) => {
    setCurrentSong(song);
    const audio = new Audio(song.url);
    setPlayerAudio(audio);
    // audio.play();
  };

  return (
    <AppContainer>
      <PlayerContext.Provider value={{ playAudio, currentSong }}>
        <TopBar />
        <Navigator />
        <BottomBar>
          <Player audio={playerAudio ?? new Audio()} currentSong={currentSong} />
          {/* <audio
          preload="none"
          src={
            'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/B2_Exit%20Point.mp3?alt=media&token=b7dab356-8989-4251-a4a3-2b7302354595'
          }
          controls={true}
        /> */}
        </BottomBar>
      </PlayerContext.Provider>
    </AppContainer>
  );
};
