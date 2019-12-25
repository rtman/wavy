import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import 'dotenv/config';
import { sequelize } from './models';
import Schema from './schema';

const app = express();

app.use(cors());

const server = new ApolloServer({
  schema: Schema,
  playground: true
});

server.applyMiddleware({
  app,
  path: '/graphql'
});

sequelize.sync().then(async () => {
  app.listen(
    {
      port: 8000 // you could change this to process.env.PORT if you wish
    },
    () => {
      console.log('Apollo Server on http://localhost:8000/graphql');
    }
  );
});
