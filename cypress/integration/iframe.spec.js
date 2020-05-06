/// <reference types="cypress" />

describe('IFrames testing in Cypress', () => {
  const iframe = '#mce_0_ifr';

  beforeEach(() => cy.visit('http://the-internet.herokuapp.com/iframe'));

  it('should let you switch to the iframe', () => {
    cy.getIframeDocument(iframe)
      .clear()
      .type('hello')
      .type('{command}a')
      .should('have.text', 'hello');
    cy.get('#mceu_3').click();
    cy.get('#mceu_9').click();
    cy.getIframeDocument(iframe)
      .find('ul li strong')
      .should('have.text', 'hello');
  });

  it('should let you switch to the iframe using the cypress iframe plugin', () => {
    cy.frameLoaded(iframe);
    cy.iframe()
      .clear()
      .type('hello')
      .type('{command}a')
      .should('have.text', 'hello');
    cy.get('#mceu_3').click();
    cy.get('#mceu_9').click();

    cy.frameLoaded(iframe);
    cy.iframe().find('ul li strong').should('have.text', 'hello');
  });
});
