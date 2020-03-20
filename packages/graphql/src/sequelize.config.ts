import {Sequelize} from 'sequelize-typescript';
import {Playlist, User, UserPlaylist} from './models';

const sequelize = new Sequelize({
  // process.env.TEST_DATABASE || process.env.DATABASE_DB,
  database: process.env.DATABASE_DB,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: 'postgresql',
  dialect: 'postgres',
  models: [Playlist, User, UserPlaylist],
});

export {sequelize};
