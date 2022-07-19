describe('cookie verification', function() {
    it("Verify that after accepting the cookie notice, the user doesn't see the notice anymore.", function(browser) {
      browser
        .navigateTo('https://www.designory.com')
        .waitForElementVisible('#CybotCookiebotDialog')
        .click('#CybotCookiebotDialogBodyButtonAccept')
        .assert.not.visible('#CybotCookiebotDialog')
    }); 

    it("Verify that after clearing cookies the “cookie notice” shows up again.", function(browser) {
        browser
          .navigateTo('https://www.designory.com')
          .waitForElementNotPresent('#CybotCookiebotDialog')
          .click('.CookiebotWidget-logo')
          .waitForElementVisible('#CookiebotWidget-buttons')
          .click('#CookiebotWidget-btn-withdraw')
          .click('#CookiebotWidget-btn-change')
        browser
          .navigateTo('https://www.designory.com')
          .waitForElementVisible('#CybotCookiebotDialog')
      }); 
  });
