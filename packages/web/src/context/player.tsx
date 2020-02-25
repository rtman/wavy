import React, { createContext, useEffect, useState } from 'react';
import * as helpers from 'helpers';

interface PlayerContext {
  playAudio?: (song: Song) => void;
  currentSong: Song | null;
  playerAudio: HTMLAudioElement | null;
}

export const PlayerContext = createContext<PlayerContext>({ playAudio: undefined, currentSong: null, playerAudio: null });

export const PlayerProvider = ({ children }: any) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [queue, setQueue] = useState<Song[]>([]);
  const [playerAudio, setPlayerAudio] = useState<HTMLAudioElement | null>(null);
  const [localStorageQueue, setLocalStorageQueue] = helpers.hooks.useLocalStorage('queue', []);

  useEffect(() => {
    setQueue(localStorageQueue);
  }, []);

  const addSongsToEndOfQueue = (songs: Song[]) => {
    const newQueue = [...queue, ...songs];
    setQueue(newQueue);
    setLocalStorageQueue(newQueue);
  };

  const replaceQueueWithSongs = (songs: Song[]) => {
    const newQueue = [...songs];
    setQueue(newQueue);
    setLocalStorageQueue(newQueue);
  };

  const clearQueue = () => {
    setQueue([]);
    setLocalStorageQueue([]);
  };

  const addSongsToBeginningOfQueue = (songs: Song[]) => {
    const newQueue = [...songs, ...queue];
    setQueue(newQueue);
    setLocalStorageQueue(newQueue);
  };

  const playAudio = (song: Song) => {
    const queueIndex = queue.findIndex((s) => s.id === song.id);
    setCurrentSong(queue[queueIndex]);
    const audio = new Audio(queue[queueIndex].url);
    setPlayerAudio(audio);
    // audio.play();
  };

  return (
    <PlayerContext.Provider
      value={{ playAudio, currentSong, playerAudio, addSongsToBeginningOfQueue, addSongsToEndOfQueue, clearQueue, replaceQueueWithSongs }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
