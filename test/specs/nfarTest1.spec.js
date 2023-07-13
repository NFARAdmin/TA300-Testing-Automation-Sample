import RallyBoundPage from '../pageobjects/rallybound.page.js';

describe('NFAR Testing Suite Tests', () => {
    xit('should ensure all elements on this page are accessible', async () =>{
        await RallyBoundPage.open();
        await expect(RallyBoundPage.firstName).toBeExisting();
        await expect(RallyBoundPage.lastName).toBeExisting();
        await expect(RallyBoundPage.email).toBeExisting();
        await expect(RallyBoundPage.password).toBeExisting();
        await expect(RallyBoundPage.confirmPassword).toBeExisting();
        await expect(RallyBoundPage.address).toBeExisting();
        await expect(RallyBoundPage.apt).toBeExisting();
        await expect(RallyBoundPage.country).toBeExisting();
        await expect(RallyBoundPage.city).toBeExisting();
        await expect(RallyBoundPage.state).toBeExisting();
        await expect(RallyBoundPage.zipCode).toBeExisting();
        await expect(RallyBoundPage.phone1).toBeExisting();
        await expect(RallyBoundPage.phone2).toBeExisting();
        await expect(RallyBoundPage.phone3).toBeExisting();
        await expect(RallyBoundPage.registerNext).toBeExisting();
    })
})