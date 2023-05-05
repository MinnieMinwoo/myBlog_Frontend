describe("template spec", () => {
  it("passes", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("localhost:3000:/");
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".MainSection > .btn").click();
    cy.get('[value="Email"] > .fw-semibold').click();
    cy.get(":nth-child(1) > .form-control").clear("n");
    cy.get(":nth-child(1) > .form-control").type(Cypress.env("userName"));
    cy.get(":nth-child(2) > .form-control").clear();
    cy.get(":nth-child(2) > .form-control").type(Cypress.env("userPassword"));
    cy.get("form > .vstack > .btn").click();
    cy.get(":nth-child(1) > .nav-link").should("have.text", "Home");
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.img-thumbnail').click();
    cy.get('[name="logout"]').click();
    cy.get('.fw-bold').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
});
