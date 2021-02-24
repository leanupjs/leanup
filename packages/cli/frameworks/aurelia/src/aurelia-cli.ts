import * as path from 'path';

import { CreateOps } from '@leanup/cli/lib/interfaces';
import { LeanupCLI } from '@leanup/cli/lib/leanup-cli';

export class AureliaCLI extends LeanupCLI {
  constructor(name: string, version: string) {
    super(name, version);

    this.addActionToCommand('create', (options: CreateOps) => {
      this.copyAndPrint(path.join(__dirname, '../', 'template'), '', options);
    });
  }
}
