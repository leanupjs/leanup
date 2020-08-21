import { AureliaCLI } from './aurelia-cli';
import { PackageJson } from '@leanup/cli/lib/interfaces';

const packageJson = <PackageJson>require('../package.json');

const cli = new AureliaCLI('aurelia', packageJson.version);
cli.parse();
