exports.config = {

  sauceUser: 'peterhendrickoss',
  sauceKey: 'f255c676-818d-4162-973a-19f0be5274f2',

  specs: [
    './spec/sauce/*_spec.js',
    // './spec/weakPassword_spec.js',
  ],

  // Patterns to exclude.
  exclude: [
    'excludeTest_spec.js'
  ],

  capabilities: {
    // 'browserName': 'chrome',
    // 'version': '41',
    'browserName': 'firefox',
    'version': '33',
    // 'browserName': 'safari',
    // // 'version': '8.0.4',
    'name': 'Mac Test',
    'platform': 'OSX 10.10',
    // 'name': 'Windows test',
    // 'platform': 'Windows 8.1',
    // 'name': 'Linux test',
    // 'platform': 'Linux',
  },

};
