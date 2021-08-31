import { CreateAlbumArgs, NewSongArgs } from './serverTypes';
export interface ArtistAutocomplete {
  id: string;
  name: string;
}

/** React-hook-form doesnt like undefined fields, use null instead */
export interface SongFields {
  artist: ArtistAutocomplete | null;
  isrc?: string;
  supportingArtists: ArtistAutocomplete[];
  title: string;
}

/** React-hook-form doesnt like undefined fields, use null instead */
export interface AlbumFields {
  artist: ArtistAutocomplete | null;
  description: string;
  releaseDate: Date | null;
  title: string;
}

export interface NewAlbumForm {
  album: AlbumFields;
  songs: SongFields[];
}

export interface SongForUpload {
  title: string;
  storagePath?: string;
  file: File;
}

export interface CreateAlbumSubmissionData {
  album: CreateAlbumArgs;
  songs: NewSongArgs[];
}
