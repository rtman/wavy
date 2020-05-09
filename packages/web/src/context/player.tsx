import React, { createContext, useEffect, useState } from 'react';
import * as helpers from 'helpers';
import firebase from 'firebase';
import { Song } from 'types';
import { SongWithAudio } from 'screens/home/types';

interface PlayerContext {
  playAudio?: (song: SongWithAudio) => void;
  playQueue: () => void;
  playSongInQueue(song: SongWithAudio): void;
  playNextSongInQueue: () => void;
  playPreviousSongInQueue: () => void;
  pause: () => void;
  unPause: () => void;
  currentSong: SongWithAudio | null;
  audio: HTMLAudioElement;
  addSongsToEndOfQueue: (songs: Song[]) => void;
  // addSongsToBeginningOfQueue: (songs: Song[]) => void;
  replaceQueueWithSongs: (songs: Song[]) => void;
  clearQueue: () => void;
  removeSongFromQueue(id: string): void;
  queue: SongWithAudio[];
}

export const PlayerContext = createContext<PlayerContext>({
  playAudio: undefined,
  playQueue: () => {},
  playSongInQueue: () => {},
  playNextSongInQueue: () => {},
  playPreviousSongInQueue: () => {},
  pause: () => {},
  unPause: () => {},
  currentSong: null,
  audio: new Audio(),
  addSongsToEndOfQueue: () => {},
  // addSongsToBeginningOfQueue: () => {},
  replaceQueueWithSongs: () => {},
  clearQueue: () => {},
  removeSongFromQueue: () => {},
  queue: [],
});

// TODO: add to helpers
const addAudioElements = async (songs: Song[]) => {
  const songUrlPromises = songs.map((s) => {
    return getStorageHttpUrl(s.url);
  });

  const result = await Promise.all(songUrlPromises);
  const resolvedSongs: SongWithAudio[] = songs.map((s, index) => {
    return {
      ...s,
      audio: new Audio(result[index]),
    };
  });
  return resolvedSongs;
};

// TODO: add to helpers
const getStorageHttpUrl = async (googleStorageUri: string) => {
  const fileRef = firebase.storage().refFromURL(googleStorageUri);
  const resolvedUrl = await fileRef.getDownloadURL();
  return resolvedUrl;
};

export const PlayerProvider = ({ children }: any) => {
  const [currentSong, setCurrentSong] = useState<SongWithAudio | null>(null);
  const [queue, setQueue] = useState<SongWithAudio[]>([]);
  const [queuePosition, setQueuePosition] = useState<number>(0);
  // const [playerAudio, setPlayerAudio] = useState<HTMLAudioElement | null>(null);
  const [
    localStorageQueue,
    setLocalStorageQueue,
  ] = helpers.hooks.useLocalStorage('queue', []);
  const [
    localStorageQueuePosition,
    setLocalStorageQueuePosition,
  ] = helpers.hooks.useLocalStorage('queuePosition', 0);

  let audio = new Audio();

  useEffect(() => {
    const loadLocalStorageQueue = async () => {
      const resolvedLocalStorageQueue = await addAudioElements(
        localStorageQueue
      );
      console.log('resolvedLocalStorageQueue', resolvedLocalStorageQueue);
      setQueue(resolvedLocalStorageQueue);
      setQueuePosition(localStorageQueuePosition);
      setCurrentSong(resolvedLocalStorageQueue[localStorageQueuePosition]);
    };
    loadLocalStorageQueue();
    // TODO: Re enable and fix deps, localStorageQueuePosition breaks it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // }, [localStorageQueue, localStorageQueuePosition]);

  const addSongsToEndOfQueue = async (songs: Song[]) => {
    const resolvedSongs = await addAudioElements(songs);
    const newQueue = [...queue, ...resolvedSongs];
    setQueue(newQueue);
    setLocalStorageQueue(newQueue);
  };

  const replaceQueueWithSongs = async (songs: Song[]) => {
    console.log('replaceQueueWithSongs songs', songs);

    const resolvedSongs = await addAudioElements(songs);

    const newQueue = [...resolvedSongs];
    setQueue(newQueue);
    setQueuePosition(0);
    setLocalStorageQueue(newQueue);
    setLocalStorageQueuePosition(0);
    playAudio(newQueue, 0);
  };

  const playSongInQueue = (song: SongWithAudio) => {
    const index = queue.findIndex((s) => s.id === song.id);
    playAudio(queue, index);
  };

  const playPreviousSongInQueue = () => {
    if (currentSong?.audio?.currentTime && currentSong.audio.currentTime < 5) {
      const position = queuePosition - 1;
      if (queue && queue[position]) {
        playAudio(queue, position);
      }
    } else {
      if (queue && queue[queuePosition]) {
        playAudio(queue, queuePosition);
      }
    }
  };

  const playNextSongInQueue = () => {
    const position = queuePosition + 1;

    if (queue && queue[position]) {
      playAudio(queue, position);
    }
  };

  const playQueue = () => {
    const position = queuePosition;

    if (queue && queue[position]) {
      playAudio(queue, position);
    }
  };

  const clearQueue = () => {
    setQueue([]);
    setLocalStorageQueue([]);
  };

  const removeSongFromQueue = (id: string) => {
    const index = queue.findIndex((s: Song) => s.id === id);
    const newQueue = [...queue];
    newQueue.splice(index, 1);
    setQueue(newQueue);
    setLocalStorageQueue(newQueue);
  };

  // const addSongsToBeginningOfQueue = async (songs: Song[]) => {
  //   const resolvedSongs = await addAudioElements(songs);

  //   const newQueue = [...resolvedSongs, ...queue];
  //   console.log('addSongsToBeginningOfQueue newQueue', newQueue);
  //   setQueue(newQueue);
  //   setLocalStorageQueue(newQueue);
  //   playAudio(newQueue[0]);
  // };

  // need to re write useGetStorageHttpUrl to return function so it can be used anywhere

  const playAudio = async (currentQueue: SongWithAudio[], position: number) => {
    if (currentSong && currentSong.audio) {
      currentSong.audio.pause();
      currentSong.audio.currentTime = 0;
    }

    // might want to check if position in queue exists
    const songToPlay = currentQueue[position];
    setCurrentSong(songToPlay);

    if (songToPlay && songToPlay.audio) {
      setQueuePosition(position);
      setLocalStorageQueuePosition(position);
      songToPlay.audio.play();
      audio = songToPlay.audio;
    }
  };

  const unPause = () => {
    if (currentSong && currentSong.audio) {
      currentSong.audio.play();
    }
  };

  const pause = () => {
    if (currentSong && currentSong.audio) {
      currentSong.audio.pause();
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        playQueue,
        pause,
        unPause,
        playSongInQueue,
        playNextSongInQueue,
        playPreviousSongInQueue,
        currentSong,
        audio,
        addSongsToEndOfQueue,
        clearQueue,
        removeSongFromQueue,
        replaceQueueWithSongs,
        queue,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
