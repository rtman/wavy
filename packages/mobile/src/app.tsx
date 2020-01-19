import React from 'react';
import * as screens from 'screens';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
// import { createHttpLink } from 'apollo-link-http';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <screens.Home />
    </ApolloProvider>
  );
};
