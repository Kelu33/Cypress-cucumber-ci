import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://duckduckgo.com/'
Given('I open DuckDuckGo page', () => {
  cy.visit(url)
})
