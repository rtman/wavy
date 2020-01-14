import React from 'react';
import { Player } from './player';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';

const client = new ApolloClient({
  // uri: 'https://graphql:3000/'
  link: createHttpLink({ uri: 'http://localhost:3000/graphql' })
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Player />
    </ApolloProvider>
  );
};
