import { Page, expect } from "@playwright/test";
import exp from "constants";

export default class HomePage{

    private readonly eadPageHeading = "//span[@class='title ng-star-inserted']";

    

    constructor (private page: Page){

    }

    async expectBooksEADtittleLocator(){

        const booksEADtittle = await this.page.title();

        console.log(booksEADtittle);

        if(booksEADtittle == 'Taylor & Francis Group'){
            console.log('Logged in and Navigated to EA Dashboard successfully...');
        }else{
            console.log('Having problem with login or navigation process to EA Dashboard');
        }

        await expect(booksEADtittle).toEqual('Taylor & Francis Group');
        
    }

    async expecteadPageHeading(){
        await expect(this.page.getByTitle(this.eadPageHeading)).toBeVisible;
    }

}