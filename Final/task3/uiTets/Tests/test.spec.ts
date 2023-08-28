import { BasePage } from "../Pages/basePage";
import { MainPage } from "../Pages/mainPage";
import { PhonePage } from "../Pages/phonePage";
import { CartPage } from "../Pages/cartPage";
import { Locator, Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { PagesFactory } from "../Pages/pageFactory";
import { laptopPage } from "../Pages/laptopPage";

test.describe('Check Onliner.by', async()=>{
    test('Положить товар в корзину', async({page})=>{
        const MainPage = PagesFactory.getPage(page, "main") as MainPage;
        await MainPage.openSite(page);
        await MainPage.clickPhoneTab();
        const PhonePage = PagesFactory.getPage(page, "phone") as PhonePage;
        await PhonePage.clickHonorPhone();
        await PhonePage.clickGoToCart();
        await PhonePage.clickKart();
        const CartPage = PagesFactory.getPage(page, "Cart") as CartPage;
        expect(await CartPage.checkItem()).toBeTruthy

    })
    test('кнопка разместить обьявление отображается', async({page})=>{
        const MainPage = PagesFactory.getPage(page, "main") as MainPage;
        await MainPage.openSite(page);
        await MainPage.clickLaptopTab()
        const laptopPage = PagesFactory.getPage(page, "laptop") as laptopPage;
        await laptopPage.clickAdvertButton();
        expect(await laptopPage.checkAddAdertButton()).toBeTruthy
    })
    test('Страница о компании открывается', async({page})=>{
        const MainPage = PagesFactory.getPage(page, "main") as MainPage;
        await MainPage.openSite(page);
        await MainPage.clickAboutButton;
        expect(await MainPage.checkAboutTitle()).toBeTruthy;
    
    })
    test('найти айфон 14', async({page})=>{
        const MainPage = PagesFactory.getPage(page, "main") as MainPage;
        await MainPage.openSite(page);
        await MainPage.clicksmartPhoneTab();
        const PhonePage = PagesFactory.getPage(page, "phone") as PhonePage;
        await PhonePage.clickAppleDevices();
        await PhonePage.clickIphonedevices();
        expect(await PhonePage.checkIphone14()).toBeTruthy;
    
    })

    test('Юзер может открыть Каталог', async({page})=>{
        const MainPage = PagesFactory.getPage(page, "main") as MainPage;
        await MainPage.openSite(page);
        await MainPage.clickCatalog();
        expect(await MainPage.checkCatalog()).toBeTruthy;
    
    })
})