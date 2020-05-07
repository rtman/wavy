import { createConnection } from 'typeorm';
import * as Models from './models';

const createOrmConnection = async () => {
  await createConnection({
    database: process.env.DATABASE_DB,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: 'postgresql',
    type: 'postgres',
    // port: 5432,
    synchronize: true,
    entities: [
      Models.Album,
      Models.ArtistLabel,
      Models.Artist,
      Models.Label,
      Models.Playlist,
      Models.User,
      Models.UserSongFavourites,
      Models.UserArtistFollowing,
      Models.UserSongRecentlyPlayed,
      Models.UserPlaylist,
      Models.Song,
      Models.SongPlaylist,
      Models.SongArtistSupportingArtist,
    ],
  });
};

export { createOrmConnection };
