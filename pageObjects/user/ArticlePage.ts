import test, { type Locator, type Page } from "@playwright/test";

export class ArticlePage {
    readonly page: Page;
    readonly editArticleBannerButton: Locator;
    readonly deleteArticleBannerButton: Locator;
    readonly articleTitleInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.editArticleBannerButton = this.page.locator(".banner .btn-outline-secondary");
        this.deleteArticleBannerButton = this.page.locator(".banner .btn-outline-danger");
        this.articleTitleInput = this.page.locator(".banner h1");
    }
}