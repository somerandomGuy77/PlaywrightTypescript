import { test as baseTest } from "@playwright/test";
import HomePage from "../pages/homePage";
import SearchPage from "../pages/searchPage";

type pages = {
    homePage: HomePage;
    searchPage: SearchPage;
}

const testPages = baseTest.extend<pages>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    searchPage: async ({ page }, use) => {
        await use(new SearchPage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;
