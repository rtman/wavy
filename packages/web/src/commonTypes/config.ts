export interface EnvironmentSettings extends EnvVariant, CommonEnv {
  BUILD_VARIANT: string;
}

export interface AllEnvVariants {
  beta: EnvVariant;
  development: EnvVariant;
  internal: EnvVariant;
  production: EnvVariant;
}

export interface CommonEnv {
  IP_IFY_API_KEY: string;
  LOCAL_GRAPHQL_URI: string;
}

export interface EnvVariant {
  FIREBASE_CONFIG: FirebaseConfig;
  GRAPHQL_URI: string;
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
