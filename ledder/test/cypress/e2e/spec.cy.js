/// <reference types="cypress" />

// tests the header section
describe("header section", ()=>{
    it('header section', () =>{
        cy.visit('/')
        cy.title().should('include', 'Ledder')
    })
})

// tests the responsiveness of the small screen size
describe("is responsive on mobile", ()=>{
    it("test if add button is visible on mobile", ()=>{
        cy.viewport('iphone-8')
        cy.visit('/application-form')
        cy.contains('Contact Person *').should('be.visible')
    })
})

// test to see if the logo is visible on application form
describe("hide logo on form", ()=>{
    it('should not show logo', ()=>{
        cy.viewport('iphone-8')
        cy.visit('/application-form')
        cy.contains('Ledder').should("not.be.visible")
    })
})

// testing out the application inputs
describe('application inputs', ()=>{
    it.only("should enter input for company  information section", ()=>{
        cy.visit('/application-form')
        cy.contains('Enter Company Name...').parent().find('input').type('Acer inc')
    })
})


