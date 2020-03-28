import { config } from 'config';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import * as firebase from 'firebase/app';
// import * as helpers from 'helpers';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as redux from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import * as sagas from 'sagas';
import * as state from 'state';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { CssBaseline } from '@material-ui/core';
import Helmet from 'react-helmet';
import { AuthProvider } from 'context';

export const history = createBrowserHistory();

console.log('config', config);

firebase.initializeApp(config.FIREBASE_CONFIG);

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

// helpers.sentry.install();

const sagaGlobalErrorHandler = (error: Error) => {
  //   helpers.sentry.captureExceptionPrefixed('GLOBAL ERROR HANDLER!', error);
  console.log('GLOBAL ERROR HANDLER!', error);
};

// const initialize = async () => {
const sagaMiddleware = createSagaMiddleware({
  onError: sagaGlobalErrorHandler
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
