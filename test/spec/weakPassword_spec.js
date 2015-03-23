describe('user signup', function (){
  beforeEach(function() {
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
    expect(element(by.binding('error')).getText()).toEqual('Password should be longer');
  });
});
