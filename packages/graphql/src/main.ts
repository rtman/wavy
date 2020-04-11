import express from 'express';
import resolvers from './resolvers';
import { ApolloServer } from 'apollo-server-express';
import { createOrmConnection, Models } from './orm';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import { GraphQLError, GraphQLSchema } from 'graphql';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';

const port = 3000;

const initApolloServer = (schema: GraphQLSchema) =>
  new ApolloServer({
    introspection: true,
    playground: true,
    typeDefs: schema,
    // TODO: fix with proper type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolvers: resolvers as any,
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
    context: ({ req }) => {
      // context: async ({ req, connection }) => {

      // console.log('Apollo server req', req);s
      // console.log('Apollo server connection', connection);
      if (req) {
        return {
          models: Models,
        };
      }

      // if (connection) {
      // }
    },
    validationRules: [depthLimit(7)],
  });

const app = express();

app.use('*', cors());
app.use(compression());

const runServer = async () => {
  try {
    await createOrmConnection();
    console.log('TypeORM connected to postgres');
    const schema = await buildSchema({
      resolvers: [RecipeResolver],
    });

    const server = initApolloServer(schema);
    server.applyMiddleware({ app, path: '/graphql' });

    const httpServer = createServer(app);

    httpServer.listen({ port }, () => {
      console.log(
        `\n🚀      GraphQL is now running on http://localhost:${port}/graphql`
      );
    });
  } catch (error) {
    console.error('runServer error', error);
  }
};

runServer();
