import { test, expect } from "@playwright/test"
import LoginPage from "../Pages/LoginPage"
import { credentials } from "../Data/testData";

test("Login Test", async ({ page }) => {

    //Login
    const loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/register.htm");
    await expect(page).toHaveTitle("ParaBank | Register for Free Online Account Access");

    await loginPage.loginToApp(
        credentials.validCredentials.username,
        credentials.validCredentials.password
    );

    await page.waitForTimeout(4000);

})