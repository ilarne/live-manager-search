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
    cy.inputTextToSearchbar(inputText);
    cy.get("[data-cy=results-name]").contains(inputText);
  });

  it("Shows a manager's initials when their name is entered", () => {
    cy.inputTextToSearchbar(inputText);
    cy.contains("[data-cy=initials]", "HB");
    cy.contains("[data-cy=initials]", "HM");
  });
});
