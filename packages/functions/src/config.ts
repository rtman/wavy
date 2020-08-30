import * as admin from 'firebase-admin';

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);

export const makeConfig = () => {
  switch (firebaseConfig.projectId) {
    case 'groov-development-ddc9d':
      // production
      return {
        serviceAccount: require('../firebase_environments/production/get-it-a1b2d-firebase-adminsdk-t21os-25ffa935bf.json'),
        firebaseConfig: {
          ...firebaseConfig,
          credential: admin.credential.cert(serviceAccount),
          databaseURL: 'https://groov-development-ddc9d.firebaseio.com',
        },
        // Include a Service Account Key to use a Signed URL

        // gcs: require('@google-cloud/storage')({
        //   keyFilename:
        //     '../firebase_environments/production/get-it-a1b2d-firebase-adminsdk-t21os-25ffa935bf.json',
        // }),
      };
    // oAuthConfig =  require('../firebase_environments/production/oAuth.json');
  }
};

export const config = makeConfig();
