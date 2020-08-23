import { InfernoCLI } from './inferno-cli';
const packageJson = require('../package.json');
const cli = new InfernoCLI('inferno', packageJson.version);
cli.parse();
