export { commonSettings } from './common';
// import { betaSettings } fom './beta';
import { developmentSettings } from './development';
import { productionSettings } from './production';

const settings: BuildFlavorsObject = {
  common: commonSettings,
  //   beta: betaSettings,
  development: developmentSettings,
  production: productionSettings
};

export const getEnvironmentSettings = (env: string | undefined): BuildFlavorsObject | {} => {
  if (env === undefined) {
    return {};
  }

  const envLowerCase = env.toLowerCase();

  return envLowerCase in settings ? settings[envLowerCase] : {};
};
