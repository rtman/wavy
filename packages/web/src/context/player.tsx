import { SongWithAudio } from 'commonTypes';
import { Song } from 'commonTypes';
import * as helpers from 'helpers';
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { createContext } from 'use-context-selector';

interface PlayerContextType {
  playAudio?: (song: SongWithAudio) => void;
  playQueue: () => void;
  playSongInQueue(song: Song): void;
  playNextSongInQueue: () => void;
  playPreviousSongInQueue: () => void;
  pause: () => void;
  unPause: () => void;
  currentSong: Song | undefined;
  audio: HTMLAudioElement;
  addSongsToEndOfQueue: (songs: Song[]) => void;
  // addSongsToBeginningOfQueue: (songs: Song[]) => void;
  replaceQueueWithSongs: (songs: Song[]) => void;
  clearQueue: () => void;
  removeSongFromQueue(id: string): void;
  queue: Song[];
}

export const PlayerContext = createContext<PlayerContextType | undefined>(
  undefined
);

// TODO: add to helpers
// const addAudioElements = (songs: Song[]) => {
//   const resolvedSongs: SongWithAudio[] = songs.map((s) => {
//     return {
//       ...s,
//       audio: new Audio(s.urlHigh),
//     };
//   });
//   return resolvedSongs;
// };

export const PlayerProvider: FunctionComponent = (props) => {
  const [currentSong, setCurrentSong] = useState<Song | undefined>(undefined);
  const [queue, setQueue] = useState<Song[]>([]);
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

  const playAudio = useCallback((currentQueue: Song[], position: number) => {
    // console.log('*debug* playerContext playAudio - currentSong', currentSong);
    // console.log('*debug* playerContext playAudio - audio', audio);

    // if (audio) {
    //   audio.pause();
    //   audio.currentTime = 0;
    // }

    // might want to check if position in queue exists
    const songToPlay = currentQueue[position];
    setCurrentSong(songToPlay);

    if (songToPlay && songToPlay) {
      setQueuePosition(position);
      setLocalStorageQueuePosition(position);
      // audio.src = songToPlay.urlHigh;
      // audio.play();
      // songToPlay.audio.play();
      // audio = songToPlay.audio;
    }
  }, []);

  const unPause = useCallback(() => {
    // console.log('*debug* playerContext unPause audio', audio);

    if (audio) {
      audio.play();
    }
  }, [audio]);

  const pause = useCallback(() => {
    // console.log('*debug* playerContext pause audio', audio);
    if (audio) {
      audio.pause();
    }
  }, [audio]);

  useEffect(() => {
    const loadLocalStorageQueue = () => {
      // const resolvedLocalStorageQueue = addAudioElements(localStorageQueue);
      // console.log('resolvedLocalStorageQueue', resolvedLocalStorageQueue);
      setQueue(localStorageQueue);
      setQueuePosition(localStorageQueuePosition);
      setCurrentSong(localStorageQueue[localStorageQueuePosition]);
    };
    loadLocalStorageQueue();
    // TODO: Re enable and fix deps, localStorageQueuePosition breaks it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // }, [localStorageQueue, localStorageQueuePosition]);

  const addSongsToEndOfQueue = useCallback((songs: Song[]) => {
    if (songs.length > 0) {
      // const resolvedSongs = addAudioElements(songs);
      const newQueue = [...queue, ...songs];
      setQueue(newQueue);
      setLocalStorageQueue(newQueue);
    }
  }, []);

  const replaceQueueWithSongs = useCallback((songs: Song[]) => {
    // console.log('*debug* playerContext replaceQueueWithSongs songs', songs);
    if (songs.length > 0) {
      // const resolvedSongs = addAudioElements(songs);

      const newQueue = [...songs];
      setQueue(newQueue);
      setQueuePosition(0);
      setLocalStorageQueue(newQueue);
      setLocalStorageQueuePosition(0);
      playAudio(newQueue, 0);
    }
  }, []);

  const playSongInQueue = useCallback(
    (song: Song) => {
      const index = queue.findIndex((s) => s.id === song.id);
      playAudio(queue, index);
    },
    [queue]
  );

  const playPreviousSongInQueue = useCallback(() => {
    if (audio.currentTime < 5) {
      const position = queuePosition - 1;
      if (queue && queue[position]) {
        setCurrentSong(queue[position]);
        setQueuePosition(position);
      }
    } else {
      if (queue && queue[queuePosition]) {
        setCurrentSong(queue[queuePosition]);
      }
    }
  }, [queuePosition, queue]);

  const playNextSongInQueue = useCallback(() => {
    const position = queuePosition + 1;

    if (queue && queue[position]) {
      setCurrentSong(queue[position]);
      setQueuePosition(position);
    }
  }, [queuePosition, queue]);

  const playQueue = useCallback(() => {
    const position = queuePosition;

    if (queue && queue[position]) {
      playAudio(queue, position);
    }
  }, [queuePosition, queue]);

  const clearQueue = useCallback(() => {
    setQueue([]);
    setLocalStorageQueue([]);
  }, []);

  const removeSongFromQueue = useCallback((id: string) => {
    const index = queue.findIndex((s: Song) => s.id === id);
    const newQueue = [...queue];
    newQueue.splice(index, 1);
    setQueue(newQueue);
    setLocalStorageQueue(newQueue);
  }, []);

  // const addSongsToBeginningOfQueue = async (songs: Song[]) => {
  //   const resolvedSongs = await addAudioElements(songs);

  //   const newQueue = [...resolvedSongs, ...queue];
  //   console.log('addSongsToBeginningOfQueue newQueue', newQueue);
  //   setQueue(newQueue);
  //   setLocalStorageQueue(newQueue);
  //   playAudio(newQueue[0]);
  // };

  // console.log('*debug* playerContext');

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
      {props.children}
    </PlayerContext.Provider>
  );
};
