#!/usr/bin/env node

import { VueCLI } from './vue-cli';
import { PackageJson } from '@leanup/cli/lib/interfaces';

const packageJson = <PackageJson>require('../package.json');

const cli = new VueCLI('vue', packageJson.version);
cli.parse();
