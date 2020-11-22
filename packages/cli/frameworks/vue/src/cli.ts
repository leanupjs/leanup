#!/usr/bin/env node

import { PackageJson } from '@leanup/cli/lib/interfaces';

import { VueCLI } from './vue-cli';

const packageJson = <PackageJson>require('../package.json');

const cli = new VueCLI('vue', packageJson.version);
cli.parse();
