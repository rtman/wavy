import React, { createContext, useEffect, useState } from 'react';
import * as helpers from 'helpers';
import firebase from 'firebase';

interface PlayerContext {
  playAudio?: (song: Song) => void;
  currentSong: Song | null;
  audio: HTMLAudioElement;
  addSongsToEndOfQueue: (songs: Song[]) => void;
  addSongsToBeginningOfQueue: (songs: Song[]) => void;
  replaceQueueWithSongs: (songs: Song[]) => void;
  clearQueue: () => void;
}

export const PlayerContext = createContext<PlayerContext>({
  playAudio: undefined,
  currentSong: null,
  audio: new Audio(),
  addSongsToEndOfQueue: () => {},
  addSongsToBeginningOfQueue: () => {},
  replaceQueueWithSongs: () => {},
  clearQueue: () => {}
});

export const PlayerProvider = ({ children }: any) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [queue, setQueue] = useState<Song[]>([]);
  // const [playerAudio, setPlayerAudio] = useState<HTMLAudioElement | null>(null);
  const [localStorageQueue, setLocalStorageQueue] = helpers.hooks.useLocalStorage('queue', []);

  const audio = new Audio();

  const addAudioElements = async (songs: Song[]) => {
    const songUrlPromises = songs.map((s) => {
      return getStorageHttpUrl(s);
    });
    const result = await Promise.all(songUrlPromises);
    const resolvedSongs = songs.map((s, index) => {
      return {
        ...s,
        audio: new Audio(result[index])
      };
    });
    return resolvedSongs;
  };

  useEffect(async () => {
    const resolvedLocalStorageQueue = await addAudioElements(localStorageQueue);
    setQueue(resolvedLocalStorageQueue);
  }, []);

  const addSongsToEndOfQueue = async (songs: Song[]) => {
    const resolvedSongs = await addAudioElements(songs);
    const newQueue = [...queue, ...resolvedSongs];
    setQueue(newQueue);
    setLocalStorageQueue(newQueue);
  };

  const replaceQueueWithSongs = async (songs: Song[]) => {
    const resolvedSongs = await addAudioElements(songs);

    const newQueue = [...resolvedSongs];
    setQueue(newQueue);
    setLocalStorageQueue(newQueue);
    playAudio(newQueue[0]);
  };

  const clearQueue = () => {
    setQueue([]);
    setLocalStorageQueue([]);
  };

  const addSongsToBeginningOfQueue = async (songs: Song[]) => {
    const resolvedSongs = await addAudioElements(songs);

    const newQueue = [...resolvedSongs, ...queue];
    setQueue(newQueue);
    setLocalStorageQueue(newQueue);
    playAudio(newQueue[0]);
  };

  // need to re write useGetStorageHttpUrl to return function so it can be used anywhere
  const getStorageHttpUrl = async (googleStorageUri: string) => {
    const fileRef = firebase.storage().refFromURL(googleStorageUri);
    const resolvedUrl = await fileRef.getDownloadURL();
    return resolvedUrl;
  };

  const playAudio = async (song: Song) => {
    console.log('before audio.currentSrc', audio.currentSrc);
    console.log('audio.duration', audio.duration);
    const queueIndex = queue.findIndex((s) => s.id === song.id);
    console.log('queueIndex', queueIndex);
    const songToPlay = queue[queueIndex];
    console.log('songToPlay', songToPlay);
    setCurrentSong(songToPlay);
    const songUrl = await getStorageHttpUrl(songToPlay.url);

    if (audio.currentSrc.length > 0) {
      console.log('after audio.currentSrc', audio.currentSrc);
      audio.pause();
      audio.currentTime = 0;
    }
    audio.src = songUrl;
    // setPlayerAudio(audio);
    audio.play();
  };

  return (
    <PlayerContext.Provider
      value={{ playAudio, currentSong, audio, addSongsToBeginningOfQueue, addSongsToEndOfQueue, clearQueue, replaceQueueWithSongs }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
