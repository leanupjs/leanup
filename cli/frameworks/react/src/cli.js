import { ReactCLI } from './react-cli';
const packageJson = require('../package.json');
const cli = new ReactCLI('react', packageJson.version);
cli.parse();
