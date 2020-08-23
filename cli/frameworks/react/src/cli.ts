#!/usr/bin/env node

import { ReactCLI } from './react-cli';
import { PackageJson } from '@leanup/cli/lib/interfaces';

const packageJson = <PackageJson>require('../package.json');

const cli = new ReactCLI('react', packageJson.version);
cli.parse();
