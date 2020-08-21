const allureReporter = require('nightwatch-allure');
const path = require('path');
module.exports = {
  reporter: (results, done) => {
    const reporter = new allureReporter.NightwatchAllureReporter({
      folder: path.resolve(process.cwd(), '.reports/allure'),
    });
    reporter.write(results, done);
  },
};
