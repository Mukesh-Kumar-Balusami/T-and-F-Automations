import { Page,Browser, chromium } from "@playwright/test";
import HomePage from "./HomePage";

export default class LoginPage{
    private readonly usernameBSInputSelector = '//input[@name="email"]';
    private readonly passwordBSInputSelector = '#inputPassword';
    private readonly loginButtonBSSelector = '[id="loginBtn"]';

    constructor (private page: Page){
        
    }

    async navigateToLoginPage(){

        await this.page.goto('https://uat.taylorfrancis.com/editorial-dashboard/');
    }

    async fillUsername(username: string){
        await this.page.locator(this.usernameBSInputSelector).fill(username);
    }

    async fillPassword(passeord: string){
        await this.page.locator(this.passwordBSInputSelector).fill(passeord);
    }

    async clickLoginButton(){
        await this.page
        .locator(this.loginButtonBSSelector)
        .click()
        .catch((error) => {
            console.error('ERROR: Problem with login: ', error);
            throw error; //Rethrowing the error
        });

        const homePage = new HomePage(this.page)
        return homePage;

    }
    
}