import {Sequelize} from 'sequelize-typescript';
import {
  // Album,
  // Artist,
  Playlist,
  User,
  UserPlaylist,
  // Song
} from './models';

const sequelize = new Sequelize({
  // process.env.TEST_DATABASE || process.env.DATABASE_DB,
  database: process.env.DATABASE_DB,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: 'postgresql',
  dialect: 'postgres',
  models: [
    // Album,
    // Artist,
    Playlist,
    User,
    UserPlaylist,
    // Song
  ],
});

export {sequelize};
