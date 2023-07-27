import{ By, WebDriver } from "selenium-webdriver";
import { BasePage } from "./Base.page";
import { MainPage } from "./Main.page";
import { HonorPage } from "./Honor.page";
export class Korzina extends BasePage {
    private readonly Item: By = (By.xpath("//div[@class = 'cart-form__description cart-form__description_primary cart-form__description_base-alter cart-form__description_font-weight_semibold cart-form__description_condensed-specific']"));

    async checkItem(): Promise<void>{
        await this.driver.findElement(this.Item).isDisplayed();
    }
}