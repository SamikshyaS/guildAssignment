import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../pages/loginPage.js';
const loginobj = new loginPage()
Given('I am on the login page', () =>
{
    cy.visit('https://www.saucedemo.com')
})

When('I enter valid credentials',() => {
    loginobj.enterusername('standard_user'),
    loginobj.enterpassword('secret_sauce')
   })

When('I click on login', () => {
    loginobj.clickbutton()
})

Then('I should see the page title as Swag Labs', () =>
{
cy.title().should('eq','Swag Labs')
})
