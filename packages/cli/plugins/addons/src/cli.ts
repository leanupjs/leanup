import { AbstractCLI } from '@leanup/cli/lib/abstract-cli';
import { BuildOps } from '@leanup/cli/lib/interfaces';

interface AddonOps extends BuildOps {
  gzip: boolean;
  worker: boolean;
}

module.exports = (CLI: AbstractCLI) => {
  CLI.addActionToCommand(['build', 'serve'], (options: AddonOps) => {
    const spawnArgs = [];
    if (options.gzip) {
      spawnArgs.push(`--gzip`);
    }
    if (options.worker) {
      spawnArgs.push(`--worker`);
    }
    return spawnArgs;
  });
};
