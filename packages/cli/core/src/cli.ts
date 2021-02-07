#!/usr/bin/env node

import { CommonCLI } from './common-cli';
import { PackageJson } from './interfaces';

const packageJson = <PackageJson>require('../package.json');

const cli = new CommonCLI('', packageJson.version);
cli.parse();
