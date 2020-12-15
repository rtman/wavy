import { EnvVariant } from 'types';

import { common } from './common';

export const beta: EnvVariant = {
  FIREBASE_CONFIG: {
    apiKey: 'AIzaSyBxocXWmCMa18OkCG7jfu_VoWgoYXjKT58',
    authDomain: 'groov-development-ddc9d.firebaseapp.com',
    databaseURL: 'https://groov-development-ddc9d.firebaseio.com',
    projectId: 'groov-development-ddc9d',
    storageBucket: 'groov-development-ddc9d.appspot.com',
    messagingSenderId: '40882793956',
    appId: '1:40882793956:web:1d0ceebf21653ad2fb2bf1',
    measurementId: 'G-60Y7BNGVQT',
  },
  GRAPHQL_URI:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_GRAPHQL_URI ?? common.LOCAL_GRAPHQL_URI
      : common.LOCAL_GRAPHQL_URI,
};
