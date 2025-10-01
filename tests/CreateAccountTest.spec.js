import { test, expect } from "@playwright/test"
import CreateAccountPage from "../Pages/CreateAccountPage"


test("Create an Account", async ({ page }) => {

    //Create Account
    const createAccount = new CreateAccountPage(page);

    await createAccount.goToSignUpPage();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/register.htm;jsessionid=52D147EC12B36302B8FB873164393806");

    await createAccount.createNewAccount();

    await page.waitForTimeout(5000);

})