#!/usr/bin/env node

import { AngularCLI } from './angular-cli';
import { PackageJson } from '@leanup/cli/lib/interfaces';

const packageJson = <PackageJson>require('../package.json');

const cli = new AngularCLI('angular', packageJson.version);
cli.parse();
