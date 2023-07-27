import{ By, WebDriver } from "selenium-webdriver";
import { BasePage } from "./Base.page";
import { MainPage } from "./Main.page";
export class HonorPage extends BasePage {
    private readonly HonorPhone: By = By.xpath("//span[text() = 'Смартфон HONOR Magic5 Pro 12GB/512GB международная версия (черный)']");
    private readonly VkrorzinyButton: By = By.xpath("//*[text() = 'В корзину']");
    private readonly KorzinaButton: By = By.xpath("//a[@title = 'Корзина']");

    async clickonHonorPhone(): Promise<void>{
        await this.driver.findElement(this.HonorPhone).click();
      }
    
    async clickVkorziny(): Promise<void>{
        await this.driver.findElement(this.VkrorzinyButton).click();
    }

    async clickKorzina(): Promise<void>{
        await this.driver.findElement(this.KorzinaButton).click();
    }

}