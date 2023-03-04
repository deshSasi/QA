import { Selector , t } from 'testcafe';

class FinishPage {
    thankYouMessage: Selector;
    finishButton: Selector;

    constructor() {
        this.thankYouMessage = Selector('.complete-header');
        this.finishButton = Selector('.btn_action.cart_button');
    }

    async getThankYouMessage() {
        return await this.thankYouMessage.innerText;
    }

    async finishCheckout() {
        await t.click(this.finishButton);
    }
}

export default FinishPage;
