export interface ArtistAutocomplete {
  id: string;
  name: string;
  __typename: string;
}

/** React-hook-form doesnt like undefined fields, use null instead */
export interface SongFields {
  artist: ArtistAutocomplete | null;
  isNewArtist: boolean;
  newArtistName: string;
  newArtistEmail: string;
  hasSupportingArtists: boolean;
  isrc: string;
  supportingArtists: ArtistAutocomplete[] | null;
  title: string;
}

/** React-hook-form doesnt like undefined fields, use null instead */
export interface AlbumFields {
  artist: ArtistAutocomplete | null;
  isNewArtist: boolean;
  newArtistName: string;
  newArtistEmail: string;
  releaseDate: Date | null;
  title: string;
  variousArtists: boolean;
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
