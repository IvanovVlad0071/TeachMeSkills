export default class MainPage {

    
    public open () {
        return browser.url(`https://www.kinopoisk.ru/`)
    }
    public get VacancyButton (){
        return $ ("//a[text() = 'Вакансии']")
    }
    public async OpenVacancy (){
        await this.VacancyButton.click();
    }
}