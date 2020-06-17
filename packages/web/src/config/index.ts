import { commonSettings, getEnvironmentSettings } from './settings';

const environmentSettings = getEnvironmentSettings(
  process.env.REACT_APP_JS_BUILD_FLAVOR
);

// Combine native config and generated JS config
export const config: Config = {
  JS_BUILD_FLAVOUR: process.env.REACT_APP_JS_BUILD_FLAVOR,
  ...commonSettings,
  ...environmentSettings,
};
