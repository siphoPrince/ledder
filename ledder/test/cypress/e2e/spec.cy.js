/// <reference types="cypress" />

// ============================
// Header Section Tests
// ============================

describe("Header section", ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Should display the correct title', () =>{
        cy.title().should('include', 'Ledder')
    })
})

// ===========================================
// tests the responsiveness of the small screen size
// ===========================================
describe("Responsive Design", ()=>{
    beforeEach(()=>{
        cy.visit('/application-form')
        cy.viewport('iphone-8')
    })

    it("test if add button is visible on mobile", ()=>{
        cy.contains('Contact Person *').should('be.visible')
    })
})

// ============================================
// Application form Tests
// ============================================
describe("Application form", ()=>{
    beforeEach(()=>{
        cy.visit('application-form')
    })

    it.skip('should not show logo', ()=>{
        cy.viewport('iphone-8')
        cy.contains('Ledder').should("not.be.visible")
    })

    it("should enter valid input", ()=>{
        cy.contains('Company Name *').find('input').type('Acer inc')
        cy.contains('Contact Person *').find('input').type('Paul')
        cy.contains('About Company *').find('textarea').type('This is a hardware and software company')
        cy.contains('job Title *').find('input').type('Software Dev')
        cy.contains('Contact Number').find('input').type('0682691386')
        cy.contains('Email').find('input').type('sipho@gmail.com').should('have.value', 'sipho@gmail.com')
        cy.contains('Submit Application').click()


    })

    it.skip('enters invalid numbers as text input', ()=>{
        cy.contains('Company Name *').find('input').type('5258')
        cy.contains('Contact Person *').find('input').type('885')
        cy.contains('About Company *').find('textarea').type('856')
        
    })

})



