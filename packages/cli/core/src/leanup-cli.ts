import * as path from 'path';

import { CommonCLI } from './common-cli';
import { CreateOps } from './interfaces';

export class LeanupCLI extends CommonCLI {
  constructor(name: string, version: string) {
    super(name, version);

    this.addActionToCommand('create', (options: CreateOps) => {
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
          this.copyAndPrint(path.join(require(`@leanup/${plugin}`), 'template'), '', {
            ...options,
            overwrite: true,
          });
        } catch (error) {}
      });
    });
  }
}
