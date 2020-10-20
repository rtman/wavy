export interface EnvironmentSettings extends EnvVariant {
  BUILD_VARIANT: string;
}

export interface AllEnvVariants {
  beta: EnvVariant;
  development: EnvVariant;
  internal: EnvVariant;
  production: EnvVariant;
}

export interface EnvVariant {
  FIREBASE_CONFIG: FirebaseConfig;
}

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}
