module.exports = {
  type: 'postgres',
  port: 5432,
  database: process.env.DATABASE_DB,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  synchronize: true,
  logging: false,
  entities: ['../graphql/src/orm/models/artist.ts'],
  // "migrations": [
  //    "src/migration/**/*.ts"
  // ],
  // "subscribers": [
  //    "src/subscriber/**/*.ts"
  // ]
  seeds: ['src/seeds/*{.ts,.js}'],
  // "factories": ['src/factories/**/*{.ts,.js}'],
};
