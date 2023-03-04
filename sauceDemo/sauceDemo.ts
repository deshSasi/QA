import { Selector, t } from "testcafe";
import { faker } from '@faker-js/faker';
import LoginPage from './page_model/LoginPage';
import ProductsPage from './page_model/ProductsPage ';
import CartPage from './page_model/CartPage';
import CheckoutPage from './page_model/CheckoutPage';
import FinishPage from './page_model/FinishPage';

const { userVariables } = require('testcafe');

fixture `Sauce Demo`
   .page(userVariables.url);


test('Add two products to the cart and complete checkout process', async t => {
    const productsPage = new ProductsPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();
    const finishPage = new FinishPage();

    // Check the price of the Sauce Labs Fleece Jacket
    const productPrice = await productsPage.getProductPrice('Sauce Labs Fleece Jacket');
    await t.expect(productPrice).eql('$49.99');

    // Add two products to cart
    await productsPage.addToCart('Sauce Labs Backpack');
    await productsPage.addToCart('Sauce Labs Bolt T-Shirt');

    //Go to the cart and verify the selected items
    await productsPage.goToCart();
   
    await t.click('.shopping_cart_link');
    await cartPage.verifyCartItemCount(2);
    

    // Go to checkout and fill in the checkout form
    await cartPage.goToCheckout();
    await checkoutPage.fillCheckoutForm(faker.name.firstName(), faker.name.lastName(), faker.address.zipCode());

    // Finish checkout and verify the thank you message
    await checkoutPage.continueButton();
    const thankYouMessage = await finishPage.getThankYouMessage();
    await t.expect(thankYouMessage).eql('THANK YOU FOR YOUR ORDER');
 
});