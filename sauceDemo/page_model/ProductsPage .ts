import { Selector, t } from 'testcafe';

class ProductsPage {
    productItem: Selector;
    addToCartButton: Selector;
    cartIcon: Selector;

    constructor() {
        this.productItem = Selector('.inventory_item_name');
        this.addToCartButton = Selector('.btn_primary.btn_inventory');
        this.cartIcon = Selector('.shopping_cart_link');
    }

    async getProductPrice(productName: string) {
        return await this.productItem.withExactText(productName).parent('.inventory_item').find('.inventory_item_price').innerText;
    }

    async addToCart(productName: string) {
        await t
           .expect(Selector('.inventory_item_name').withExactText('Sauce Labs Bolt T-Shirt').exists).ok({timeout: 5000});
           
            //t.click(this.productItem.withExactText(productName))
             //.click(this.addToCartButton);
    }

    async goToCart() {
        await t.click(this.cartIcon);
    }
}

export default ProductsPage;
