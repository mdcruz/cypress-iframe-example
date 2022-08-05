/// <reference types="cypress" />

describe('Cross domain iframes', () => {
  // this test will fail unless you set chromeWebSecurity to false
  it('should let you switch to the iframe', () => {
    cy.visit('index.html');
    cy.switchToIframe('[data-cy="test-iframe"]');
  });
});
