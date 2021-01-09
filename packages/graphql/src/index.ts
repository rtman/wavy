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

import { createOrmConnection, Models } from './orm';
import * as Resolvers from './resolvers';

export interface Context extends ExpressContext {
  models: typeof Models;
}

if (
  process.env.FIREBASE_DATABASE_URL === undefined ||
  process.env.FIREBASE_STORAGE_BUCKET === undefined
) {
  throw new Error(
    'Firebase admin initialisation failed - env vars not set correctly'
  );
}

admin.initializeApp({
  // TODO: Credential needs to be env aware
  credential: admin.credential.applicationDefault(),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const port = process.env.PORT || 3001;

const initApolloServer = (schema: GraphQLSchema) =>
  new ApolloServer({
    introspection: true,
    playground: true,
    // typeDefs: schema,
    schema: schema,
    // TODO: fix with proper type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
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
    const schema = await buildSchema({
      resolvers: ['./resolvers/**/*.ts'],
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

void runServer();
