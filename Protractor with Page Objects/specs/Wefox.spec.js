var Dashboard = require('../pages/dashboard.pom');
var loginPage = require('../pages/login.pom');

describe('Dashboard tests', function() {

    it('Check if the login page is correctly accessed', function() {
        loginPage.get();
        expect(loginPage.getTitle()).toEqual('Jetzt anmelden'); //Check if the Title of the page is "Jetzt anmelden"
    });

    it('should log into the dashboard', function() {
        loginPage.login("aqawefox+techtest@wefoxgroup.co", "qwertyasdf"); //Log in
    });

    it('Check if the profile page is loaded', function() {
        expect(Dashboard.getTitleWhite()).toEqual('Dashboard'); //Check if the Title of the page is "Dashboard"
    });

    it('Check if agent broker image is loaded', function() {
        expect(Dashboard.agentImagePresent()).toBe(true); //Check if the agent broker image is present
    });

    it('Click on contracts sections and check the label “... no contracts yet”.', function() {
        Dashboard.clickContracts(); //click on the Contract link
        expect(Dashboard.checkLabel()).toEqual('... no contracts yet'); // Check if the mention 'no contracts yet' is present
    });

    it('Click on Personal Data and check if the page is loaded', function() {
        Dashboard.clickAccount(); //click on the Personal Data link
        expect(Dashboard.getTitlePages()).toEqual('Personal Data'); //Check if the Title of the page is "Personal Data"
    });

    it('Click on Logout and check if the Wefox page is loaded', function() {
        Dashboard.clickLogOut(); //click on the Personal Data link
        expect(Dashboard.getHomepageTitle()).toContain('wefox'); //Check if the Title of the page is "Personal Data"
    });
});
