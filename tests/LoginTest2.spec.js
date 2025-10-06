import { test, expect } from "@playwright/test"
import LoginPage2 from "../Pages/LoginPage2"
import { credentials } from "../Data/testData";

test('LoginTest2', async ({ page }) => {

    const loginPage2 = new LoginPage2(page);

    await loginPage2.goToLoginPage();
    await page.waitForTimeout(3000);

    const pageURL = await page.url();
    console.log("The page url is: " + pageURL);

    await expect(page).toHaveURL("https://demoblaze.com/index.html");

    const pageTitle = await page.title();
    console.log("The page title is: " + pageTitle);

    await expect(page).toHaveTitle('STORE');

    await loginPage2.loginToApp2(
        credentials.myCredentials.username,
        credentials.myCredentials.password
    );

    await page.waitForTimeout(5000);

})