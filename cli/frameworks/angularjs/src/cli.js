import { AngularJSCLI } from './angularjs-cli';
const packageJson = require('../package.json');
const cli = new AngularJSCLI('angularjs', packageJson.version);
cli.parse();
