import { SongWithAudio } from 'types';

interface Player {
  audio: HTMLAudioElement;
  currentSong: SongWithAudio | null;
}
