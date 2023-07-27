import { By, WebDriver } from "selenium-webdriver";
import { BasePage } from "./Base.page";
export class MainPage extends BasePage {
  private readonly HonorTab: By =  By.xpath("//span[@class ='project-navigation__sign' ]");
  

  async clickonHonorTab(): Promise<void>{
    await this.driver.findElement(this.HonorTab).click();
  }
}