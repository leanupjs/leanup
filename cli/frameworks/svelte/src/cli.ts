#!/usr/bin/env node

import { SvelteCLI } from './svelte-cli';
import { PackageJson } from '@leanup/cli/lib/interfaces';

const packageJson = <PackageJson>require('../package.json');

const cli = new SvelteCLI('svelte', packageJson.version);
cli.parse();
