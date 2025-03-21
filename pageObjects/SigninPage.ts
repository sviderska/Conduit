import test, { type Locator, type Page, BrowserContext } from "@playwright/test";

export class SigninPage {
    readonly page: Page;
    readonly title: Locator;
    readonly needAnAccountLink: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signinButton: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.title = page.locator("h1.text-xs-center");
        this.needAnAccountLink = page.locator(".text-xs-center a");
        this.emailInput = page.locator("[placeholder='Email']");
        this.passwordInput = page.locator("[placeholder='Password']");
        this.signinButton = page.locator(".btn-lg");
    }

    async fillEmail(email: string = process.env.EMAIL) {
        await test.step("Fill email input", async () => {
          await this.emailInput.clear();
          await this.emailInput.fill(email);
        });
      }
    
      async fillPassword(password: string) {
        await test.step("Fill password input", async () => {
          await this.passwordInput.clear();
          await this.passwordInput.fill(password);
        });
      }
    
      async clickOnSinginBtn() {
        await test.step("Click on the login button", async () => {
          await this.signinButton.click();
        });
      }

      async signin(email: string = process.env.EMAIL, password: string = process.env.PASSWORD) {
        await test.step("Fill login data and click login button", async () => {
          await this.fillEmail(email);
          await this.fillPassword(password);
          await this.clickOnSinginBtn();
        });
      }
}