import { createConnection } from 'typeorm';

import * as Models from './models';

const createOrmConnection = async () => {
  await createConnection({
    database: process.env.DATABASE_DB,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    type: 'postgres',
    port: Number(process.env.DATABASE_PORT),
    synchronize: true,
    // This doesnt work because moels exports types as well as models, would be nice to fix this
    // entities: Object.values(Models),
    entities: [
      Models.Album,
      Models.Artist,
      Models.ArtistLabel,
      Models.Label,
      Models.Permission,
      Models.Playlist,
      Models.Song,
      Models.SongPlaylist,
      Models.SongArtistSupportingArtist,
      Models.SongTag,
      Models.Tag,
      Models.User,
      Models.UserArtist,
      Models.UserArtistFollowing,
      Models.UserLabel,
      Models.UserLabelFollowing,
      Models.UserPlaylist,
      Models.UserPlaylistFollowing,
      Models.UserSongFavourites,
      Models.UserSubscription,
    ],
  });
};

export { createOrmConnection };
