import { env_urls } from "../playwright.config";

export default class LoginPage2 {

    constructor(page) {
        this.page = page;
        this.loginLink = "#login2";
        this.enterUsername = "#loginusername";
        this.emterPassword = "#loginpassword";
        this.loginButton = "//button[normalize-space()='Log in']";
    }

    async goToLoginPage() {
        await this.page.goto(env_urls.qaUrl);
    }

    async loginToApp2(username, password) {

        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.enterUsername).fill(username);
        await this.page.locator(this.emterPassword).fill(password);
        await this.page.locator(this.loginButton).click();

    }

}