import { AllEnvVariants, EnvironmentSettings } from 'commonTypes';

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

const envLowerCase = (process.env.BUILD_VARIANT ?? '').toLowerCase();
const environmentSettings =
  envLowerCase in environments
    ? { ...environments[envLowerCase], ...common }
    : {};

export const settings: EnvironmentSettings = {
  BUILD_VARIANT: process.env.BUILD_VARIANT,
  ...environmentSettings,
};
