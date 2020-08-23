import { VueCLI } from './vue-cli';
const packageJson = require('../package.json');
const cli = new VueCLI('vue', packageJson.version);
cli.parse();
