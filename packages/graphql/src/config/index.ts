import { AllEnvVariants, EnvironmentSettings, EnvVariant } from 'types';

import { beta } from './beta';
import { development } from './development';
import { internal } from './internal';
import { production } from './production';

const environments: AllEnvVariants = {
  beta,
  development,
  internal,
  production,
};

const envLowerCase = (process.env.BUILD_VARIANT ?? '').toLowerCase();

let environmentSettings: EnvVariant | undefined;

switch (envLowerCase) {
  case 'beta':
    environmentSettings = { ...environments.beta };
    break;

  case 'development':
    environmentSettings = { ...environments.development };
    break;

  case 'internal':
    environmentSettings = { ...environments.internal };
    break;

  case 'production':
    environmentSettings = { ...environments.production };
    break;

  default:
    environmentSettings = { ...environments.development };
    break;
}

export const settings: EnvironmentSettings = {
  BUILD_VARIANT: process.env.BUILD_VARIANT ?? '',
  ...environmentSettings,
};
