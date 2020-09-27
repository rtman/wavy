import { Song } from 'commonTypes';

export interface SongWithAudio extends Song {
  audio?: HTMLAudioElement;
}
