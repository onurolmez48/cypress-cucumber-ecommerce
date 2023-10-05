import { Given,When,Then  } from "@badeball/cypress-cucumber-preprocessor";

Given("Open ecommerce web page",function(){
    cy.visit('https://automationexercise.com')
    cy.title().should('eq','Automation Exercise')
})

When("Click on Signup / Login button and Verify",() => {
    cy.get('a[href="/login"]').click()
    cy.title().should('eq','Automation Exercise - Signup / Login')
    cy.get('input[data-qa="signup-name"]').type('onur')
    cy.get('input[data-qa="signup-email"]').type('onurolmez123@gmail.com')
    cy.get('button[data-qa="signup-button"]').click()
})

When("Enter name and email address ",() => {
    cy.get('input[id="id_gender1"]').check().should('be.checked')
    cy.get('#name').type('onur')
    cy.get('#password').type('123456789')
    cy.get('#days').type('12')
    cy.get('#days').select('12').should('have.value','12')
    cy.get('#months').select('March').should('have.value','3')
    cy.get('#years').select('1998').should('have.value','1998')
    cy.get('#newsletter').click()
    cy.get('#optin').click()
    cy.get('#first_name').type('onur')
    cy.get('#last_name').type('olmez')
    cy.get('#address1').type('mugla')
    cy.get('#country').select('Canada').should('have.value','Canada')
    cy.get('#state').type('Ontario')
    cy.get('#city').type('Toronto')
    cy.get('#zipcode').type('123123')
    cy.get('#mobile_number').type('123123123')
    cy.get('button[data-qa="create-account"]').click()
     cy.title().should('eq','Automation Exercise - Account Created')
})

Then("Click Signup button and verify account", () => {
    cy.get('a[data-qa="continue-button"]').click()
    cy.get('a[href="/delete_account"]').click()
    cy.title().should('eq','Automation Exercise - Account Created')
})