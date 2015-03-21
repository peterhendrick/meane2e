// var repo = require('../elementRepo.js');

describe('user', function (){
  beforeEach(function() {
    // browser.get('https://meane2e.herokuapp.com/#!/')
    browser.get('http://localhost:3000')
  });
  afterEach(function() {

  });

  it('should be able to sign up and recieve a message', function () {
    browser.waitForAngular();
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
// describe('user', function (){
//   beforeEach(function() {
//     // browser.get('https://meane2e.herokuapp.com/#!/')
//     browser.get('http://localhost:3000')
//   });
//   afterEach(function() {
//
//   });
//
//   it('should be able to sign up and recieve a message', function () {
//     browser.waitForAngular();
//     repo.signUpHeaderButton.click();
//     repo.firstName.sendKeys('user');
//     repo.lastName.sendKeys('name');
//     repo.email.sendKeys('usera@name.com');
//     element(by.id('username')).sendKeys('username');
//     element(by.id('password')).sendKeys('pass');
//     element(by.id('submitButton')).click();
//     expect(element(by.binding('error')).isPresent()).toBeTruthy();
//   });
// });
