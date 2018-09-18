describe("Input", () => {
  const text = "Harriet";

  beforeEach(function() {
    cy.visit("/");
  });
  it("Focus on input box when loaded", () => {
    cy.focused().should("have.class", "searchBar");
  });

  it("Accepts input", () => {
    cy.get(".searchBar")
      .type(text)
      .should("have.value", text);
  });
});
