#!/usr/bin/env node

import { CommonCLI } from './common-cli';
import { PackageJson } from './interfaces';

const packageJson = <PackageJson>require('../package.json');

const cli = new CommonCLI('leanup', packageJson.version);
cli.parse();
