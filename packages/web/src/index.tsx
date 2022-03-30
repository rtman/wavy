// import './wdyr';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { CssBaseline } from '@material-ui/core';
import { AuthProvider, UserProvider } from 'context';
import * as firebase from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import { FirebaseConfig } from 'types';

import { App } from './App';
import * as serviceWorker from './serviceWorker';

// safari smooth scroll animation polyfill
smoothscroll.polyfill();

if (
  process.env.REACT_APP_FIREBASE_API_KEY === undefined ||
  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN === undefined ||
  process.env.REACT_APP_FIREBASE_DATABASE_URL === undefined ||
  process.env.REACT_APP_FIREBASE_PROJECT_ID === undefined ||
  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET === undefined ||
  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID === undefined ||
  process.env.REACT_APP_FIREBASE_APP_ID === undefined ||
  process.env.REACT_APP_FIREBASE_MEASUREMENT_ID === undefined
) {
  throw new Error('Firebase not initialized - env variables not set correctly');
}

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

if (process.env.REACT_APP_GRAPHQL_URI === undefined) {
  throw new Error(
    'ApolloClient not initialised - REACT_APP_GRAPHQL_URI not set'
  );
}

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Helmet>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Helmet>
    <CssBaseline>
      <UserProvider>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </UserProvider>
    </CssBaseline>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
