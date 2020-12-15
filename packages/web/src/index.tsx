// import './wdyr';
import smoothscroll from 'smoothscroll-polyfill';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { CssBaseline } from '@material-ui/core';
import * as config from 'config';
// import { ConnectedRouter } from 'connected-react-router';
import { AuthProvider, UserProvider } from 'context';
import * as firebase from 'firebase/app';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
// import * as helpers from 'helpers';
import { composeWithDevTools } from 'redux-devtools-extension';

import { App } from './App';
import * as serviceWorker from './serviceWorker';

// safari smooth scroll animation polyfill
smoothscroll.polyfill();

export const history = createBrowserHistory();

console.log('config', config);
if (config.settings.FIREBASE_CONFIG) {
  firebase.initializeApp(config.settings.FIREBASE_CONFIG);
}

const client = new ApolloClient({
  uri: config.settings.GRAPHQL_URI,
  cache: new InMemoryCache(),
});

if (process.env.NODE_ENV === 'development') {
  const composeEnhancers = composeWithDevTools({});
}

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
