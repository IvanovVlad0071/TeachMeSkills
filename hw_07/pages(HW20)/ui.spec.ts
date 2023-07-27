import { only } from "node:test";
import { Builder, By, until, Key } from "selenium-webdriver";
import { BasePage } from "./Base.page";
import { HonorPage } from "./Honor.page";
import { Korzina } from "./Korzina.page";
import { MainPage } from "./Main.page";
import { PagesFactory } from "./Page.factory";

test.only ("Положить товар в корзину", async ()=> {
    let driver = await new Builder().forBrowser("chrome").build(); 
    const MainPage = PagesFactory.getPage(driver, "main") as MainPage;
    await MainPage.open();
    await MainPage.clickonHonorTab();
    const HonorPage = PagesFactory.getPage(driver,"Honor") as HonorPage;
    await driver.wait(until.elementLocated(By.linkText("Смартфон HONOR Magic5 Pro 12GB/512GB международная версия (черный)")));
    await HonorPage.clickonHonorPhone();
    await driver.wait(until.elementLocated(By.linkText("В корзину")));
    await HonorPage.clickVkorziny();
    await driver.wait(until.elementLocated(By.xpath("//a[@title = 'Корзина']")));
    await HonorPage.clickKorzina();
    const Korzina = PagesFactory.getPage(driver, "korzina") as Korzina;
    await driver.wait(until.elementLocated(By.xpath("//div[@class = 'cart-form__description cart-form__description_primary cart-form__description_base-alter cart-form__description_font-weight_semibold cart-form__description_condensed-specific']")));
    expect(Korzina.checkItem()).toBeTruthy;
    await Korzina.close();




    

    



})