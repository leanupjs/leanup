#!/usr/bin/env node

import { PackageJson } from '@leanup/cli/lib/interfaces';

import { SvelteCLI } from './svelte-cli';

const packageJson = <PackageJson>require('../package.json');

const cli = new SvelteCLI('svelte', packageJson.version);
cli.parse();
