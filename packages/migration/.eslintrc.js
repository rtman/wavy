const baseConfig = require('../../.eslintrc.js');

module.exports = {
  ...baseConfig,
  env: {
    node: true,
    // browser: true,
    // commonjs: true,
    // es6: true,
  },
  rules: {
    ...baseConfig.rules,
    camelcase: ['error', { properties: 'never' }],
  },
};
