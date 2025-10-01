
export default class LoginPage {

    constructor(page) {
        this.page = page;
        this.enterUsername = "input[name='username']";
        this.enterPassword = "input[name='password']";
        this.loginButton = "input[value='Log In']";
    }

    async goToLoginPage() {

        await this.page.goto("https://parabank.parasoft.com/parabank/register.htm");
    }

    async loginToApp(username, password) {

        await this.page.locator(this.enterUsername).fill(username);
        await this.page.locator(this.enterPassword).fill(password);
        await this.page.locator(this.loginButton).click();
    }
}