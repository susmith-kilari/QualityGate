import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('Verify Cart page is displayed', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await productsPage.goto();

    await productsPage.addProductsToCart(
        'Sauce Labs Backpack'
    );

    await cartPage.goto();

    const productCount = await cartPage.getProductsCount();
    expect(productCount).toBe(1);

    await cartPage.removeProduct('Sauce Labs Backpack');
    await productsPage.goto();
    await productsPage.addProductsToCart(
        'Sauce Labs Backpack'
    );
    await cartPage.goto();
    await cartPage.clickCheckout();
    await expect(
        page.getByText('Checkout: Your Information')
    ).toBeVisible();


});