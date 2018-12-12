/// <reference types="Cypress" />

context('Pages', () => {
  context('Home', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('has heading text', () => {
      cy.contains('nuxt-cypress-template')
      cy.contains('Template for Nuxt + Cypress + TypeScript')
    })
  })
})
