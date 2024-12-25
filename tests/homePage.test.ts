import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage';

test.beforeEach(async ({ page }) => {
    await test.step(`Open homepage and select language`, async () => {
        const homePage = new HomePage(page);
        await homePage.navigateToHomePage();
        await homePage.selectLanguage('en');
    });
  });

test.describe('Homepage Login Widget', () => {
    test("Open Login widget and validate login options @smoke", async ({ page }) => {
        const homePage = new HomePage(page);

        await test.step(`Open login widget`, async () => {
            await homePage.openLoginWidget();
        });

        await test.step(`Validate Email and Bank login options displayed`, async () => {
            await homePage.validateLoginOptions();
        });
    });
});

test.describe('Homepage Sports menu navigation', () => {
    [
        { name: 'Football', expectedTitle: 'Football' },
        { name: 'Basketball', expectedTitle: 'Basketball' },
        { name: 'Ice Hockey', expectedTitle: 'Ice Hockey' },
        { name: 'Darts', expectedTitle: 'Darts' },
        { name: 'American Football', expectedTitle: 'American Football' },
        { name: 'Esports', expectedTitle: 'Top Esports' },
        { name: 'Entertainment', expectedTitle: 'Entertainment' },
        { name: 'Boxing', expectedTitle: 'Boxing' },
        { name: 'Handball', expectedTitle: 'Handball' },
        { name: 'MMA', expectedTitle: 'MMA' },
    ].forEach(({ name, expectedTitle }) => {
        test(`Menu option: ${name} @smoke`, async ({ page }) => {
            const homePage = new HomePage(page);

            await test.step(`Open main menu : ${name}`, async () => {
                await homePage.openMenuTab(name);
            });

            await test.step(`Validate correct title is displayed : ${expectedTitle}`, async () => {
                await homePage.validateMainMenuTabTitle(expectedTitle);
            });
        });
    });
});