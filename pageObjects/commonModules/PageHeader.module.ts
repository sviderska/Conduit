import test, { type Locator, type Page} from "@playwright/test";

export class PageHeader {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly homeButton: Locator;
    readonly signinButton: Locator;
    readonly signupButton: Locator;
    readonly newArticleButton: Locator;
    readonly userProfileButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = this.page.locator(".navbar-brand");
        this.homeButton = this.page.locator(".nav-link", { hasText: "Home" });
        this.signinButton = this.page.locator(".nav-link", { hasText: "Sign in" });
        this.signupButton = this.page.locator(".nav-link", { hasText: "Sign up" });
        this.newArticleButton = this.page.locator(".nav-link", { hasText: " New Article" });
        this.userProfileButton = this.page.locator(".nav-link [alt='your profile image']");
    }

    async goto() {
        await this.page.goto("/")
    }

    async clickOnSigninNavigationButton() {
        await test.step("click on the signin button", async () => {
            await this.signinButton.click()
        })
    }

    async openNewArticlePage() {
        await test.step("click on the new article button", async () => {
            await this.newArticleButton.click()
        })
    }
}