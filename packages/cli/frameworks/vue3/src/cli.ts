#!/usr/bin/env node

import { PackageJson } from '@leanup/cli/lib/interfaces';

import { Vue3CLI } from './vue3-cli';

const packageJson = <PackageJson>require('../package.json');

const cli = new Vue3CLI('vue3', packageJson.version);
cli.parse();
