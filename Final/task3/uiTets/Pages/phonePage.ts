import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { MainPage } from "./mainPage";

export class PhonePage extends BasePage {
    private readonly HonorPhone: Locator
    private readonly goToCartButton: Locator
    private readonly cartButton:  Locator;
    private readonly appleDevices: Locator;
    private readonly iphoneDevices: Locator;
    private readonly Iphone_14: Locator;

    
    
    
    constructor(page: Page) {
        super(page);
        this.HonorPhone = page.locator("//span[text() = 'Смартфон HONOR 90 8GB/256GB международная версия (изумрудный зеленый)']");
        this.goToCartButton = page.locator("//a [@data-shop-id = '19615'][@class = 'button-style button-style_base-alter button-style_primary product-aside__button product-aside__button_narrow product-aside__button_cart button-style_expletive']");
        this.cartButton = page.locator("//a[@title = 'Корзина']");
        this.appleDevices = page.locator("//li[@data-item-id = 'Apple']");
        this.iphoneDevices = page.locator("//a[@href = 'https://catalog.onliner.by/mobile?mfr%5B0%5D=apple']");
        this.Iphone_14 = page.locator("//span[text() = 'Смартфон Apple iPhone 14 128GB (полуночный)']")
      }

      async clickHonorPhone():Promise <void> {
        await this.HonorPhone.click();
      }
      async clickGoToCart():Promise<void>{
        await this.goToCartButton.click()
      }
      async clickKart():Promise<void>{
        await this.cartButton.click()
      }
      async clickAppleDevices():Promise<void>{
        await this.appleDevices.click()
      }
      async clickIphonedevices():Promise<void>{
        await this.iphoneDevices.click()
      }
      async checkIphone14(): Promise <void>{
        await this.Iphone_14.isVisible();
      }
}