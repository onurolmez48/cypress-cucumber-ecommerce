import { should } from "chai"

class SignupPage {

    signUpName = 'input[data-qa="signup-name"]'
    signUpEmail = 'input[data-qa="signup-email"]'
    maleTitle = '#id_gender1'
    femaleTitle =  '#id_gender2'
    password = '#password'
    firstName = '#first_name'
    lastName = '#last_name'
    company = '#company'
    address1 = '#address1'
    country = '#country'
    state = '#state'
    city = '#city'
    zipCode = '#zipcode'
    mobile_number = '#mobile_number'



   
    webPage(){
        cy.visit('https://automationexercise.com')
        cy.title().should('eq','Automation Exercise')
    }

    getNameAndEmail(name,mail){
        cy.get(this.signUpName).type(name)
        cy.get(this.signUpEmail).type(mail)
        
    }

    loginBtn(){
        cy.get('a[href="/login"]').click()
        cy.get('.signup-form').should('contain.text', 'New User Signup!')
    }

    signUpBtn(){
        cy.get('button[data-qa="signup-button"]').click()
        cy.get('.login-form').should('contain.text','Enter Account Information')
    }

    genderTitle(){
        cy.get(this.maleTitle).check().should('be.checked')
    }

    getDetails(passwordd,dayOption,dayNumber,monthsName,monthsNumber,yearsOption,yearDate){
        cy.get(this.password).type(passwordd)
        cy.get('#days').select(dayOption).should('have.value', dayNumber)
        cy.get('#months').select(monthsName).should('have.value',monthsNumber)
        cy.get('#years').select(yearsOption).should('have.value', yearDate)
    }

    checkBoxes(){
        cy.get('#newsletter').click()
        cy.get('#optin').click()
    }

    getFillDetails(firstNamee,lastNamee,address,countryName,countryName1,statee,cityy,zipCodee,mobileNum){
        cy.get(this.firstName).type(firstNamee)
        cy.get(this.lastName).type(lastNamee)
        cy.get(this.address1).type(address)
        cy.get(this.country).select(countryName).should('have.value',countryName1)
        cy.get(this.state).type(statee)
        cy.get(this.city).type(cityy)
        cy.get(this.zipCode).type(zipCodee)
        cy.get(this.mobile_number).type(mobileNum)

    }
    
    createAccountBtn(){
        cy.get('button[data-qa="create-account"]').click()
        cy.get('h2[data-qa="account-created"]').should('contain.text', 'Account Created!')
    }

    continueAndDeleteBtn(){
        cy.get('a[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')
        cy.get('a[href="/delete_account"]').click()
        cy.get('h2[data-qa="account-deleted"]').should('be.visible')
        cy.get('a[data-qa="continue-button"]').click()
    }
}

export const signUp = new SignupPage();