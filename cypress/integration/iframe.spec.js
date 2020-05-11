/// <reference types="cypress" />

describe('IFrames testing in Cypress', () => {
  const iframe = '#mce_0_ifr';

  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/iframe');
    cy.get('#mceu_3').as('boldIcon');
    cy.get('#mceu_9').as('listIcon');
  });

  it('should let you switch to the iframe', () => {
    cy.switchToIframe(iframe)
      .clear()
      .type('hello')
      .type('{command}a')
      .should('have.text', 'hello');
    cy.get('@boldIcon').click();
    cy.get('@listIcon').click();
    cy.switchToIframe(iframe).find('ul li strong').should('have.text', 'hello');
  });

  it('should let you switch to the iframe using the cypress iframe plugin', () => {
    cy.frameLoaded(iframe);
    cy.iframe()
      .clear()
      .type('hello')
      .type('{command}a')
      .should('have.text', 'hello');
    cy.get('@boldIcon').click();
    cy.get('@listIcon').click();

    cy.iframe().find('ul li strong').should('have.text', 'hello');
  });
});
