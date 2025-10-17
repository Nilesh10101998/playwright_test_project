import {test, expect} from "@playwright/test"
import Assignment from "../Pages/Assignment"
import { credentials } from "../Data/asignmentdata";

test("Playwright assignment", async ({page}) =>{

    const assignment = new Assignment(page);

    await assignment.goToPage();

    // await expect(page).toHaveTitle("AI for Social Impact | Wadhwani AI | Wadhwani AI is an independent nonprofit institute developing AI-based solutions for underserved communities in developing countries.");
    await page.waitForTimeout(2000); //not 

    await assignment.applyForJob(
        credentials.validcredetials.firstname,
        credentials.validcredetials.lastname,
        credentials.validcredetials.emailId
    );
    await page.waitForTimeout(2000); //for debugging purpose


})