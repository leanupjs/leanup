#!/usr/bin/env node

import { PackageJson } from '@leanup/cli/lib/interfaces';

import { CommonCLI } from './common-cli';

const packageJson = <PackageJson>require('../package.json');

const cli = new CommonCLI('leanup', packageJson.version);
cli.parse();
