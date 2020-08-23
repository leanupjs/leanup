import * as path from 'path';
import { CommonCLI } from '@leanup/cli/lib/common-cli';
export class AngularJSCLI extends CommonCLI {
    constructor(name, version) {
        super(name, version);
        this.addActionToCommand('create', (options) => {
            this.copyAndPrint(path.join(__dirname, '../', 'template'), '', options);
        });
    }
}
