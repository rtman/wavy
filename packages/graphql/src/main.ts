import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema/songs';
import { resolvers } from './resolverMap';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(7)]
});
const port = 3000;

app.use('*', cors());
app.use(compression());
server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);

httpServer.listen({ port }, () => console.log(`\n🚀      GraphQL is now running on http://localhost:${port}/graphql`));
