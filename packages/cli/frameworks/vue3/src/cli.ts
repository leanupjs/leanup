#!/usr/bin/env node

import { Vue3CLI } from './vue3-cli';
import { PackageJson } from '@leanup/cli/lib/interfaces';

const packageJson = <PackageJson>require('../package.json');

const cli = new Vue3CLI('vue3', packageJson.version);
cli.parse();
