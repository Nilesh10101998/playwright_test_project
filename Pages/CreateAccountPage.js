
export default class CreateAccountPage {

    constructor(page) {
        this.page = page;
        this.enterFirstname = "//input[@id='customer.firstName']";
        this.enterLastname = "//input[@id='customer.lastName']";
        this.enterAddress = "//input[@id='customer.address.street']";
        this.enterCityName = "//input[@id='customer.address.city']";
        this.enterStateName = "//input[@id='customer.address.state']";
        this.enterPincode = "//input[@id='customer.address.zipCode']";
        this.enterPhoneNumber = "//input[@id='customer.phoneNumber']";
        this.enterSSNNumber = "//input[@id='customer.ssn']";
        this.enterUsername = "//input[@id='customer.username']";
        this.enterPassword = "//input[@id='customer.password']";
        this.enterconfirmPassword = "//input[@id='repeatedPassword']";
        this.registerButton = "//input[@value='Register']";
    }

    async goToSignUpPage() {

        await this.page.goto("https://parabank.parasoft.com/parabank/register.htm;jsessionid=52D147EC12B36302B8FB873164393806");
    }

    async createNewAccount() {

        await this.page.locator(this.enterFirstname).fill("Nilesh");
        await this.page.locator(this.enterLastname).fill("Kasane");
        await this.page.locator(this.enterAddress).fill("Vadgaon Sheri");
        await this.page.locator(this.enterCityName).fill("Pune");
        await this.page.locator(this.enterStateName).fill("Maharashtra");
        await this.page.locator(this.enterPincode).fill("411014");
        await this.page.locator(this.enterPhoneNumber).fill("9673067421");
        await this.page.locator(this.enterSSNNumber).fill("991587919017");
        await this.page.locator(this.enterUsername).fill("nileshkasane15@gmail.com");
        await this.page.locator(this.enterPassword).fill("Impact@123");
        await this.page.locator(this.enterconfirmPassword).fill("Impact@123");
        await this.page.locator(this.registerButton).click();
    }

}