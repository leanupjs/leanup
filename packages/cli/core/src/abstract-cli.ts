import * as chalk from 'chalk';
import { spawn } from 'child_process';
import * as commander from 'commander';
import * as deepmerge from 'deepmerge';
import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';

import { CommonOps, CreateOps } from './interfaces';

export interface CommandOption {
  flags: string;
  description: string;
  default?: string;
}

export interface CommandItem {
  command: commander.Command;
  actions: Function[];
}

export function getProjectName(namespace: string = '') {
  let projectName = path
    .resolve(process.cwd())
    .split('')
    .reverse()
    .join('')
    .replace(/(\\|\/).+/g, '')
    // .replace(/^([^\/]+\/)+/g, '')
    .split('')
    .reverse()
    .join('')
    .toLowerCase();

  if (typeof namespace === 'string' && namespace.length > 0) {
    projectName = `@${namespace}/${projectName}`;
  }
  return projectName;
}

const START = Date.now();
const PROJECT_NAME_REG_EXP = new RegExp(`@template/[a-z0-9]+`, 'g');

export abstract class AbstractCLI {
  private name: string;
  private version: string;
  private program = new commander.Command();
  private commands = new Map<string, CommandItem>();

  constructor(name: string, version: string) {
    this.name = name;
    this.version = version;
    this.program.name(name).version(version, '-v, --version', 'output the current version');
  }

  public parse() {
    this.program.parse(process.argv);
  }

  protected consoleLog(message: string, silent = false): void {
    if (silent === false) {
      console.log(message);
    }
  }

  public addCommand(name: string, description: string, options: CommandOption[], action: Function): void {
    const command = this.program.command(name);
    const actions: Function[] = [];

    this.commands.set(name, {
      command,
      actions,
    });

    this.setDescriptionToCommand(name, description);
    this.addOptionToCommand(name, options);
    this.addActionToCommand(name, action);

    command.action((options: CommonOps) => {
      let spawnArgs: string[] = [];
      actions.forEach((action) => {
        spawnArgs = spawnArgs.concat(action(options));
      });
      this.spawnCommand(spawnArgs, options.silent);
    });
  }

  private setDescriptionToCommand(name: string, description: string): void {
    this.commands.get(name)?.command.description(description);
  }

  public addOptionToCommand(name: string | string[], options: CommandOption[]): void {
    const names: string[] = Array.isArray(name) ? name : [name];
    names.forEach((name) => {
      const command = <commander.Command>this.commands.get(name)?.command;
      options.forEach((option) => command.option(option.flags, option.description, option.default));
    });
  }

  public addActionToCommand(name: string | string[], action: Function): void {
    const names: string[] = Array.isArray(name) ? name : [name];
    names.forEach((name) => {
      this.commands.get(name)?.actions.push(action);
    });
  }

  public addFirstActionToCommand(name: string | string[], action: Function): void {
    const names: string[] = Array.isArray(name) ? name : [name];
    names.forEach((name) => {
      this.commands.get(name)?.actions.unshift(action);
    });
  }

  private spawnCommand(args: string[], silent = false) {
    console.log(
      `
`,
      `${chalk.magenta.bold(`☀ ${chalk.underline(`@leanup/cli`)}${this.name != '' ? `-${this.name}` : ''}`)}`,
      `(v${this.version})`,
      chalk.italic.gray('execute the following pure command ...'),
      `
    >`,
      chalk.bold('npx'),
      chalk.italic(...args),
      `
`
    );
    return spawn('npx', args, {
      cwd: process.cwd(),
      shell: true,
      stdio: silent === false ? 'inherit' : undefined,
    }).on('exit', (code: number) => {
      if (code > 0) {
        console.log(
          `
`,
          chalk.red.bold(`✘ ${chalk.underline(`@leanup/cli`)}`),
          chalk.italic.gray('command execution ended with error'),
          chalk.white(`(in ${Date.now() - START} ms)`)
        );
        process.exit(code);
      }
      console.log(
        `
`,
        chalk.green.bold(`✔ ${chalk.underline(`@leanup/cli`)}`),
        chalk.italic.gray('command execution successfully completed'),
        chalk.white(`(in ${Date.now() - START} ms)`)
      );
    });
  }

  protected copyAndPrint(folder: string, subfolder = '', options: CreateOps): void {
    const projectName = getProjectName(options.namespace);

    options.onlyConfig = options.onlyConfig === true;

    const currentDir = path.join(folder, subfolder);
    let dirs: string[];
    try {
      dirs = fs.readdirSync(currentDir);
    } catch (error) {
      dirs = [];
    }
    dirs.forEach((dirent) => {
      const stat = fs.lstatSync(path.join(currentDir, dirent));
      const subDirent = `${subfolder}/${dirent}`.replace(/^\/+/, '');
      const relPath = `${subfolder}/${dirent.replace(/^_+/, '')}`.replace(/^\/+/, '');
      const dirPath = path.join(process.cwd(), relPath);
      if (stat.isDirectory()) {
        if (fs.existsSync(dirPath) === false) {
          fs.mkdirSync(dirPath);
          this.consoleLog(`${chalk.yellow.bold(relPath)} folder created`, options.silent);
        } else {
          this.consoleLog(`${chalk.blue.bold(relPath)} folder already exists`, options.silent);
        }
      } else if (stat.isFile()) {
        if (
          fs.existsSync(dirPath) === false ||
          relPath === 'package.json' ||
          relPath === 'tsconfig.json' ||
          options.overwrite === true
        ) {
          switch (path.extname(dirPath)) {
            case '.tsx':
            case '.ts':
            case '.js':
            case '.json':
            case '.html':
            case '.jsx':
            case '.vue':
            case '.svelte':
              let data = '';
              if (fs.existsSync(dirPath) === true && (relPath === 'package.json' || relPath === 'tsconfig.json')) {
                const destJson = fs.readFileSync(dirPath, { encoding: 'utf8' });
                const sourceJson = fs.readFileSync(path.join(folder, subDirent), { encoding: 'utf8' });
                data = deepmerge(JSON.parse(destJson), JSON.parse(sourceJson), {
                  arrayMerge: (destArray, sourceArray, options) => {
                    const mergedArray = destArray.concat(sourceArray);
                    return mergedArray.filter((item, index) => mergedArray.indexOf(item) === index);
                  },
                });
                data = prettier.format(JSON.stringify(data), {
                  parser: 'json',
                  printWidth: 120,
                  singleQuote: true,
                });
              } else {
                data = fs.readFileSync(path.join(folder, subDirent), { encoding: 'utf8' });
              }
              data = data.replace(PROJECT_NAME_REG_EXP, projectName);
              try {
                fs.unlinkSync(dirPath);
              } catch (error) {}
              fs.writeFileSync(dirPath, data, { encoding: 'utf8' });
              break;
            default:
              fs.copyFileSync(path.join(folder, subDirent), dirPath);
          }
          this.consoleLog(`${chalk.green.bold(relPath)} file created`, options.silent);
        } else {
          this.consoleLog(`${chalk.blue.bold(relPath)} file already exists`, options.silent);
        }
      }
      if (stat.isDirectory() && options.onlyConfig === false) {
        this.copyAndPrint(folder, subDirent, options);
      }
    });
  }
}
