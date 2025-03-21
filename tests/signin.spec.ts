import { expect } from '@playwright/test';
import test from '../lib/BaseTest';

test.describe("signin flow", () => {
    test("verify signin with valid credentials", async ({ 
        signInPage,
        pageHeader,
        homePage
    }) => {
        await pageHeader.goto();
        await pageHeader.clickOnSigninNavigationButton();
        await signInPage.signin(process.env.EMAIL, process.env.PASSWORD);

        await expect(homePage.yourFeedNavigation).toBeVisible();
        await expect(homePage.globalFeedNavigation).toBeVisible();
    });
});
