import { test, expect } from "@playwright/test";

import { LoginPage } from "../Pages/LoginPage";
import { AddtoCart } from "../Pages/AddtoCart";
import { LogOut } from "../Pages/LogOut";

test('test case', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    

    const userlogin = new LoginPage(page);
    const cartverify = new AddtoCart(page);
    const userLogout = new LogOut(page);

    await userlogin.gotoLoginApplication();

    const links = page.locator('.inventory_container a');
    const totalLinks = await links.count();
    console.log("Total links:", totalLinks);
   
    // print all link
     for (let i = 0; i < totalLinks; i++) {
        const linkText = await links.nth(i).textContent();
        console.log(linkText?.trim());
    }
    await cartverify.addtocart();
    await userLogout.gotologout();
});
