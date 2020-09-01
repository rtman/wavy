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
          // dev
          return {
            firebaseConfig,
            credential: admin.credential.cert(
              'secrets/dev/groov-development-ddc9d-firebase-adminsdk-9rr20-ced53ec6f8.json'
            ),
          };
      }
    }

    return;
  };

  const config_ = makeConfig();

  admin.initializeApp({
    credential: config_?.credential,
    storageBucket: config_?.firebaseConfig.storageBucket,
  });

  return config_;
};
