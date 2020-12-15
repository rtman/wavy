import { AllEnvVariants, EnvironmentSettings } from 'types';

import { beta } from './beta';
import { common } from './common';
import { development } from './development';
import { internal } from './internal';
import { production } from './production';

export const environments: AllEnvVariants = {
  beta,
  development,
  internal,
  production,
};

const envLowerCase = (process.env.REACT_APP_BUILD_VARIANT ?? '').toLowerCase();
const environmentSettings =
  envLowerCase in environments
    ? { ...environments[envLowerCase], ...common }
    : {};

console.log('*debug* environmentSettings', environmentSettings);

export const settings: EnvironmentSettings = {
  BUILD_VARIANT: process.env.REACT_APP_BUILD_VARIANT,
  ...environmentSettings,
};
