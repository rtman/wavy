import { Sequelize } from 'sequelize-typescript';
import * as Models from './models';

const sequelizeInstance = new Sequelize({
  // process.env.TEST_DATABASE || process.env.DATABASE_DB,
  database: process.env.DATABASE_DB,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: 'postgresql',
  dialect: 'postgres',
  models: [
    Models.Album,
    Models.Artist,
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

export { sequelizeInstance };
