import { SongWithAudio } from 'screens/home/types';
interface Player {
  audio: HTMLAudioElement;
  currentSong: SongWithAudio | null;
}
