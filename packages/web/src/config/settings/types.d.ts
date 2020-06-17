interface BuildFlavorsObject {
  common: CommonSettings;
  development: BuildFlavorSettings;
  production: BuildFlavorSettings;
}

interface Config extends JsConfig {
  JS_BUILD_FLAVOUR: string;
}

interface JsConfig extends CommonSettings, BuildFlavorSettings {}

// interface CommonSettings {}

interface BuildFlavorSettings {
  FIREBASE_CONFIG: FirebaseConfig;
}

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}
