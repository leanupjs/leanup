import { Vue3CLI } from './vue3-cli';
const packageJson = require('../package.json');
const cli = new Vue3CLI('vue3', packageJson.version);
cli.parse();
