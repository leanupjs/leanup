#!/usr/bin/env node

import { PackageJson } from '@leanup/cli/lib/interfaces';

import { AngularCLI } from './angular-cli';

const packageJson = <PackageJson>require('../package.json');

const cli = new AngularCLI('angular', packageJson.version);
cli.parse();
