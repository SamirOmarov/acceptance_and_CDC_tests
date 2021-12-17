// acceptance.spec.js created with Cypress


/// <reference types="cypress" />


describe('TDD Todo app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
      cy.wait(500)
    })
  
    it('displays no todo item buy default', () => {
      
      cy.get('.todo').should('have.length', 0)
      cy.get('[data-testid=no-task]').first().should('contain', 'You have no task')
    })
  
    it('can add new todo items', () => {
      // store item text in a variable so we can reuse it
      const newItem = 'Test Tdd'
  
      cy.get('[data-testid=input-field]').type(`${newItem}{enter}`)
  
      // Since it's the newest item, it should exist as the last element in the list.
      // Since assertions yield the element that was asserted on,
      // we can chain both of these assertions together into a single statement.
      cy.get('.todo')
        .should('have.length', 1)
        .last()
        .should('contain', newItem)
    })
  
    it('can check off an item as completed', () => {
      cy.contains('Test Tdd')
        .parent()
        .find('[data-testid=complete-button]')
        .click()
  
      // Now that we've checked the button, we can go ahead and make sure
      // that the list is empty.
      cy.get('.todo').should('have.length', 0)
    })
  
  
  })
  