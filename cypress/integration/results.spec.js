describe("Results", () => {
  const inputText = "Harriet";
  beforeEach(function() {
    cy.visit("/");
  });

  it("Shows nothing when no input", () => {
    cy.get("[data-cy=results-box]").should("not.be.visible");
    cy.get("[data-cy=initials-box]").should("not.be.visible");
  });

  it("Shows a manager when their name is entered", () => {
    cy.get("[data-cy=searchBar]").type(inputText);
    cy.wait(1000);
    cy.contains("[data-cy=results-name]", inputText);
  });

  it("Shows a manager's initials when their name is entered", () => {
    cy.get("[data-cy=searchBar]").type(inputText);
    cy.wait(1000);
    cy.contains("[data-cy=initials]", "HB");
    cy.contains("[data-cy=initials]", "HM");
  });
});
