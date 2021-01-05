import * as helpers from 'helpers';
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { SongWithAudio } from 'types';
import { Song } from 'types';
import { createContext } from 'use-context-selector';

interface PlayerContextType {
  addSongsToEndOfQueue: (songs: Song[]) => void;
  clearQueue: () => void;
  currentSong: Song | undefined;
  // addSongsToBeginningOfQueue: (songs: Song[]) => void;
  prepCurrentSong?: (song: SongWithAudio) => void;
  playSongInQueue(song: Song): void;
  playNextSongInQueue: () => void;
  playPreviousSongInQueue: () => void;
  userInitiatedPlayback: boolean;
  setUserInitiatedPlayback: (value: boolean) => void;
  replaceQueueWithSongs: (songs: Song[]) => void;
  removeSongFromQueue(id: string): void;
  queue: Song[];
}

export const PlayerContext = createContext<PlayerContextType | undefined>(
  undefined
);

export const PlayerProvider: FunctionComponent = (props) => {
  const [currentSong, setCurrentSong] = useState<Song | undefined>(undefined);
  const [queue, setQueue] = useState<Song[]>([]);
  const [queuePosition, setQueuePosition] = useState<number>(0);
  const [userInitiatedPlayback, setUserInitiatedPlayback] = useState<boolean>(
    false
  );
  const {
    storedValue: localStorageQueue,
    setValue: setLocalStorageQueue,
  } = helpers.hooks.useLocalStorage<Song[]>('queue', []);
  const {
    storedValue: localStorageQueuePosition,
    setValue: setLocalStorageQueuePosition,
  } = helpers.hooks.useLocalStorage<number>('queuePosition', 0);

  const prepCurrentSong = useCallback(
    (currentQueue: Song[], position: number) => {
      const songToPlay = currentQueue[position];

      if (songToPlay) {
        setCurrentSong(songToPlay);
        setQueuePosition(position);
        setLocalStorageQueuePosition(position);
        setUserInitiatedPlayback(true);
      }
    },
    // TODO: test fixing this
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    const loadLocalStorageQueue = () => {
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
      const newQueue = [...queue, ...songs];

      setQueue(newQueue);
      setLocalStorageQueue(newQueue);
    }
    // TODO: test fixing this
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const replaceQueueWithSongs = useCallback((songs: Song[]) => {
    if (songs.length > 0) {
      const newQueue = [...songs];

      setQueue(newQueue);
      setQueuePosition(0);
      setLocalStorageQueue(newQueue);
      setLocalStorageQueuePosition(0);
      prepCurrentSong(newQueue, 0);
    }
    // TODO: test fixing this
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playSongInQueue = useCallback(
    (song: Song) => {
      const index = queue.findIndex((s) => s.id === song.id);

      prepCurrentSong(queue, index);
    },
    // TODO: test fixing this
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [queue]
  );

  const playPreviousSongInQueue = useCallback(() => {
    const position = queuePosition - 1;

    if (queue && queue[position]) {
      setCurrentSong(queue[position]);
      setQueuePosition(position);
    }
  }, [queuePosition, queue]);

  const playNextSongInQueue = useCallback(() => {
    const position = queuePosition + 1;

    if (queue && queue[position]) {
      setCurrentSong(queue[position]);
      setQueuePosition(position);
    }
  }, [queuePosition, queue]);

  const clearQueue = useCallback(() => {
    setQueue([]);
    setLocalStorageQueue([]);
    // TODO: test fixing this
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeSongFromQueue = useCallback((id: string) => {
    const index = queue.findIndex((s: Song) => s.id === id);
    const newQueue = [...queue];

    newQueue.splice(index, 1);
    setQueue(newQueue);
    setLocalStorageQueue(newQueue);
    // TODO: test fixing this
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const addSongsToBeginningOfQueue = async (songs: Song[]) => {
  //   const resolvedSongs = await addAudioElements(songs);

  //   const newQueue = [...resolvedSongs, ...queue];
  //   console.log('addSongsToBeginningOfQueue newQueue', newQueue);
  //   setQueue(newQueue);
  //   setLocalStorageQueue(newQueue);
  //   prepCurrentSong(newQueue[0]);
  // };

  return (
    <PlayerContext.Provider
      value={{
        addSongsToEndOfQueue,
        clearQueue,
        currentSong,
        playSongInQueue,
        playNextSongInQueue,
        playPreviousSongInQueue,
        removeSongFromQueue,
        replaceQueueWithSongs,
        setUserInitiatedPlayback,
        queue,
        userInitiatedPlayback,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};
