export class AddtoCart {

    constructor(page) {
        this.page = page;
        this.addToCartBtn = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addtocart() {
        await this.addToCartBtn.click();
        await this.cartIcon.click();
    }
}
