export class LoginPage {

    constructor(page)
    {
        this.page= page ;
        this.userInput =page.locator('#user-name');
        this.passwordInput =page.locator('#password');
        this.loginbutton =page.locator('#login-button');
        this.logoIcon=page.locator('.app_logo');
    }

    async gotoLoginApplication()
    {
       await  this.userInput.fill('standard_user');
       await this.passwordInput.fill('secret_sauce') ;
       await this.loginbutton.click();
      
    }
}