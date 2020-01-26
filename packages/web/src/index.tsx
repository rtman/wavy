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
import './index.css';
import * as serviceWorker from './serviceWorker';

export const history = createBrowserHistory();

console.log('config', config);

firebase.initializeApp(config.FIREBASE_CONFIG);

// helpers.sentry.install();

const sagaGlobalErrorHandler = (error: Error) => {
  //   helpers.sentry.captureExceptionPrefixed('GLOBAL ERROR HANDLER!', error);
  console.log('GLOBAL ERROR HANDLER!', error);
};

// const initialize = async () => {
const sagaMiddleware = createSagaMiddleware({
  onError: sagaGlobalErrorHandler
});

let middleware = redux.applyMiddleware(routerMiddleware(history), sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  const composeEnhancers = composeWithDevTools({});

  middleware = composeEnhancers(middleware);
}

const store = redux.createStore(state.createReducer(history), middleware);

sagaMiddleware.run(sagas.rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
