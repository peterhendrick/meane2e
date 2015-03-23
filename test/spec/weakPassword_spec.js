describe('user signup', function (){
  beforeEach(function() {
    // browser.get('https://meane2e.herokuapp.com/#!/')
    browser.get('http://localhost:3000')
    browser.waitForAngular();
  });
  afterEach(function() {

  });

  it('should reject sign up because of miserable password', function () {
    element(by.id('signUp')).click();
    element(by.id('firstName')).sendKeys('user');
    element(by.id('lastName')).sendKeys('name');
    element(by.id('email')).sendKeys('usera@name.com');
    element(by.id('username')).sendKeys('username');
    element(by.id('password')).sendKeys('pass');
    element(by.id('submitButton')).click();
    expect(element(by.binding('error')).isPresent()).toBeTruthy();
  });
});
// var repo = require('../elementRepo.js');
// describe('user sign up', function (){
//   beforeEach(function() {
//     // browser.get('https://meane2e.herokuapp.com/#!/')
//     browser.get('http://localhost:3000')
//     browser.waitForAngular();
//   });
//   afterEach(function() {
//
//   });
//   it('should reject sign up because of miserable password', function () {
//     browser.waitForAngular();
//     repo.signUpHeaderButton.click();
//     repo.firstName.sendKeys('user');
//     repo.lastName.sendKeys('name');
//     repo.email.sendKeys('usera@name.com');
//     repo.username.sendKeys('username');
//     repo.password.sendKeys('pass');
//     repo.submitButton.click();
//     expect(repo.error.isPresent()).toBeTruthy();
//   });
// });
