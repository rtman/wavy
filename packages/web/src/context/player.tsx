import React, { createContext, useState } from 'react';

interface PlayerContext {
  playAudio?: (song: Song) => void;
  currentSong: Song | null;
  playerAudio: HTMLAudioElement | null;
}

export const PlayerContext = createContext<PlayerContext>({ playAudio: undefined, currentSong: null, playerAudio: null });

export const PlayerProvider = ({ children }: any) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [playerAudio, setPlayerAudio] = useState<HTMLAudioElement | null>(null);

  const playAudio = (song: Song) => {
    setCurrentSong(song);
    const audio = new Audio(song.url);
    setPlayerAudio(audio);
    // audio.play();
  };

  return <PlayerContext.Provider value={{ playAudio, currentSong, playerAudio }}>{children}</PlayerContext.Provider>;
};
