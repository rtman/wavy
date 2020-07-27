const baseConfig = require('../../.eslintrc.js');

module.exports = {
  ...baseConfig,
  env: {
    ...baseConfig.env,
    node: true,
  },
  rules: {
    ...baseConfig.rules,
    camelcase: ['error', { properties: 'never' }],
  },
};
