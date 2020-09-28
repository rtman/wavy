import { createConnection } from 'typeorm';

import * as Models from './models';

const createOrmConnection = async () => {
  await createConnection({
    database: process.env.DATABASE_DB,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    type: 'postgres',
    port: 5432,
    synchronize: true,
    entities: [
      Models.Album,
      Models.Artist,
      // Models.ArtistArtistConnections,
      Models.ArtistLabel,
      Models.Label,
      Models.LabelArtistConnections,
      Models.Playlist,
      Models.User,
      Models.UserArtist,
      Models.UserArtistFollowing,
      Models.UserLabel,
      Models.UserLabelFollowing,
      Models.UserPlaylist,
      Models.UserPlaylistFollowing,
      Models.UserSongFavourites,
      Models.Song,
      Models.SongPlaylist,
      Models.SongArtistSupportingArtist,
      Models.SongTag,
      Models.Tag,
    ],
  });
};

export { createOrmConnection };
