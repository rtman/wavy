import { Song } from 'types';

export interface SongWithAudio extends Song {
  audio?: HTMLAudioElement;
}
