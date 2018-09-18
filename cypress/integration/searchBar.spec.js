describe("Input", () => {
  const inputText = "Harriet";

  beforeEach(function() {
    cy.visit("/");
  });
  it("Focus on input box when loaded", () => {
    cy.focused().should("have.class", "searchBar");
  });
});
