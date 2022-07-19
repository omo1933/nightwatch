const menuOptions=(menuIndex=1, menuName='WORK')=>{
    browser.expect.element(`nav > ul > li:nth-child(${menuIndex}) > a`).eq().text.to.equal(menuName);
}
const Page = (navButton, urlLink)=>{
    browser.click(navButton)
    browser.assert.urlContains(urlLink)
    .click('#nav-toggle')
}

const pageMenuOptions=(urlLink)=>{
    browser
          .navigateTo(urlLink)
          .waitForElementVisible('#nav-toggle')
          .click('#nav-toggle')
        menuOptions()
        menuOptions(2, 'ABOUT')
        menuOptions(3, 'CAREERS')
        menuOptions(4, 'LOCATIONS')
        menuOptions(5, 'CONTACT')
        menuOptions(6, 'NEWS')
}
describe('duckduckgo example', function() {
    it('verify that the menu contains all six options', function(browser) {
      browser
        .navigateTo('https://www.designory.com/')
        .waitForElementVisible('#nav-toggle')
        .click('#nav-toggle')
        menuOptions()
        menuOptions(2, 'ABOUT')
        menuOptions(3, 'CAREERS')
        menuOptions(4, 'LOCATIONS')
        menuOptions(5, 'CONTACT')
        menuOptions(6, 'NEWS')

    }); 

    it('Verify that all menu options take the user to relevant pages.', function(browser) {
        browser
          .navigateTo('https://www.designory.com/')
          .waitForElementVisible('#nav-toggle')
          .click('#nav-toggle')
          menuOptions()
          Page('[href="/work"]','https://www.designory.com/work')
          menuOptions(2, 'ABOUT')
          Page('[href="/about"]','https://www.designory.com/about')
          menuOptions(3, 'CAREERS')
          Page('[href="/careers"]','https://www.designory.com/careers')
          menuOptions(4, 'LOCATIONS')
          browser.click('.subnav-toggle')
          Page('[href="/locations/chicago"]', 'https://www.designory.com/locations/chicago')
          menuOptions(5, 'CONTACT')
          Page('[href="/contact"]','https://www.designory.com/contact')
          menuOptions(6, 'NEWS')
          Page('[href="/news"]','https://www.designory.com/news')
  
      }); 

      it('verify that on those relevant pages menu options are the same.', function(browser) {
       pageMenuOptions('https://www.designory.com/work')
       pageMenuOptions('https://www.designory.com/about')
       pageMenuOptions('https://www.designory.com/careers')
       pageMenuOptions('https://www.designory.com/locations/chicago')
       pageMenuOptions('https://www.designory.com/contact')
       pageMenuOptions('https://www.designory.com/news')
      }); 
  });
