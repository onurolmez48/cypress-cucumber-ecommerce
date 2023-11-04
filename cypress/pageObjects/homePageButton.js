class HomePageButton{

    

    productsBtn(){
        cy.get('a[href="/products"]').click()
        cy.get('h2[class="title text-center"]').should('be.visible')
    }

    cartBtn(){
        cy.get('li:nth-child(3)').click()
    }

    signUpLoginBtn(){
        cy.get('a[href="/login"]').click()
    }

    testCaseBtn(){
        cy.get('a[href="/test_cases"]').click()
        cy.get('h2[class="title text-center"]').should('be.visible')
    }

    apiTestingBtn(){
        cy.get('i[class="fa fa-list"]').contain('API Testing').click()
        cy.get('h2[class="title text-center"]').should('be.visible')  
    }

    contactUsBtn(){
        cy.get('a[href="/contact_us"]').click()
        cy.get('div[class="col-sm-12"]').should('be.visible')
    }

}   

export const HomePageButton = new HomePageButton()