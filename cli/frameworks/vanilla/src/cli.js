import { VanillaCLI } from './vanilla-cli';
const packageJson = require('../package.json');
const cli = new VanillaCLI('vanilla', packageJson.version);
cli.parse();
