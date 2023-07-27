import { only } from "node:test";
import { Builder, By, until, Key } from "selenium-webdriver";


// Task 1 💻
// - Написать минимум 5 UI тестов для сайта: https:onliner.by.
// - При написании использовать различные типы селекторов и локаторов
// - Добавить методы ожидания элементов
// - Добавить проверки элементов/текстовых значений


describe ("UI tests", () =>{
   
    test ("О компании", async ()=> {
        let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.onliner.by/");
    await driver.manage().window().maximize()
    await driver.wait(until.elementLocated(By.xpath("//li[@class = 'footer-style__item']/a[@href = 'https://blog.onliner.by/about']")));
    const AboutButton =  await driver.findElement(By.xpath("//li[@class = 'footer-style__item']/a[@href = 'https://blog.onliner.by/about']"));
    await AboutButton.click();
    await driver.sleep(5000);
    const title =  await driver.findElement(By.xpath("//div[@class = 'news-header__title']"));
    expect (title.isDisplayed()).toBeTruthy();
    await driver.quit();
})
   
   
    test.only ("Положить товар в корзину", async ()=> {
        let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.onliner.by/");
    await driver.manage().window().maximize();
    const HonorTab = await driver.findElement(By.xpath("//span[@class ='project-navigation__sign' ]"))
    await HonorTab.click()
    await driver.wait(until.elementLocated(By.linkText("Смартфон HONOR Magic5 Pro 12GB/512GB международная версия (черный)")));
    const HonorPhone = await driver.findElement(By.xpath("//span[text() = 'Смартфон HONOR Magic5 Pro 12GB/512GB международная версия (черный)']"))
    await HonorPhone.click();
    await driver.wait(until.elementLocated(By.linkText("В корзину")));
    const VkrorzinyButton = await driver.findElement(By.xpath("//*[text() = 'В корзину']"));
    await VkrorzinyButton.click();
    await driver.wait(until.elementLocated(By.xpath("//a[@title = 'Корзина']")));
    const Korzina = await driver.findElement(By.xpath("//a[@title = 'Корзина']"));
    await Korzina.click();
    await driver.wait(until.elementLocated(By.xpath("//div[@class = 'cart-form__description cart-form__description_primary cart-form__description_base-alter cart-form__description_font-weight_semibold cart-form__description_condensed-specific']")));
    const Item =  await driver.findElement(By.xpath("//div[@class = 'cart-form__description cart-form__description_primary cart-form__description_base-alter cart-form__description_font-weight_semibold cart-form__description_condensed-specific']"));
    expect (Item.isDisplayed()).toBeTruthy();
    await driver.quit();
    })

})
    test("кнопка разместить обьявление отображается", async ()=> {
        let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.onliner.by/");
    await driver.manage().window().maximize()
    const laptopButton = await driver.findElement(By.xpath("//li[@class ='project-navigation__item project-navigation__item_secondary']"));
    await laptopButton.click();
    await driver.wait(until.elementLocated(By.xpath("//span[text() = 'Объявления']")))
    const AdvertButton = await driver.findElement(By.xpath("//span[text() = 'Объявления']"))
    await AdvertButton.click();
    await  driver.wait(until.elementLocated(By.xpath("//div[@id = 'schema-top-button']/a[@class = 'button button_green button_base schema-header__button']")))
    const AddAdvertButton = await driver.findElement(By.xpath("//div[@id = 'schema-top-button']/a[@class = 'button button_green button_base schema-header__button']"))
    expect ( AddAdvertButton.isDisplayed).toBeTruthy();
    await driver.quit();


    })

    test ("найти айфон 14 ", async ()=> {
        let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.onliner.by/");
    await driver.manage().window().maximize()
    const smartphoneButton = await driver.findElement(By.xpath("//span[@class ='project-navigation__sign' ]"))
    await smartphoneButton.click()
    await driver.wait(until.elementLocated(By.xpath("//li[@data-item-id = 'Apple']")))
    const AppleButton = await driver.findElement(By.xpath("//li[@data-item-id = 'Apple']"))
    await AppleButton.click();
    await driver.wait(until.elementLocated(By.xpath("//a[@href = 'https://catalog.onliner.by/mobile?mfr%5B0%5D=apple']")))
    const IphoneButton = await driver.findElement(By.xpath("//a[@href = 'https://catalog.onliner.by/mobile?mfr%5B0%5D=apple']"));
    await IphoneButton.click();
    await driver.wait(until.elementLocated(By.xpath("//span[text() = 'Смартфон Apple iPhone 14 128GB (полуночный)']")))
    const Iphone14 = await driver.findElement((By.xpath("//span[text() = 'Смартфон Apple iPhone 14 128GB (полуночный)']")));
    expect (Iphone14.isDisplayed).toBeTruthy();
    await driver.quit();

    })

    test ("Check user can open Catalog", async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.onliner.by/");
        await driver.manage().window().maximize()
        const catalogBtn = await driver.findElement(By.xpath("//a[@class='b-main-navigation__link']//span[contains(text(),'Каталог')]"));
        await catalogBtn.click();
        const calssifierLbl = await driver.findElement(By.xpath("//ul[@class='catalog-navigation-classifier ']"));
        await driver.wait(until.elementIsVisible(calssifierLbl));
        expect(await calssifierLbl.isDisplayed).toBeTruthy();
        await driver.quit();
    })








    