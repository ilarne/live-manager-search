Cypress.Commands.add("inputTextToSearchbar", text => {
  cy.get("[data-cy=searchBar]").type(text);
  cy.wait(1000);
});
