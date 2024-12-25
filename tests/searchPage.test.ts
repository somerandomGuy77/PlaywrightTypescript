import { test } from '@playwright/test';
import HomePage from '../pages/homePage';
import SearchPage from '../pages/searchPage';
import gameData from '../test-data/game-data.json'

test.describe('Search', () => {
    test("Casino game search @smoke", async ({ page }) => {
        const homePage = new HomePage(page);
        const searchPage = new SearchPage(page);

        await test.step(`Open homepage and select language`, async () => {
            await homePage.navigateToHomePage();
            await homePage.selectLanguage('en');
        });

        await test.step(`Open Search and select casino tab`, async () => {
            await searchPage.openSearch();
            await searchPage.selectSearchTab("casino");
        });

        await test.step(`Search for ${gameData.game} and validate that correct game is displayed (${gameData.testKeyId})`, async () => {
            await searchPage.enterSearchValue(gameData.game);
            await searchPage.validateResult(gameData.testKeyId);
        });
    });
});