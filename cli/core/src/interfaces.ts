import { CommonCLI } from './common-cli';

export interface CommonOps {
  silent: boolean;
}

export interface CreateOps extends CommonOps {
  install: boolean;
  namespace: string;
  overwrite: boolean;
  update: boolean;
}

export interface BuildOps extends CommonOps {
  environment: string;
  template: string;
  include: string;
  mode: string;
}

export interface ServeOps extends BuildOps {
  open: boolean;
  host: string;
  port: number;
}

export interface E2eTestOps extends CommonOps {
  env: string;
  filter: string;
  headless: boolean;
}

export interface FixOps extends CommonOps {
  fix: boolean;
}

export interface UnitTestOps extends CommonOps {
  watch: boolean;
}

export interface PackageJson {
  bin: Object;
  version: string;
}
