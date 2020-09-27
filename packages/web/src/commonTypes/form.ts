export interface ArtistAutocomplete {
  id: string;
  name: string;
  __typename: string;
}

/** React-hook-form doesnt like undefined fields, use null instead */
export interface SongFields {
  artist: ArtistAutocomplete | null;
  hasSupportingArtists: boolean;
  isrc: string;
  supportingArtists: ArtistAutocomplete[] | null;
  title: string;
}

/** React-hook-form doesnt like undefined fields, use null instead */
export interface AlbumFields {
  title: string;
  artist: ArtistAutocomplete | null;
  releaseDate: Date | null;
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
