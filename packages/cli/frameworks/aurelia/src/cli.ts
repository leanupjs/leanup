#!/usr/bin/env node

import { PackageJson } from '@leanup/cli/lib/interfaces';

import { AureliaCLI } from './aurelia-cli';

const packageJson = <PackageJson>require('../package.json');

const cli = new AureliaCLI('aurelia', packageJson.version);
cli.parse();
