import { test, expect, chromium } from "@playwright/test"

test("Handling multiple windows", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://the-internet.herokuapp.com/windows');

    const title = await page.title();
    console.log('The page title is:' + title);
    await expect(page).toHaveTitle('The Internet');

    const pagePromise = context.waitForEvent('page');
    await page.locator("//a[normalize-space()='Click Here']").click();

    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle('New Window');


    await page.waitForTimeout(4000);
})