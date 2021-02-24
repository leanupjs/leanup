#!/usr/bin/env node

import { PackageJson } from './interfaces';
import { LeanupCLI } from './leanup-cli';

const packageJson = <PackageJson>require('../package.json');

const cli = new LeanupCLI('', packageJson.version);
cli.parse();
