import { expect } from '@playwright/test';
import test from '../lib/BaseTest';

test.describe("new article creation flow", () => {
    test.beforeEach(async ({
        signInPage,
        pageHeader
    }) => {       
        await pageHeader.goto();
        await pageHeader.clickOnSigninNavigationButton();

        await signInPage.signin(process.env.EMAIL, process.env.PASSWORD);

        await expect(pageHeader.userProfileButton).toBeVisible();
    });

    test("verify new a new article creation with valid data", async ({ 
        pageHeader,
        createArticlePage,
        articlePage
    }) => {
        await pageHeader.openNewArticlePage();

        await createArticlePage.createNewArticle();

        await expect(articlePage.articleTitleInput).toBeVisible();
        await expect(articlePage.deleteArticleBannerButton).toBeVisible();
        await expect(articlePage.editArticleBannerButton).toBeVisible();
    });
});
