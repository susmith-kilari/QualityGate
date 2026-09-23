import {Page} from '@playwright/test';
export class ProductsPage {
    constructor(private page: Page) {
    }

    private productsHeading = this.page.getByText('Products');

    private productCard(productName: string) {
        return this.page.locator('.inventory_item').filter({hasText: productName});
    }

    async addProductsToCart(productName: string) {
        const product = this.productCard(productName);

        await product.getByRole('button', {name: 'Add to cart'}).click();


    }

    getProductsHeading() {
        return this.productsHeading;
    }
    async goto() {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }
}
