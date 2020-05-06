Cypress.Commands.add('getIframeDocument', (iframe) => {
  return cy
    .get(iframe)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);
});
