let homepage = require('../pages/homepage')

describe('demo calculator test', function () {

    it('Addition test', function () {
        // browser.driver.manage().window().maximize();

        // browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.get('https://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys(2);
        homepage.enterFirstNumber('3');

        //element(by.model('second')).sendKeys(4);
        homepage.enterSecondNumber('5');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        // let result = element(by.cssContainingText('.ng-binding', '6'));
        //expect(result.getText()).toEqual('6');
        homepage.verifyResult('8');

        browser.sleep(3000);

    });
    
});