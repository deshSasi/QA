import { Selector, t } from 'testcafe';

class CheckoutPage {
    firstNameField: Selector;
    lastNameField: Selector;
    zipCodeField: Selector;
    continueButton: Selector;

    constructor() {
        this.firstNameField = Selector('#first-name');
        this.lastNameField = Selector('#last-name');
        this.zipCodeField = Selector('#postal-code');
        this.continueButton = Selector('.btn_primary.cart_button');
    }

    async fillCheckoutForm(firstName: string, lastName: string, zipCode: string) {
        await t.typeText(this.firstNameField, firstName)
               .typeText(this.lastNameField, lastName)
               .typeText(this.zipCodeField, zipCode)
               .click(this.continueButton);
    }
}

export default CheckoutPage;
