import {Sequelize} from 'sequelize';

// let sequelize;
// if (process.env.DATABASE_URL) {
//   sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres'
//   });
// } else {
const sequelize = new Sequelize(
  // process.env.TEST_DATABASE || process.env.DATABASE_DB,
  process.env.DATABASE_DB!,
  process.env.DATABASE_USER!,
  process.env.DATABASE_PASSWORD!,
  {
    host: 'postgresql',
    dialect: 'postgres',
  },
);
// }

const models = {
  Song: sequelize.import('./song'),
  Artist: sequelize.import('./artist'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export {sequelize};

export default models;

// export const songs = [
//   {
//     title: 'The Bells',
//     artist: 'Jeff Mills'
//   },
//   {
//     title: 'I got that feelin',
//     artist: 'Dreamer G'
//   },
//   {
//     title: 'Kind of Blue',
//     artist: 'Miles Davis'
//   },
//   {
//     title: 'Only the lonely',
//     artist: 'Roy Orbison'
//   }
// ];
