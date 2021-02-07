#!/usr/bin/env node

import { PackageJson } from '@leanup/cli/lib/interfaces';

import { PreactCLI } from './preact-cli';

const packageJson = <PackageJson>require('../package.json');

const cli = new PreactCLI('preact', packageJson.version);
cli.parse();
