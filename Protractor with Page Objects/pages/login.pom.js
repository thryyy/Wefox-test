var Dashboard = function() {

    this.EC = protractor.ExpectedConditions;
    this.image = element(by.css('img.wf-c-header-agent__image'));
    this.titleWhite = element(by.css('h1.wf-color-clear-white'));
    this.contract = element(by.css('[href="/contracts"]'));
    this.label = element(by.css('.col-xs > p:nth-child(2)'));
    this.account = element(by.css('[href="/account"]'));
    this.titlePages = element(by.css('h1.wf-u-center'));
    this.logOut = element(by.css('[href="/logout"]'));
    this.button = element(by.css('button[type="submit"]'));

    this.getTitleWhite = function() {
        return this.titleWhite.getText();
    };

    this.agentImagePresent = function() {
        return this.image.isPresent();
    };

    this.clickContracts = function() {
        this.contract.click();
        browser.wait(this.EC.visibilityOf(this.label), 3000); // Wait until the label is visible (page is loaded)
    };

    this.checkLabel = function() {
        return this.label.getText();
    };

    this.clickAccount = function() {
        this.account.click();
        browser.wait(this.EC.presenceOf(this.button), 3000); // Wait until the button is present (page is loaded)
    };

    this.getTitlePages = function() {
        return this.titlePages.getText();
    };

    this.clickLogOut = function() {
        this.logOut.click();
        browser.driver.sleep(3000);
        };

    this.getHomepageTitle = function() {
        return browser.getTitle();
        
    };
    
};

module.exports = new Dashboard();
