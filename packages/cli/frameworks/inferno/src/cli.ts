#!/usr/bin/env node

import { PackageJson } from '@leanup/cli/lib/interfaces';

import { InfernoCLI } from './inferno-cli';

const packageJson = <PackageJson>require('../package.json');

const cli = new InfernoCLI('inferno', packageJson.version);
cli.parse();
