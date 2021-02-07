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

const DRIVERS = {
  chromedriver: null,
  geckodriver: null,
  'selenium-server': null,
};
function loadDriver(drivers) {
  drivers.forEach((driver) => {
    try {
      DRIVERS[driver] = require(driver);
    } catch (error) {
      throw new Error(`
        > Please install ${driver} package before: npm i -D ${driver}
`);
    }
  });
}
loadDriver([
  'chromedriver',
  // 'geckodriver',
  'selenium-server',
]);

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
        server_path: DRIVERS['chromedriver'].path,
        port: 9515,
      },
      desiredCapabilities: CHROME,
    },
    //   firefox: {
    //     webdriver: {
    //       start_process: true,
    //       server_path: DRIVERS['geckodriver'].path,
    //       port: 4444,
    //     },
    //     desiredCapabilities: FIREFOX,
    //   },
    selenium: {
      selenium: {
        start_process: true,
        port: 4444,
        server_path: DRIVERS['selenium-server'].path,
        cli_args: {
          // 'webdriver.gecko.driver': DRIVERS['geckodriver'].path,
          'webdriver.chrome.driver': DRIVERS['chromedriver'].path,
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
        host: 'selenium-hub.company.tld',
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
