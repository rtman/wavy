import * as firebase from 'firebase/app';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { config } from 'config';
// import * as helpers from 'helpers';
import * as redux from 'redux';
import * as sagas from 'sagas';
import * as serviceWorker from './serviceWorker';
import * as state from 'state';
import { ApolloProvider } from '@apollo/react-hooks';
import { App } from './App';
import { AuthProvider } from 'context';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import ApolloClient from 'apollo-boost';
import Helmet from 'react-helmet';
import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';

export const history = createBrowserHistory();

console.log('config', config);
if (config.FIREBASE_CONFIG) {
  firebase.initializeApp(config.FIREBASE_CONFIG);
}

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
});

// helpers.sentry.install();

const sagaGlobalErrorHandler = (error: Error) => {
  //   helpers.sentry.captureExceptionPrefixed('GLOBAL ERROR HANDLER!', error);
  console.log('GLOBAL ERROR HANDLER!', error);
};

// const initialize = async () => {
const sagaMiddleware = createSagaMiddleware({
  onError: sagaGlobalErrorHandler,
});

let middleware = redux.applyMiddleware(
  routerMiddleware(history),
  sagaMiddleware
);

if (process.env.NODE_ENV === 'development') {
  const composeEnhancers = composeWithDevTools({});

  middleware = composeEnhancers(middleware);
}

const store = redux.createStore(state.createReducer(history), middleware);

sagaMiddleware.run(sagas.rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ApolloProvider client={client}>
        <Helmet>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Helmet>
        <CssBaseline>
          <AuthProvider>
            <App />
          </AuthProvider>
        </CssBaseline>
      </ApolloProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
