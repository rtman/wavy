import 'firebase-functions';

import * as admin from 'firebase-admin';

interface FirebaseConfig {
  databaseURL: string;
  storageBucket: string;
  projectId: string;
}
interface Config {
  firebaseConfig: FirebaseConfig;
  credential: admin.credential.Credential;
}

export const initConfig = () => {
  const makeConfig = (): Config | undefined => {
    if (process.env.FIREBASE_CONFIG) {
      const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
      switch (firebaseConfig.projectId) {
        case 'groov-development-ddc9d':
          // production
          return {
            // serviceAccount: require('../firebase_environments/production/get-it-a1b2d-firebase-adminsdk-t21os-25ffa935bf.json'),
            firebaseConfig,
            credential: admin.credential.cert(serviceAccount),

            // Include a Service Account Key to use a Signed URL

            // gcs: require('@google-cloud/storage')({
            //   keyFilename:
            //     '../firebase_environments/production/get-it-a1b2d-firebase-adminsdk-t21os-25ffa935bf.json',
            // }),
          };
        // oAuthConfig =  require('../firebase_environments/production/oAuth.json');
      }
    }

    return;
  };

  const config_ = makeConfig();

  admin.initializeApp();

  return config_;
};
