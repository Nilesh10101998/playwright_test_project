import { expect } from "@playwright/test";
import { env_urls } from "../playwright.config";

export default class Assignment {

    constructor(page) {
        this.page = page;
        this.careersbutton = "(//a[normalize-space()='CAREERS'])[1]";
        this.openpositionsbutton = "//button[normalize-space()='View Open Positions']";
        this.dropdown = "//span[@class='lyteMarginRight lyteDropdownLabel']";
        this.dropdownoption = "#Lyte_Drop_Item_4";
        this.qaengineerposition = "//a[normalize-space()='QA Engineer']";
        this.interestedbutton = "(//button[@type='button'])[1]";
        this.entername = "(//input[@input='lyte-input => input'])[1]";
        this.enterlastname = "(//input[@input='lyte-input => input'])[2]";
        this.entermailid = "(//input[@input='lyte-input => input'])[3]";
        this.submitbutton = "//lyte-yield[normalize-space()='Submit Application']";
        this.errormessage = "#crc-file-upload-err-msg-146520000000307390";
    }

    async goToPage() {
        await this.page.goto(env_urls.aiUrl);
    }

    async applyForJob(firstname, lastname, email) {

        await this.page.locator(this.careersbutton).click();
        await this.page.locator(this.openpositionsbutton).click();
        await this.page.locator(this.dropdown).click();
        await this.page.locator(this.dropdownoption).click();
        await this.page.locator(this.qaengineerposition).click();
        await this.page.locator(this.interestedbutton).click();
        await this.page.locator(this.entername).fill(firstname);
        await this.page.locator(this.enterlastname).fill(lastname);
        await this.page.locator(this.entermailid).fill(email);
        await this.page.locator(this.submitbutton).click();
        const verifyerror = await this.page.locator(this.errormessage);
        await expect(verifyerror).toBeVisible();

    }
}