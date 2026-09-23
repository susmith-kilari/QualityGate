import { Page, Locator } from '@playwright/test';

export class CartPage {

    readonly page: Page;
    readonly cartLink: Locator;
    readonly cartItem: Locator;
    readonly removeButton: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.cartLink = page.locator('.shopping_cart_link');
        this.cartItem = page.locator('.cart_item');
        this.removeButton = page.getByRole('button', { name: /remove/i });
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    }

    async goto(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/cart.html');
    }

    async getProductsCount(): Promise<number> {
        return await this.cartItem.count();
    }

    async removeProduct(productName: string): Promise<void> {
        const product = this.page
            .locator('.cart_item')
            .filter({ hasText: productName });

        await product
            .getByRole('button', { name: /remove/i })
            .click();
    }

    async clickCheckout(): Promise<void> {
        await this.checkoutButton.click();
    }
}