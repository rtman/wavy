import { SongWithAudio } from 'commonTypes';

interface Player {
  audio: HTMLAudioElement;
  currentSong: SongWithAudio | null;
}
