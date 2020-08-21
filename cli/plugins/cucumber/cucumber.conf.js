// Link: https://nightwatch-api.netlify.app/cucumber/

const fs = require('fs');
const path = require('path');
const { setDefaultTimeout, After, AfterAll, BeforeAll } = require('cucumber');
const { createSession, closeSession, startWebDriver, stopWebDriver, getNewScreenshots } = require('nightwatch-api');
const reporter = require('cucumber-html-reporter');

setDefaultTimeout(60000);

BeforeAll(async () => {
  await startWebDriver({ env: process.env.NIGHTWATCH_ENV, headless: process.argv.indexOf('--headless') >= 0 });
  await createSession();
});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();

  const reportDir = path.resolve(process.cwd(), '.reports/');
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir);
  }

  setTimeout(() => {
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: path.resolve(reportDir, 'cucumber/report.json'),
      output: path.resolve(reportDir, 'cucumber/report.html'),
      reportSuiteAsScenarios: true,
      launchReport: false,
      metadata: {
        'App Version': '0.0.0',
        'Test Environment': 'DEMO'
      }
    });
  }, 1000);
});

After(function() {
  getNewScreenshots().forEach(file => this.attach(fs.readFileSync(file), 'image/png'));
});
