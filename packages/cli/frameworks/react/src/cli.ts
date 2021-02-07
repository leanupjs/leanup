#!/usr/bin/env node

import { PackageJson } from '@leanup/cli/lib/interfaces';

import { ReactCLI } from './react-cli';

const packageJson = <PackageJson>require('../package.json');

const cli = new ReactCLI('react', packageJson.version);
cli.parse();
