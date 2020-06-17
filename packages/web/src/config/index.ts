import { commonSettings, getEnvironmentSettings } from './settings';

const environmentSettings = getEnvironmentSettings(
  process.env.REACT_APP_JS_BUILD_FLAVOR
);

// Combine native config and generated JS config
export const config = {
  JS_BUILD_FLAVOR: process.env.REACT_APP_JS_BUILD_FLAVOR,
  ...commonSettings,
  ...environmentSettings,
};
