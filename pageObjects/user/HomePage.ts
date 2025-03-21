import test, { type Locator, type Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly yourFeedNavigation: Locator;
    readonly globalFeedNavigation: Locator;

    constructor(page: Page) {
        this.page = page;
        this.yourFeedNavigation = this.page.locator(".nav-link", { hasText: "Your Feed" });
        this.globalFeedNavigation = this.page.locator(".nav-link", { hasText: "Global Feed" });
    }
}