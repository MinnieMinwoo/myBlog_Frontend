describe("Auth test", () => {
  it("Visit homepage", () => {
    cy.visit("localhost:3000/");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Sign up test", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("localhost:3000/");
    cy.get(".MainSection > .btn").click();
    cy.get(":nth-child(1) > .btn-primary").click();
    cy.get('[value="Email"] > .fw-semibold').click();
    cy.get(":nth-child(1) > .form-control").clear("n");
    cy.get(":nth-child(1) > .form-control").type("testMail@test.com");
    cy.get(":nth-child(2) > .form-control").clear();
    cy.get(":nth-child(2) > .form-control").type("test123");
    cy.get(":nth-child(3) > .form-control").clear("T");
    cy.get(":nth-child(3) > .form-control").type("TestNickname");
    cy.get("form > .vstack > .btn").click();
    cy.get("p").should("have.text", "Please complete email verification if you want to login.");
    cy.get(".modal-footer > .btn-secondary").click();
    cy.get(".fw-bold").should("have.text", "Publish your stroy, your way");
    /* ==== End Cypress Studio ==== */
  });
});
