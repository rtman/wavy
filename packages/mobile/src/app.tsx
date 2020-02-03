import React from 'react';
import * as components from 'components';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { NavigationNativeContainer } from '@react-navigation/native';
// import { createHttpLink } from 'apollo-link-http';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

export const App = () => {
  return (
    <NavigationNativeContainer>
      <ApolloProvider client={client}>
        <components.NavigationTabs />
      </ApolloProvider>
    </NavigationNativeContainer>
  );
};