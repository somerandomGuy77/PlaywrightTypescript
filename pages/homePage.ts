import { Page, expect } from "@playwright/test";

export default class HomePage {

    constructor(public page: Page) { }

    private homeButton = "//a[@tab-id='lobby']";
    private allowAllCookies = "//*[@id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll']";
    private loginButton = "//button[@data-testid='login-button']";
    private sportsListSelector = "//div[@data-testid='category-list']";
    private loginWithEmailOption = "//button[@data-testid='email-option-button']";
    private loginWithBankOption = "//button[@data-testid='pnp-option-button']";
    private loginContinueButton = "//button[@data-testid='continue-button']";

    async navigateToHomePage() {
        await this.page.goto('/');
        await expect(this.page.locator(this.homeButton)).toBeVisible();
        await expect(this.page.locator(this.loginButton)).toBeVisible();
        await expect(this.page.locator(this.sportsListSelector)).toBeVisible();
        await this.page.locator(this.allowAllCookies).click();
    };

    async selectLanguage(language: string) {
        await this.page.locator(`//button[@data-testid='language-button']`).click();
        await this.page.locator(`//*[@data-testid='language-menu']//*[@data-testkey='${language}']`).click();
    };

    async openLoginWidget() {
        await this.page.locator(this.loginButton).click();
    };

    async validateLoginOptions() {
        await expect(this.page.locator(this.loginWithEmailOption)).toBeVisible();
        await expect(this.page.locator(this.loginWithBankOption)).toBeVisible();
        await expect(this.page.locator(this.loginContinueButton)).toBeVisible();
    };

    async openMenuTab(tabName: string) {
        await this.page.locator(`//div[@data-testid='category-list']//*[text()='${tabName}']`).click();
    };

    async validateMainMenuTabTitle(title: string) {
        await expect(this.page.locator(`//span[normalize-space(text())='${title}']`)).toBeVisible();
    };
};