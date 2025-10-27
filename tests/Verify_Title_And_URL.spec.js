import { test, expect } from "@playwright/test"

test("Title and URL Test", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const pageURL = await page.url();
    console.log("The page url is " + pageURL);

    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");

    const pageTitle = await page.title();
    console.log("The page title is " + pageTitle);

    await expect(page).toHaveTitle("Automation Testing Practice");

    await page.waitForTimeout(3000);
})