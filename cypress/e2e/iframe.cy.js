/// <reference types="cypress" />

describe('IFrames testing in Cypress', () => {
  const iframe = '#mce_0_ifr';

  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/iframe');
  });

  it('should let you switch to the iframe', () => {
    cy.switchToIframe(iframe)
      .clear()
      .type('hello')
      .should('have.text', 'hello');

    });

  it('should let you switch to the iframe using the cypress iframe plugin', () => {
    cy.frameLoaded(iframe);
    cy.iframe()
      .clear()
      .type('hello')
      .should('have.text', 'hello');
  });
});
