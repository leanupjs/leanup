import { AbstractCLI } from '@leanup/cli/lib/abstract-cli';
import { commonOptions } from '@leanup/cli/lib/common-cli';
import { CommonOps } from '@leanup/cli/lib/interfaces';

interface HintOps extends CommonOps {
  url: string;
}

module.exports = (CLI: AbstractCLI) => {
  CLI.addCommand(
    'hint',
    'Accessibility (Webhint: https://webhint.io/)',
    [{ flags: '-u, --url <url>', description: 'website url' }].concat(commonOptions),
    (options: HintOps) => {
      const spawnArgs = ['hint', '--config', 'node_modules/@leanup/cli-core-hint/.hintrc'];
      if (options.url) {
        spawnArgs.push(options.url);
      }
      return spawnArgs;
    }
  );
};
