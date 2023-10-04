describe('TEST SUIE 001',() => {

    it('Test Case 001:Register User',() => {
        cy.visit('https://automationexercise.com')
        cy.title().should('eq','Automation Exercise')
    })
})