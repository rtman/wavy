interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  following: Artist[];
  favourites: Song[];
  playlists: Playlist[];
  recentlyPlayed: Song[];
}
