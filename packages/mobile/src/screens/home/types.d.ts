interface Track {
  id: string;
  artist: string;
  title: string;
  album: string;
  genre: string[];
  artwork: string;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
  date: Date;
}
