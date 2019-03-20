var LoginPage = function() {

    this.EC = protractor.ExpectedConditions;
    this.title = element(by.css('h1.wf-u-mb-12'));
    this.focus = element(by.css('label[for="username"]'));
    this.overlay = element(by.css('.wf-c-loading'));
    this.userfield = element(by.name('username'));
    this.passwordfield = element(by.name('password'));
    this.LoginButton = element(by.css('button[type = "submit"]'));
    this.logOut = element(by.css('[href="/logout"]'));

    this.get = function() {
        browser.get('https://my.wefox.de/login');
    };

    this.clickFocus = function() {
        this.focus.click();
    };

    this.setName = function(name) {
        this.userfield.sendKeys(name);
    };

    this.setPassword = function(pwd) {
        this.passwordfield.sendKeys(pwd);
    };

    this.clickOnLoginBtn = function() {
        this.LoginButton.click();
    };


    this.getTitle = function() {
        return this.title.getText();
    };

    this.login = function(name, pwd) {
        browser.wait(this.EC.invisibilityOf(this.overlay), 3000); //Wait for the overlay to disappear 
        browser.wait(this.EC.elementToBeClickable(this.focus), 3000); 
        this.clickFocus();
        this.userfield.sendKeys(name);
        this.passwordfield.sendKeys(pwd);
        this.clickOnLoginBtn();
        browser.wait(this.EC.elementToBeClickable(this.logOut), 15000);  // Wait for the logout button to appear (dashboard loaded)
    };

};

module.exports = new LoginPage();
