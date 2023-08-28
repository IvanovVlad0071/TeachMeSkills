import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { MainPage } from "./mainPage";

export class laptopPage extends BasePage {
    private readonly advertButton  : Locator
    private readonly addAdvertButton : Locator

    constructor(page: Page) {
        super(page);
        this.advertButton = page.locator("//span[text() = 'Объявления']")
        this.addAdvertButton = page.locator("//div[@id = 'schema-top-button']/a[@class = 'button button_green button_base schema-header__button']")
    }

    async clickAdvertButton():Promise <void> {
        await this.advertButton.click();
}
    async checkAddAdertButton(): Promise <void> {
        await this.addAdvertButton.isVisible();
    } 

}