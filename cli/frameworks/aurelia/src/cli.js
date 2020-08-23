import { AureliaCLI } from './aurelia-cli';
const packageJson = require('../package.json');
const cli = new AureliaCLI('aurelia', packageJson.version);
cli.parse();
