/// <reference types="cypress" />

describe('IFrames testing in Cypress', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/iframe');
  });
});
