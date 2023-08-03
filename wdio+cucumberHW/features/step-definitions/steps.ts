import { Given, When, Then } from '@wdio/cucumber-framework';
// import MainPage from '../pageobjects/Main.Page';
// import  {VacancyPage}  from '../pageobjects/Vacancy.Page';
import MainPage from '../pageobjects/Main.Page.js';
import { VacancyPage } from '../pageobjects/Vacancy.Page.js';


const main  = new MainPage()
const Vacancy = new VacancyPage();

Given(/^I am on the Main page/ , async()=>{
    await main.open();
})
When(/^I Click on the Vacancy button/ , async () => {
    await  main.OpenVacancy();
    });
    
Then(/^I should get list of Vacancies./, async () => {
    await expect(Vacancy.ListOfVacancy).toBeDisplayed();
    })