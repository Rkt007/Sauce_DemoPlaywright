export class Checkout {

    constructor(page) {
        this.page = page;

        this.checkoutCart = page.locator('.shopping_cart_link');
        this.checkoutBtn = page.locator('#checkout');

        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.zipCode = page.locator('#postal-code');
        this.continueBtn = page.locator('#continue');
    }

    async checkoutApplication() {
        await this.checkoutCart.click();
        await this.checkoutBtn.click();

        await this.firstName.fill('Rahul');
        await this.lastName.fill('Tiwari');
        await this.zipCode.fill('110092');

        await this.continueBtn.click();
    }
}
