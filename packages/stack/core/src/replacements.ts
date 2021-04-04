const path = require('path');
const packageJsonApp = require(path.join(process.cwd(), 'package.json'));
const packageJsonCli = require(path.join(process.cwd(), 'node_modules', '@leanup', 'stack', 'package.json'));

let proxyConfig;
try {
  proxyConfig = require(path.join(process.cwd(), `proxy.conf.json`));
} catch (error) {
  proxyConfig = {};
}

export interface Replacement {
  from: string | RegExp;
  to: string | Function;
}

export const REPLACEMENTS: Replacement[] = [];

// https://nodejs.org/dist/latest-v14.x/docs/api/process.html#process_process_env
// https://github.com/webpack/webpack/issues/7074#issuecomment-663855534
switch (process.env.NODE_ENV) {
  case 'development':
  case 'production':
    REPLACEMENTS.push({ from: '$$NODE_ENV$$', to: process.env.NODE_ENV });
}

// https://docs.npmjs.com/files/package.json#people-fields-author-contributors
if (typeof packageJsonApp.name === 'string') {
  REPLACEMENTS.push({ from: '$$APP_NAME$$', to: packageJsonApp.name });
}
if (typeof packageJsonApp.version === 'string') {
  REPLACEMENTS.push({ from: '$$APP_VERSION$$', to: packageJsonApp.version });
}
if (typeof packageJsonApp.author === 'string') {
  REPLACEMENTS.push({ from: '$$APP_AUTHOR$$', to: packageJsonApp.author });
} else if (typeof packageJsonApp.author === 'object' && packageJsonApp.author != null) {
  if (typeof packageJsonApp.author.name === 'string') {
    REPLACEMENTS.push({ from: '$$APP_AUTHOR_NAME$$', to: packageJsonApp.author.name });
  }
  if (typeof packageJsonApp.author.mail === 'string') {
    REPLACEMENTS.push({ from: '$$APP_AUTHOR_MAIL$$', to: packageJsonApp.author.mail });
  }
  if (typeof packageJsonApp.author.url === 'string') {
    REPLACEMENTS.push({ from: '$$APP_AUTHOR_URL$$', to: packageJsonApp.author.url });
  }
}
if (typeof packageJsonApp.homepage === 'string') {
  REPLACEMENTS.push({ from: '$$APP_HOMEPAGE$$', to: packageJsonApp.homepage });
}
if (typeof packageJsonCli.name === 'string') {
  REPLACEMENTS.push({ from: '$$CLI_NAME$$', to: packageJsonCli.name });
}
if (typeof packageJsonCli.version === 'string') {
  REPLACEMENTS.push({ from: '$$CLI_VERSION$$', to: packageJsonCli.version });
}
