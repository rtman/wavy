import {
  AllEnvVariants,
  CommonEnv,
  EnvironmentSettings,
  EnvVariant,
} from 'types';

import { beta } from './beta';
import { common } from './common';
import { development } from './development';
import { internal } from './internal';
import { production } from './production';

const environments: AllEnvVariants = {
  beta,
  development,
  internal,
  production,
};

const envLowerCase = (process.env.REACT_APP_BUILD_VARIANT ?? '').toLowerCase();

let environmentSettings: (EnvVariant & CommonEnv) | undefined;

switch (envLowerCase) {
  case 'beta':
    environmentSettings = { ...environments.beta, ...common };
    break;

  case 'development':
    environmentSettings = { ...environments.development, ...common };
    break;

  case 'internal':
    environmentSettings = { ...environments.internal, ...common };
    break;

  case 'production':
    environmentSettings = { ...environments.production, ...common };
    break;

  default:
    environmentSettings = { ...environments.development, ...common };
    break;
}

export const settings: EnvironmentSettings = {
  BUILD_VARIANT: process.env.REACT_APP_BUILD_VARIANT ?? '',
  ...environmentSettings,
};
