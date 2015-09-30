firstAccountName='#nordnet-react-app > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1)'

module.exports = {
  'Nordnet react app light' : function (browser) {
    browser
      .url(browser.launch_url + '/')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#login-container', 'Username')
      .setValue('input[type=text]', 'stora')
      .waitForElementVisible('button', 1000)
      .click('button')
      .waitForElementVisible(firstAccountName, 1000)
      .assert.containsText(firstAccountName,'Stora Webffdtyuå')
      .click('button')
      .waitForElementNotPresent(firstAccountName, 1000)
      .end();
  }
};
