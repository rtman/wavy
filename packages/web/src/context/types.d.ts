interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  following: number[];
  favourites: number[];
  playlists: string[];
  recentlyPlayed: number[];
}
