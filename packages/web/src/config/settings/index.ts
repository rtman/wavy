import { developmentSettings } from './development';
import { productionSettings } from './production';

export { commonSettings } from './common';
// import { betaSettings } fom './beta';

const settings: BuildFlavorsObject = {
  // commonSettings value doesnt work for some reason
  common: {},
  //   beta: betaSettings,
  development: developmentSettings,
  production: productionSettings,
};

export const getEnvironmentSettings = (
  env: string | undefined
): BuildFlavorsObject | {} => {
  if (env === undefined) {
    return {};
  }

  const envLowerCase = env.toLowerCase();

  return envLowerCase in settings ? settings[envLowerCase] : {};
};
