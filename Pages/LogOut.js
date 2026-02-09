export class LogOut {

    constructor(page) {
        this.page = page;
        this.menuBtn = page.locator('#react-burger-menu-btn');
        this.logoutBtn = page.locator('#logout_sidebar_link');
    }

    async gotologout() {
        await this.menuBtn.click();
        await this.logoutBtn.click();
    }
}
