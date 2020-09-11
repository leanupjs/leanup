import { commonOptions } from '@leanup/cli/lib/common-cli';
module.exports = (CLI) => {
    CLI.addCommand('hint', 'Accessibility (Webhint: https://webhint.io/)', [{ flags: '-u, --url <url>', description: 'website url' }].concat(commonOptions), (options) => {
        const spawnArgs = ['hint', '--config', 'node_modules/@leanup/cli-core-hint/.hintrc'];
        if (options.url) {
            spawnArgs.push(options.url);
        }
        return spawnArgs;
    });
};
