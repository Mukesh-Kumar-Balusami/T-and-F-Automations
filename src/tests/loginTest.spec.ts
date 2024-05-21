import LoginPage from "../pages/LoginPage";
import {test} from "@playwright/test"

test ('loginTest', async ({page}) =>{

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername('bisjit.bhol@gmail.com');
    await loginPage.fillPassword('Metric@123456');

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectBooksEADtittleLocator();
    await homePage.expecteadPageHeading();


    // await loginPage.clickLoginButton();

    // // await homePage.expectBooksEADtittleLocator();
})