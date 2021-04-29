/// <reference types="Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given('User open google', () => {
    cy.visit('https://www.google.com/')
})

When('User input "JBehave" on google search field and enter', () => {
  cy.get('input[name="q"]')
  .should('be.visible')
  .type('JBehave{enter}')
})

Then('The results include the string “What is JBehave?”', () => {
  cy.get('.g')
  .should('contain', 'What is JBehave?')
})