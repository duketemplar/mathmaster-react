var DEBUG = process.env.NODE_ENV === 'development';
var deployUrl = DEBUG? '/' : '/mux/web/nordnet/seed.html';

var firstAccountName='#nordnet-react-app-light > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1)'

module.exports = {
  'Shows account name when logged in' : function (browser) {
    var url = browser.launch_url + deployUrl;
    console.log('Using url: ' + url)

    browser
      .url(url)
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
  },

  afterEach : function(browser, done) {
    browser.getLog('browser', function(result) {
      console.log('*** Browser console output ***');
      result.forEach(function(log) {
        console.log('[' + log.level + '] ' + log.timestamp + ' : ' + log.message);
      });
      console.log('*** End of browser console output ***');
    }).end(function() {
      // Must call so we don't leave the session hanging
      done();
    });
  },
};
