import { AbstractCLI } from '@leanup/cli/lib/abstract-cli';
import { BuildOps } from '@leanup/cli/lib/interfaces';

interface PwaOps extends BuildOps {
  pwa: string;
}

module.exports = (CLI: AbstractCLI) => {
  CLI.addOptionToCommand(
    ['build', 'serve'],
    [{ flags: '--pwa [generateSW|injectManifest]', description: 'gernerate pwa manifest and service worker' }]
  );
  CLI.addActionToCommand(['build', 'serve'], (options: PwaOps) => {
    const spawnArgs = [];
    if (options.pwa) {
      spawnArgs.push(`--pwa=${options.pwa}`);
    }
    return spawnArgs;
  });
};
