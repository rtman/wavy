interface Artist {
  id: string;
  name: string;
  image: string;
  artist_id: string;
  createdAt: Date;
  updatedAt: Date;
  album_ids: string[];
}
interface ArtistSongsAlbumsJoined extends Artist {
  album_id: string;
  album_title: string;
  album_image: string;
  songId: string;
  song_title: string;
  song_url: string;
  description: string;
}
