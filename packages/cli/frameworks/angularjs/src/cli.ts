#!/usr/bin/env node

import { PackageJson } from '@leanup/cli/lib/interfaces';

import { AngularJSCLI } from './angularjs-cli';

const packageJson = <PackageJson>require('../package.json');

const cli = new AngularJSCLI('angularjs', packageJson.version);
cli.parse();
