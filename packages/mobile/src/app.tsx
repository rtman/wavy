import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import ApolloClient from 'apollo-boost';
import * as components from 'components';
import React from 'react';
// import { createHttpLink } from 'apollo-link-http';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
});

export const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <components.NavigationTabs />
      </ApolloProvider>
    </NavigationContainer>
  );
};
