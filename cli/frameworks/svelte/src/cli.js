import { SvelteCLI } from './svelte-cli';
const packageJson = require('../package.json');
const cli = new SvelteCLI('svelte', packageJson.version);
cli.parse();
