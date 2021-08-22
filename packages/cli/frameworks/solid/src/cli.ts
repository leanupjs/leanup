#!/usr/bin/env node

import { PackageJson } from '@leanup/cli/lib/interfaces';

import { SolidCLI } from './solid-cli';

const packageJson = <PackageJson>require('../package.json');

const cli = new SolidCLI('solid', packageJson.version);
cli.parse();
