import { AbstractCLI } from '@leanup/cli/lib/abstract-cli';
import { BuildOps } from '@leanup/cli/lib/interfaces';

interface AddonOps extends BuildOps {
  analyzer: boolean;
  gzip: boolean;
  worker: boolean;
}

module.exports = (CLI: AbstractCLI) => {
  CLI.addOptionToCommand(
    ['build', 'serve'],
    [
      { flags: '--analyzer', description: 'generate an addional analyzer report' },
      { flags: '--gzip', description: 'addional file compression' },
    ]
  );
  CLI.addActionToCommand(['build', 'serve'], (options: AddonOps) => {
    const spawnArgs = [];
    if (options.analyzer) {
      spawnArgs.push(`--analyzer`);
    }
    if (options.gzip) {
      spawnArgs.push(`--gzip`);
    }
    return spawnArgs;
  });
  CLI.addOptionToCommand('serve', [{ flags: '--worker', description: 'split application separate worker files' }]);

  CLI.addActionToCommand('serve', (options: AddonOps) => {
    const spawnArgs = [];
    if (options.worker) {
      spawnArgs.push(`--worker`);
    }
    return spawnArgs;
  });
};
