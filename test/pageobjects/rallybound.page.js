/*
Note: DO NOT use the syntax 'export default class X' for your
new class! It appears to be used only for other page.js files
to access the files, NOT spec.js files.

Instead use a 'class X' (page code here) 'export default new X'
syntax instead.
*/
class RallyBoundPage {
    open () {
        browser.url('https://nfar.rallybound.org/replicated/Account/Register');
    }
    get firstName () {
        return $('#firstName');
    }
    get lastName () {
        return $('#lastName');
    }
    get email () {
        return $('#emailAddress');
    }
    get password () {
        return $('#password');
    }
    get confirmPassword () {
        return $('#confirmPassword');
    }
    get address () {
        return $('#address1');
    }
    get apt () {
        return $('#address2');
    }
    get country () {
        return $('#country');
    }
    get city () {
        return $('#city');
    }
    get state () {
        return $('#state');
    }
    get zipCode () {
        return $('#zip');
    }
    get phone1 () {
        return $('#phoneNumber');
    }
    get phone2 () {
        return $('#phoneNumber2');
    }
    get phone3 () {
        return $('#phoneNumber3');
    }
    get registerNext () {
        return $('#register1Next');
    }
}
export default new RallyBoundPage()