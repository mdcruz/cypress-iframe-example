/// <reference types="cypress" />

describe('IFrames testing in Cypress', () => {
  it('should let you switch to the iframe', () => {
    cy.visit('index.html');
  });
});
