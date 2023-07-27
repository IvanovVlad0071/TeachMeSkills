import { By, WebDriver } from "selenium-webdriver";
import { HonorPage } from "./Honor.page";
import { Korzina } from "./Korzina.page";
import { MainPage } from "./Main.page";
export class PagesFactory {
    static getPage(driver: WebDriver, pageName: string) {
      switch (pageName) {
        case "main":
        return new MainPage(driver);
        case "Honor":
        return new HonorPage(driver);
        case "korzina":
        return new Korzina(driver);
        default:
            return new MainPage(driver);
      }
    }
} 