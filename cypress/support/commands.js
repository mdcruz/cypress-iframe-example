Cypress.Commands.add('getIframeDocument', () => {
  return cy
    .get('#mce_0_ifr')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);
});
