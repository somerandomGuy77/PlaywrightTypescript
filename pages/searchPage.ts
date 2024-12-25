import { Page, expect } from "@playwright/test";

export default class SearchPage {

    constructor(public page: Page) { }

    private searchButton = "//button[@data-testid='search-button']";
    private searchInput = "//input[@data-testid='search-input']";

    async openSearch() {
        await this.page.locator(this.searchButton).click();
    };

    async selectSearchTab(tabId: string) {
        await this.page.locator(`//button[@tab-id='${tabId}']`).click();
    };

    async enterSearchValue(text: string) {
        await this.page.locator(this.searchInput).fill(text);
    };

    async validateResult(id: string) {
        await expect(this.page.locator(`//a[@data-testkey='${id}']`)).toBeVisible();
    };
};