import { AngularJSCLI } from './angularjs-cli';
import { PackageJson } from '@leanup/cli/lib/interfaces';

const packageJson = <PackageJson>require('../package.json');

const cli = new AngularJSCLI('angularjs', packageJson.version);
cli.parse();
