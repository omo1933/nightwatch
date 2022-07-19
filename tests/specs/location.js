describe('location verification', function () {
    it('Verify that the Chicago location is present in the footer on https://www.designory.com/locations/chicago', function (browser) {
        browser
            .navigateTo('https://www.designory.com/locations/chicago')
        browser.expect.element(".heading-7").text.to.equal('CHICAGO IL,')
        browser.expect.element('h1').text.to.equal('CHI')
        browser.expect.element('.grid-12:nth-child(2) > .side-section > p').text.to.equal("Phone: +1 312 729 4500")
        browser.expect.element('.location').to.have.attribute('href').which.equals("http://maps.google.com/?q= 225 N Michigan Ave, Suite 2100 Chicago, IL 60601")
        //The UI shows that the font size is 16px instead of 40px
        browser.expect.element('h2').to.have.css('font-size').which.equals('16px')
        //There is no Address in the footer. Located under Hero image.
        browser.expect.element('.grid-12:nth-child(1) > .side-section > p').text.to.contain('225 N Michigan Ave, Suite 2100')
    });
});
