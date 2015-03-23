exports.config = {

  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',

  // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  chromeDriver: '../node_modules/protractor/selenium/chromedriver',

  // sauceUser: 'peterhendrickoss',
  // sauceKey: 'f255c676-818d-4162-973a-19f0be5274f2',
  //
  // sauceSeleniumAddress: null,

  specs: [
    './spec/*_spec.js',
    // './spec/weakPassword_spec.js',

  ],

  // Patterns to exclude.
  exclude: [
    'excludeTest_spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
    // 'browserName': 'firefox'
    // 'browserName': 'safari'
  },

  // multiCapabilities: [
  //   {
  //     'browserName': 'chrome',
  //   },
  //   {
  //     'browserName': 'firefox',
  //   },
  // ],


  onPrepare: function() {
    exports.server = require('../server.js');
  },

};
