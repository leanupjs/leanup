#!/usr/bin/env node

import { PackageJson } from '@leanup/cli/lib/interfaces';

import { LitElementCLI } from './lit-element-cli';

const packageJson = <PackageJson>require('../package.json');

const cli = new LitElementCLI('lit-element', packageJson.version);
cli.parse();
