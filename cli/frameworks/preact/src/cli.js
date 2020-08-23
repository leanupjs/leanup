import { PreactCLI } from './preact-cli';
const packageJson = require('../package.json');
const cli = new PreactCLI('preact', packageJson.version);
cli.parse();
