import { test as baseTest } from "@playwright/test";
import { SigninPage } from "../pageObjects/SignInPage";
import { ArticlePage } from "../pageObjects/user/ArticlePage";
import { CreateArticlePage } from "../pageObjects/user/CreateActiclePage";
import { HomePage } from "../pageObjects/user/HomePage";
import { PageHeader } from "../pageObjects/commonModules/PageHeader.module";

const test = baseTest.extend<{
  signInPage: SigninPage;
  articlePage: ArticlePage;
  createArticlePage: CreateArticlePage;
  homePage: HomePage;
  pageHeader: PageHeader;
}>({
  signInPage: async ({ page, context }, use) => {
    await use(new SigninPage(page, context));
  },
  articlePage: async ({ page }, use) => {
    await use(new ArticlePage(page));
  },
  createArticlePage: async ({ page }, use) => {
    await use(new CreateArticlePage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  pageHeader: async ({ page }, use) => {
    await use(new PageHeader(page));
  },
});
export default test;
