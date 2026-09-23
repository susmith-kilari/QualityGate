import {test,expect} from '@playwright/test';
import {LoginPage} from "../pages/LoginPage";
import {ProductsPage} from "../pages/ProductsPage";

test('verify products page is displayed',async({page}) => {
    const loginPage=new LoginPage(page);
    const productsPage=new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user','secret_sauce');
    await productsPage.goto();
    await expect(productsPage.getProductsHeading()).toBeVisible();
    await productsPage.addProductsToCart('Sauce Labs Backpack');


});
