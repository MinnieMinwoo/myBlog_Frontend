describe("Category function test", () => {
  it("Category add test", () => {
    cy.visit("localhost:3000");
    cy.get(".MainSection > .btn").click();
    cy.get('[value="Email"] > .fw-semibold').click();
    cy.get(":nth-child(1) > .form-control").type(Cypress.env("userName"));
    cy.get(":nth-child(2) > .form-control").type(Cypress.env("userPassword"));
    cy.get("form > .vstack > .btn").click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > .nav-link").click();
    cy.get(".hstack > .btn").click();
    cy.get(".btn-outline-primary").click();
    cy.get(".modal-body > form > .form-control").type("1");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".modal-footer > .btn-primary").click();
    cy.get("#\\30 \\,1").click();
    cy.get(".modal-body > form > .form-control").click();
    cy.get(".modal-body > form > .form-control").clear("1");
    cy.get(".modal-body > form > .form-control").type("2");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".card-title").should("have.text", "2");
    cy.get(".card-title").click();
    cy.get(".fs-1").should("have.text", "1 - 2");
    /* ==== End Cypress Studio ==== */
  });

  it("Category edit test", () => {
    cy.visit("localhost:3000");
    cy.get(".MainSection > .btn").click();
    cy.get('[value="Email"] > .fw-semibold').click();
    cy.get(":nth-child(1) > .form-control").type(Cypress.env("userName"));
    cy.get(":nth-child(2) > .form-control").type(Cypress.env("userPassword"));
    cy.get("form > .vstack > .btn").click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > .nav-link").click();
    cy.get(".mb-3 > .hstack > .btn").click();
    cy.get("#\\30 \\,2").click();
    cy.get(".modal-body > form > .form-control").click();
    cy.get(".modal-body > form > .form-control").clear();
    cy.get(".modal-body > form > .form-control").type("3");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".gap-1 > .fw-semibold").should("have.text", "3");
    cy.get("#\\30 \\,0\\,1").click();
    cy.get(".modal-body > form > .form-control").click();
    cy.get(".modal-body > form > .form-control").clear();
    cy.get(".modal-body > form > .form-control").type("4");
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".card-title").should("have.text", "4");
    /* ==== End Cypress Studio ==== */
  });

  it("Category delete test", () => {
    cy.visit("localhost:3000");
    cy.get(".MainSection > .btn").click();
    cy.get('[value="Email"] > .fw-semibold').click();
    cy.get(":nth-child(1) > .form-control").type(Cypress.env("userName"));
    cy.get(":nth-child(2) > .form-control").type(Cypress.env("userPassword"));
    cy.get("form > .vstack > .btn").click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > .nav-link").click();
    cy.get(".mb-3 > .hstack > .btn").click();
    cy.get("#\\30 \\,0\\,3").click();
    cy.get(".modal-footer > .btn-danger").click();
    cy.get(".text-info").should("have.text", "(0)");
    cy.visit("localhost:3000");
    cy.get(".MainSection > .btn").click();
    cy.get('[value="Email"] > .fw-semibold').click();
    cy.get(":nth-child(1) > .form-control").type(Cypress.env("userName"));
    cy.get(":nth-child(2) > .form-control").type(Cypress.env("userPassword"));
    cy.get("form > .vstack > .btn").click();
    cy.get(":nth-child(2) > .nav-link").click();
    cy.get(".mb-3 > .hstack > .btn").click();
    cy.get("#\\30 \\,3").click();
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".text-primary").should("have.text", "(0)");
    /* ==== End Cypress Studio ==== */
  });
});
