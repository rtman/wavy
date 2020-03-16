interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  following: string[];
  favourites: string[];
  playlists: string[];
  recentlyPlayed: number[];
}
