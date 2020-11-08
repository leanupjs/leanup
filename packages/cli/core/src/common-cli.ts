import * as path from 'path';

import { AbstractCLI, CommandOption, getProjectName } from './abstract-cli';
import {
  BuildOps,
  CommonOps,
  CreateOps,
  E2eTestOps,
  FixOps,
  ServeOps,
  UnitTestCoverageOps,
  UnitTestOps,
} from './interfaces';

export const commonOptions: CommandOption[] = [
  {
    flags: '-s, --silent',
    description: 'minimal consoles spending',
  },
];

export const webpackOptions: CommandOption[] = [
  { flags: '-e, --environment <environment>', description: 'technical environment (CMS)' },
  { flags: '-t, --template <template>', description: 'corporate design (Style)' },
  { flags: '-i, --include <include>', description: 'add node_modules to webpack loader' },
];

export const buildOptions: CommandOption[] = webpackOptions.concat([
  { flags: '-m, --mode [development|producation]', description: 'webpack transformation mode', default: 'production' },
]);

export const serveOptions: CommandOption[] = webpackOptions.concat([
  { flags: '-m, --mode [development|producation]', description: 'webpack transformation mode', default: 'development' },
]);

export class CommonCLI extends AbstractCLI {
  constructor(name: string, version: string) {
    super(name, version);

    this.addCommand(
      'create',
      'Create a new project.',
      [
        { flags: '-n, --namespace <namespace>', description: 'individual npm namespace (@.../)' },
        { flags: '-o, --overwrite', description: 'do overwrite existing files' },
      ].concat(commonOptions),
      (options: CreateOps): string[] => {
        this.consoleLog(`Project name: ${getProjectName(options.namespace)}`, options.silent);

        // Core and Vanilla
        this.copyAndPrint(path.join(__dirname, '../template'), '', options);

        // Features
        ['e2e', 'format', 'lint', 'test'].forEach((plugin) => {
          try {
            this.copyAndPrint(path.join(require(`@leanup/cli-core-${plugin}`), 'template'), '', options);
          } catch (error) {}
        });

        // Plugins
        ['cli-addons', 'cli-cucumber', 'cli-graphql', 'cli-pwa', 'cli-webhint', 'git-hooks'].forEach((plugin) => {
          try {
            this.copyAndPrint(path.join(require(`@leanup/${plugin}`), 'template'), '', options);
          } catch (error) {}
        });

        return ['npm', 'install'];
      }
    );

    this.addCommand(
      'serve',
      'Developing (https://webpack.js.org/)',
      serveOptions
        .concat([
          { flags: '-o, --open', description: 'open the default browser' },
          { flags: '--host <host>', description: 'dev server host' },
          { flags: '-p, --port <port>', description: 'port' },
        ])
        .concat(commonOptions),
      (options: ServeOps): string[] => {
        const spawnArgs = ['webpack', 'serve', '--devtool=source-map'];
        if (options.environment) {
          spawnArgs.push(`--environment=${options.environment}`);
        }
        if (options.template) {
          spawnArgs.push(`--template=${options.template}`);
        }
        if (options.include) {
          spawnArgs.push(`--include=${options.include}`);
        }
        if (options.open) {
          console.log(`The '--open' option is temporarily disabled: https://github.com/leanupjs/leanup/issues/36`);
          // spawnArgs.push('--open');
        }
        if (options.host) {
          spawnArgs.push(`--host=${options.host}`);
        }
        if (options.port) {
          spawnArgs.push(`--port=${options.port}`);
        }
        if (options.mode) {
          spawnArgs.push(`--mode=${options.mode}`);
        }
        return spawnArgs;
      }
    );

    this.addCommand(
      'build',
      'Building (https://webpack.js.org/)',
      buildOptions.concat(commonOptions),
      (options: BuildOps): string[] => {
        const spawnArgs = ['webpack'];
        if (options.environment) {
          spawnArgs.push(`--env=${options.environment}`);
        }
        if (options.template) {
          spawnArgs.push(`--template=${options.template}`);
        }
        if (options.include) {
          spawnArgs.push(`--include=${options.include}`);
        }
        if (options.mode) {
          spawnArgs.push(`--mode=${options.mode}`);
        }
        return spawnArgs;
      }
    );

    this.addCommand(
      'e2e',
      'E2E-Testing (https://nightwatchjs.org/)',
      [
        { flags: '-e, --env <environment>', description: 'test running environment' },
        { flags: '-f, --filter <filter>', description: 'filter test files' },
        {
          flags: '--headless',
          description: 'run tests in the headless mode',
        },
      ].concat(commonOptions),
      (options: E2eTestOps): string[] => {
        const spawnArgs = ['nightwatch'];
        if (options.env) {
          spawnArgs.push(`--env=${options.env}`);
        }
        if (options.filter) {
          spawnArgs.push(`--filter=${options.filter}`);
        }
        if (options.headless) {
          spawnArgs.push('--headless');
        }
        return spawnArgs;
      }
    );

    this.addCommand(
      'format',
      'Formatter (https://prettier.io/)',
      [{ flags: '-f, --fix', description: 'fix the code format' }].concat(commonOptions),
      (options: FixOps): string[] => {
        const spawnArgs = ['prettier'];
        if (options.fix) {
          spawnArgs.push('--write');
        } else {
          spawnArgs.push('--check');
        }
        spawnArgs.push(`"{src,tests}/**"`);
        return spawnArgs;
      }
    );

    this.addCommand(
      'lint',
      'Linter (ESLint: https://eslint.org/)',
      [{ flags: '-f, --fix', description: 'fix the lint findings' }].concat(commonOptions),
      (options: FixOps): string[] => {
        const spawnArgs = ['eslint'];
        if (options.fix) {
          spawnArgs.push('--fix');
        }
        spawnArgs.push(`"{src,tests}/**/*.{html,js,json,jsx,ts,tsx,gql,graphql}"`); // temporarily exclude JSON
        return spawnArgs;
      }
    );

    this.addCommand(
      'test',
      'Unit-Testing (https://mochajs.org/)',
      [{ flags: '-w, --watch', description: 'run tests in watch mode' }].concat(commonOptions),
      (options: UnitTestOps): string[] => {
        const spawnArgs = ['cross-env', 'NODE_ENV=test', 'mocha'];
        if (options.watch) {
          spawnArgs.push('--watch');
        }
        return spawnArgs;
      }
    );

    this.addCommand(
      'coverage',
      'Unit-Test-Coverage (https://istanbul.js.org/)',
      [{ flags: '-c, --check-coverage', description: 'check coverage watermarks' }].concat(commonOptions),
      (options: UnitTestCoverageOps): string[] => {
        const spawnArgs = ['cross-env', 'NODE_ENV=test', 'nyc'];
        if (options.checkCoverage) {
          spawnArgs.push('--check-coverage');
        }
        spawnArgs.push('mocha');
        return spawnArgs;
      }
    );

    ['addons', 'cucumber', 'graphql', 'pwa', 'webhint'].forEach((plugin) => {
      try {
        require(`@leanup/cli-${plugin}/lib/cli`)(this);
      } catch (error) {}
    });
  }
}
