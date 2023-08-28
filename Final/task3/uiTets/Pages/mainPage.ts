import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { laptopPage } from "./laptopPage";

export class MainPage extends BasePage {
    private readonly PhoneTab: Locator;
    private readonly laptopTab: Locator;
    private readonly aboutButton: Locator;
    private readonly title: Locator;
    private readonly smartphoneButton: Locator;
    private readonly catalog: Locator;
    private readonly catalogIsDispl: Locator

    constructor(page: Page) {
        super(page);
        this.PhoneTab = page.locator(" //a[@class = 'project-navigation__honor' ]");
        this.laptopTab = page.locator("//span[@class='project-navigation__sign'][text() = 'Ноутбуки']");
        this.aboutButton = page.locator("//li[@class = 'footer-style__item']/a[@href = 'https://blog.onliner.by/about']");
        this.title = page.locator("//div[@class = 'news-header__title']");
        this.smartphoneButton = page.locator("//span[@class ='project-navigation__sign'][text() = 'Смартфоны']");
        this.catalog = page.locator("//a[@class='b-main-navigation__link']//span[contains(text(),'Каталог')]");
        this.catalogIsDispl = page.locator("//ul[@class='catalog-navigation-classifier ']");



    
      }

      async clickPhoneTab():Promise <void> {
        await this.PhoneTab.click();
      }
      async clickLaptopTab(): Promise <void> {
        await this.laptopTab.click();
      }
      async clickAboutButton(): Promise <void> {
        await this.aboutButton.click();
      }
      async checkAboutTitle(): Promise <void> {
        await this.title.isVisible();
      }
      async clicksmartPhoneTab(): Promise <void> {
        await this.smartphoneButton.click();
      }
      async clickCatalog(): Promise <void> {
        await this.catalog.click();
      }
      async checkCatalog(): Promise <void> {
        await this.catalogIsDispl.isVisible();
  }
}