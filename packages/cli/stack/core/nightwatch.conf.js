const path = require('path');

const COMMON = {
  acceptInsecureCerts: true,
  javascriptEnabled: true,
  acceptSslCerts: true,
};
const CHROME = {
  ...COMMON,
  browserName: 'chrome',
  chromeOptions: {
    w3c: false,
  },
};
const FIREFOX = {
  ...COMMON,
  browserName: 'firefox',
};

const reportDir = path.resolve(process.cwd(), '.reports/nightwatch');

module.exports = {
  src_folders: ['tests/e2e'],
  output_folder: reportDir,
  globals_path: path.resolve(process.cwd(), 'nightwatch.global.js'),
  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        path: path.resolve(reportDir, 'screenshots'),
        on_failure: true,
      },
    },
    chrome: {
      webdriver: {
        start_process: true,
        server_path: require('chromedriver').path,
        port: 9515,
      },
      desiredCapabilities: CHROME,
    },
    firefox: {
      webdriver: {
        start_process: true,
        server_path: require('geckodriver').path,
        port: 4444,
      },
      desiredCapabilities: FIREFOX,
    },
    selenium: {
      selenium: {
        start_process: true,
        port: 4444,
        server_path: require('selenium-server').path,
        cli_args: {
          'webdriver.gecko.driver': require('geckodriver').path,
          'webdriver.chrome.driver': require('chromedriver').path,
        },
      },
    },
    seleniumChrome: {
      extends: 'selenium',
      desiredCapabilities: CHROME,
    },
    seleniumFirefox: {
      extends: 'selenium',
      desiredCapabilities: FIREFOX,
    },
    seleniumHub: {
      selenium: {
        port: 4444,
        host: 'triton927.startdedicated.de',
      },
    },
    seleniumHubChrome: {
      extends: 'seleniumHub',
      desiredCapabilities: CHROME,
    },
    seleniumHubFirefox: {
      extends: 'seleniumHub',
      desiredCapabilities: FIREFOX,
    },
  },
};
