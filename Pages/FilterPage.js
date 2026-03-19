export class FilterPage {

    constructor(page) {
        this.page = page;
        this.sortDropdown = page.locator('.product_sort_container');
    }

    async clickonflt() {
        await this.sortDropdown.selectOption({ index: 2 }); // Low to High
    }
}