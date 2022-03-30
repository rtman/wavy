const env = require('../../../.env-cmdrc.json');
const fs = require('fs');

const inputArgs = process.argv.slice(2)[0].split(',');

let parsedJson = {};
inputArgs.forEach((arg) => {
  if (arg in env) {
    parsedJson = { ...parsedJson, ...env[arg] };
  }
});

let outputData = `env_variables:`;

Object.entries(parsedJson).forEach((e) => {
  if (!e[0].includes('REACT_APP')) {
    outputData += `\n  ${e[0]}: "${e[1]}"`;
  }
});

fs.writeFileSync('./generated_gae_env.yaml', outputData);

console.log(
  `generated_gae_env.yaml generated sucessfully - ${new Date().toLocaleTimeString()}`
);
