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
  Album: sequelize.import('./album'),
  User: sequelize.import('./user'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export {sequelize};

export default models;
