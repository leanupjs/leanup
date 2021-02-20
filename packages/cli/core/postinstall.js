// #!/usr/bin/env node

'use strict';

function isTrue(value) {
  return !!value && value !== '0' && value !== 'false';
}

let envDisable = isTrue(process.env.DISABLE_OPENCOLLECTIVE) || isTrue(process.env.CI);
let logLevel = process.env.npm_config_loglevel;
let logLevelDisplay = ['silent', 'error', 'warn'].indexOf(logLevel) > -1;

if (!envDisable && !logLevelDisplay) {
  console.log(`Thank you for using \x1b[32m@leanup/cli\x1b[37m.
--------------------------------
Create a ticket if you have ideas or advices on how we can further simplify this tool: \x1b[34mhttps://github.com/leanupjs/leanup/issues\x1b[37m
`);
}
