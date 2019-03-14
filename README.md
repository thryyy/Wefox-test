### [Find the Nth smallest number](https://github.com/thryyy/Wefox-test/blob/master/SmallestNthest/SmallestNthest.js)
Generate 500 random numbers and print the nth smallest number.
- find the source code  [here](https://github.com/thryyy/Wefox-test/blob/master/SmallestNthest/SmallestNthest.js)

### [Palindrome](https://github.com/thryyy/Wefox-test/blob/master/Palindrome/Palindrome.js)
Create a program to recognize palindrome sentences (e.g. Race Car)
- find the source code  [here](https://github.com/thryyy/Wefox-test/blob/master/Palindrome/Palindrome.js)

### [Automated use case using Protractor](https://github.com/thryyy/Wefox-test/tree/master/Protractor)
Automate the next use case with Selenium Webdriver using Protractor and the page object pattern.

1. Go to“[https://my.wefox.de/login](https://my.wefox.de/login)” (use Chrome browser).
2. Check that the page loaded is the expected one.
3. Enter next credentials, do login and then check that the agent image is loaded. { User:
4. Click on contracts sections and check the label “... no contracts yet”.
5. Click on personal Data then save in a json all user information and print on console.  (not done in this use case)
6. Click on logout then check that the wefox web was loaded.

Usage : 
- Use **npm** to install Protractor globally with:
`$ npm install -g protractor`
- Install **protractor-beautiful-reporter** (html reports for Protractor)
`$ npm install protractor-beautiful-reporter --save-dev`
- Update the  **webdriver-manager**:
`$ webdriver-manager update`
- Now start up a server with:
`$ webdriver-manager start`

Finally, launch the test case using `$ protractor configuration.js`

At the end of the test case, a html report generated in the .\tmp\screenshots folder

Example of a report : 
![](https://raw.githubusercontent.com/thryyy/Wefox-test/master/Protractor/report.png)
