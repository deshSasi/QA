import { Selector, t } from 'testcafe';

class CartPage {
    cartItemName: Selector;
    checkoutButton: Selector;

    constructor() {
        this.cartItemName = Selector('.cart_item_label .inventory_item_name');
        this.checkoutButton = Selector('.btn_action.checkout_button');
    }

    async getCartItemNames() {
      //  await t.wait(5000); // wait for page to load
        await t.expect(this.cartItemName.exists).ok(); // wait for the element to exist
        const cartItemNames = await this.cartItemName.innerText;
        return cartItemNames.split('\n');
    }

    async verifyCartItemCount(expectedCount: number){
        const cartItems = await this.getCartItemNames();
        await t.expect(cartItems.length).eql(expectedCount);
    }

    async goToCheckout() {
        await t.click(this.checkoutButton);
    }
}

export default CartPage;
