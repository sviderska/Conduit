import test, { type Locator, type Page, BrowserContext } from "@playwright/test";
import { faker } from "@faker-js/faker";

export class CreateArticlePage {
    readonly page: Page;
    readonly articleTitleInput: Locator;
    readonly whatArticleAboutInput: Locator;
    readonly articleTextarea: Locator;
    readonly tagsInput: Locator;
    readonly publishArticleButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.articleTitleInput = this.page.locator("[placeholder='Article Title']");
        this.whatArticleAboutInput = this.page.locator("[placeholder$='this article about?']");
        this.articleTextarea = this.page.locator("[placeholder='Write your article (in markdown)']");
        this.tagsInput = this.page.locator("[placeholder='Enter tags']");
        this.publishArticleButton = this.page.locator(".btn");
    }

    async typeArticleTitle() {
        const title = faker.word.noun();
        await test.step("fill atricle title", async () => {
            await this.publishArticleButton.isVisible();
            await this.articleTitleInput.fill(title);
        })
    }
    async typeArticleAbout() {
        const articleAbout = faker.word.noun();
        await test.step("fill what is this article about", async () => {
            await this.publishArticleButton.isVisible();
            await this.whatArticleAboutInput.fill(articleAbout);
        })
    }

    async typeArticle() {
        const article = faker.word.noun();
        await test.step("fill article", async () => {
            await this.publishArticleButton.isVisible();
            await this.articleTextarea.fill(article);
        })
    }

    async typeTag() {
        const tag = faker.word.noun();
        await test.step("fill tag", async () => {
            await this.publishArticleButton.isVisible();
            await this.tagsInput.fill(tag);
        })
    }

    async publishArticle() {
        await test.step("click on the 'publish article' button", async () => {
            await this.publishArticleButton.waitFor({ state: 'visible' });
            await this.publishArticleButton.press('Enter');
        })
    }

    async createNewArticle() {
        await test.step("create new article with valid data", async () => {
            await this.typeArticleTitle();
            await this.typeArticleAbout();
            await this.typeArticle();
            await this.typeTag();
            await this.publishArticle();
        });
    }
}