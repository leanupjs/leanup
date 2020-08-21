import { InfernoCLI } from './inferno-cli';
import { PackageJson } from '@leanup/cli/lib/interfaces';

const packageJson = <PackageJson>require('../package.json');

const cli = new InfernoCLI('inferno', packageJson.version);
cli.parse();
