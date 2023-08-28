import { BasePage } from "./basePage";
import { MainPage } from "./mainPage";
import { PhonePage } from "./phonePage";
import { Locator, Page } from "@playwright/test";

export class CartPage extends BasePage {
    private readonly Item: Locator
    
    
    constructor(page: Page) {
        super(page);
        this.Item = page.locator("//div[@class = 'cart-form__description cart-form__description_primary cart-form__description_base-alter cart-form__description_font-weight_semibold cart-form__description_condensed-specific']")
    }

    async checkItem(): Promise<void>{
        await this.Item.isVisible()
    }
}