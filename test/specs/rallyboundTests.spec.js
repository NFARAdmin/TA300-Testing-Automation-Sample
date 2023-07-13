import RallyBoundPage from '../pageobjects/rallybound.page.js';

describe('NFAR Mock Registration Website Tests', () => {
    before ('open browser page', async() => {
        await RallyBoundPage.open();
    })
    it('should not allow for less than 3 characters per test', async () =>{
        //default check to make sure that the firstName does not have a 'hasError' attribute.
        //on the website, invalid form entries get a 'hasError' attribute for invalid form entries.
        //this test verifies that for tests using the 'hasError' attribute, there are no false positives.
        //NOTE: Make sure to deliberately fail your test to make sure that there isn't a false postive
        //anyway in case your false positive checking test itself has a false positive!
        await browser.pause(2000);
        await expect(RallyBoundPage.firstName).not.toHaveElementClassContaining('hasError');

        //MAKE SURE THAT YOU AWAIT ALL COMMANDS EXCEPT GETTERS! ESPECIALLY YOUR EXPECTS!
        
        //checking for length limits of names, cannot be less than 3, or more than 64;
    
        //This test below will fail the requirements.
        //If you need to test other tests while this one fails,
        //skip it by putting an X before the 'it' statement.
        await RallyBoundPage.firstName.setValue('bb');
        await browser.pause(3000);
        await expect(RallyBoundPage.firstName).toHaveElementClassContaining('hasError');
    }),

    it('should not allow for names longer than 64 characters', async () =>{
        //exactly 65 characters
        //console.log ('First Name abba2: ' + await RallyBoundPage.firstName.getAttribute('class'))
        await RallyBoundPage.firstName.setValue('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklm')
        await RallyBoundPage.lastName.click();
        await browser.pause(1000);
        await expect(RallyBoundPage.firstName).toHaveElementClass('hasError');
    }),

    it('should reject names with foreign characters (including arabic characters)', async () =>{
        //checking all the common accented and diacritical characters used in names
        //and some arabic language symbols with diacriticals. Also hyphenated texts and apostrophes.
        // Accented characters and foreign are currently counted as "symbols",
        //and are not allowed for now
        await RallyBoundPage.firstName.setValue('éèêëçñøðÐåæœēčŭ \'')
        await browser.pause(3000);
        expect(await RallyBoundPage.firstName).toHaveElementClass('hasError');
        //Arabics are defined as symbols and therefore NOT allowed.
        await RallyBoundPage.firstName.setValue('ئ ؤ إ أ ــًــٍــٌـ-');
        expect(await RallyBoundPage.firstName).toHaveElementClass('hasError');
    })
    it ('should reject names with spaces or symbols', async () =>{

        //checking for symbols, spaces in the name, digits and empty strings.
        await RallyBoundPage.firstName.setValue('carl arm')
        expect(await RallyBoundPage.firstName).toHaveElementClass('hasError');
    }),
    xit('should complete all the tests in this series of tests', async () =>{
        
    }),
    xit('should complete all the tests in this series of tests', async () =>{

    }),
    xit('should complete all the tests in this series of tests', async () =>{
    1
    })

})