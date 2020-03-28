import express from 'express';
import schema from './schema';
import resolvers from './resolvers';
import { ApolloServer } from 'apollo-server-express';
import { sequelize } from 'orm';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import { Resolvers } from './types';

const app = express();
const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs: schema,
  resolvers: resolvers as Resolvers,
  formatError: (error) => {
    // remove the internal sequelize error message
    // leave only the important validation error
    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '');

    return {
      ...error,
      message
    };
  },
  context: async ({ req }) => {
    // context: async ({ req, connection }) => {

    // console.log('Apollo server req', req);s
    // console.log('Apollo server connection', connection);
    if (req) {
      return {
        models: sequelize.models
      };
    }

    // if (connection) {
    // }
  },
  validationRules: [depthLimit(7)]
});
const port = 3000;

app.use('*', cors());
app.use(compression());
server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);

sequelize.sync().then(async () => {
  httpServer.listen({ port }, () => {
    console.log(
      `\n🚀      GraphQL is now running on http://localhost:${port}/graphql`
    );
  });
});
