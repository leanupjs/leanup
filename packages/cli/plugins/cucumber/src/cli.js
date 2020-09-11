import { commonOptions } from '@leanup/cli/lib/common-cli';
module.exports = (CLI) => {
    const fs = require('fs');
    const path = require('path');
    CLI.addCommand('cucumber', 'E2E-Testing (https://cucumber.io/)', [
        { flags: '-e, --env <env>', description: 'test running environment' },
        { flags: '--headless', description: 'run tests in the headless mode' },
    ].concat(commonOptions), (options) => {
        let reportDir = path.resolve(process.cwd(), '.reports');
        if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir);
        }
        reportDir = path.resolve(reportDir, 'cucumber');
        if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir);
        }
        let spawnArgs = ['cross-env'];
        if (options.env) {
            spawnArgs.push(`NIGHTWATCH_ENV=${options.env}`);
        }
        spawnArgs = spawnArgs.concat([
            'cucumber-js',
            'tests/cucumber/features/**/*.feature',
            '--require',
            '@babel/register',
            '--require',
            'cucumber.conf.js',
            '--require',
            'tests/cucumber/step-definitions',
            '--format',
            'node_modules/cucumber-pretty',
            '--format',
            'json:.reports/cucumber/report.json',
        ]);
        if (options.filter) {
            spawnArgs.push(`--filter=${options.filter}`);
        }
        if (options.headless) {
            spawnArgs.push('--headless');
        }
        return spawnArgs;
    });
};
