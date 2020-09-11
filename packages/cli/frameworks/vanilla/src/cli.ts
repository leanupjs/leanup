#!/usr/bin/env node

import { PackageJson } from '@leanup/cli/lib/interfaces';
import { VanillaCLI } from './vanilla-cli';

const packageJson = <PackageJson>require('../package.json');

const cli = new VanillaCLI('vanilla', packageJson.version);
cli.parse();
