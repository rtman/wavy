import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import * as admin from 'firebase-admin';
import { GraphQLError, GraphQLSchema } from 'graphql';
import depthLimit from 'graphql-depth-limit';
import { buildSchema } from 'type-graphql';

import * as config from './config';
import { createOrmConnection, Models } from './orm';
import * as Resolvers from './resolvers';

export interface Context extends ExpressContext {
  models: typeof Models;
}

admin.initializeApp({
  // TODO: Credential needs to be env aware
  credential: admin.credential.applicationDefault(),
  databaseURL: config.settings.FIREBASE_CONFIG.databaseURL,
  storageBucket: config.settings.FIREBASE_CONFIG.storageBucket,
});

const port = process.env.PORT || 3001;

const initApolloServer = (schema: GraphQLSchema) =>
  new ApolloServer({
    introspection: true,
    playground: true,
    // typeDefs: schema,
    schema: schema,
    // TODO: fix with proper type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolvers: Resolvers as any,
    formatError: (error): GraphQLError => {
      // remove the internal sequelize error message
      // leave only the important validation error
      const message = error.message
        .replace('SequelizeValidationError: ', '')
        .replace('Validation error: ', '');

      return {
        ...error,
        message,
      };
    },
    context: ({ req, res, connection }) => {
      // context: async ({ req, connection }) => {

      if (req) {
        return {
          req,
          res,
          connection,
          models: Models,
        };
      }
    },
    validationRules: [depthLimit(7)],
  });

const app = express();

app.use('*', cors());
app.use(compression());

app.set('trust proxy', true);

const runServer = async () => {
  try {
    await createOrmConnection();
    console.log('TypeORM connected to postgres');
    // this builds the tables in postgres
    const schema = await buildSchema({
      resolvers: [
        Resolvers.UserResolvers,
        Resolvers.ArtistResolvers,
        Resolvers.AlbumResolvers,
        Resolvers.PlaylistResolvers,
        Resolvers.SongResolvers,
      ],
    });

    const server = initApolloServer(schema);
    server.applyMiddleware({ app, path: '/graphql' });

    app.get('/', (_req, res) => {
      res.send('Hello world!');
    });

    app.listen({ port }, () => {
      console.log(
        `\n🚀      GraphQL is now running on http://localhost:${port}/graphql`
      );
    });
  } catch (error) {
    console.log('runServer Error:', error);
  }
};

runServer();
