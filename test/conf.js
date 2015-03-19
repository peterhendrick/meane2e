// var HtmlReporter = require('protractor-html-screenshot-reporter');
//
// var reporter = new HtmlReporter({
//   baseDirectory:'./test/results/',
//   docTitle: 'Protractor Test Results',
//   docName: 'confTestResults.html'
// });

exports.config = {

  // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
  //
  // chromeDriver: '../node_modules/protractor/selenium/chromedriver',

  sauceUser: 'peterhendrickoss',
  sauceKey: 'f255c676-818d-4162-973a-19f0be5274f2',
  //
  // sauceSeleniumAddress: null,

  specs: [
    'spec/*_spec.js'
  ],

  // Patterns to exclude.
  exclude: [
    'excludeTest_spec.js'
  ],

  // suites: {
  //   smoke: 'spec/smoketests/*.js',
  //   full: 'spec/*.js'
  // },

  capabilities: {
    // 'browserName': 'chrome'
    // 'browserName': 'firefox'
    // 'browserName': 'safari'

    // When using phantomjs, you need to include the binary.
    // 'browserName': 'phantomjs',
    // 'phantomjs.binary.path': './node_modules/phantomjs/bin/phantomjs',
  },

  multiCapabilities: [
    {
      'browserName': 'chrome',
    },
    {
      'browserName': 'firefox',
    },
    // When using phantomjs, you need to include the binary.
    {
      // 'browserName': 'phantomjs',
      // 'phantomjs.binary.path': './node_modules/phantomjs/bin/phantomjs',
    }
  ],

  maxSessions: -1,

  onPrepare: function() {
    // jasmine.getEnv().addReporter(reporter);
    // exports.server = require('../server.js');
  },

  // baseUrl: 'http://localhost:3000',

  // The timeout in milliseconds for each script run on the browser.
  allScriptsTimeout: 30000,

  // How long to wait for a page to load.
  getPageTimeout: 30000,

  framework: 'jasmine2',

};
