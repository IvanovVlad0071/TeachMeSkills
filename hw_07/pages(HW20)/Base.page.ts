import { By, WebDriver } from "selenium-webdriver";
export class BasePage {
  constructor(protected driver: WebDriver) {}

  async open(): Promise<void> {
    await this.driver.manage().window().maximize();
    await this.driver.get("https://www.onliner.by/");
  }

  async close(): Promise<void> {
    await this.driver.close();
  }
}