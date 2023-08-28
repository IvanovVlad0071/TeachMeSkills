import { BasePage } from "../Pages/basePage";
import { MainPage } from "../Pages/mainPage";
import { PhonePage } from "../Pages/phonePage";
import { CartPage } from "../Pages/cartPage";
import { Locator, Page } from "@playwright/test";
import { laptopPage } from "./laptopPage";

export class PagesFactory {
    static getPage(page:Page, pageName: string) {
      switch (pageName) {
        case "main":
        return new MainPage(page);
        case "laptop":
        return new laptopPage(page);
        case "phone":
        return new PhonePage(page);
        case "Cart":
        return new CartPage(page);
        default:
            return new MainPage(page);
      }
    }
} 