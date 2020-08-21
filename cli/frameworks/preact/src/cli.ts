import { PreactCLI } from './preact-cli';
import { PackageJson } from '@leanup/cli/lib/interfaces';

const packageJson = <PackageJson>require('../package.json');

const cli = new PreactCLI('preact', packageJson.version);
cli.parse();
