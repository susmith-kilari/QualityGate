import{ test , expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {ProductsPage} from '../pages/ProductsPage';
import {CartPage} from '../pages/CartPage';
import {CheckoutPage} from '../pages/CheckoutPage';
import {testData} from '../test-data/testData';

test('User can enter checkout Information',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    const loginPage =new LoginPage(page);
    const productsPage =new ProductsPage(page);
    const cartPage=new CartPage(page);
    const checkoutPage=new CheckoutPage(page);

    await loginPage.login(testData.login.username,testData.login.password);
    await productsPage.addProductsToCart('Sauce labs Backpack');
    await cartPage.goto();
    await cartPage.clickCheckout();
    await checkoutPage.fillCheckoutInformation(
        testData.checkout.firstName,
        testData.checkout.lastName,
        testData.checkout.postalCode
    );
    await checkoutPage.clickContinue();
    await expect(page).toHaveURL(/checkout-step-two/);
});


