import * as path from 'path';

import { CommonCLI } from '@leanup/cli/lib/common-cli';
import { CreateOps } from '@leanup/cli/lib/interfaces';

export class SvelteCLI extends CommonCLI {
  constructor(name: string, version: string) {
    super(name, version);

    this.addFirstActionToCommand('create', (options: CreateOps) => {
      this.copyAndPrint(path.join(__dirname, '../', 'template'), '', options);
    });
  }
}
