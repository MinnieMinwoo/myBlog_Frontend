describe("template spec", () => {
  /* ==== Test Created with Cypress Studio ==== */
  it("Write Test", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("localhost:3000");
    cy.get(".MainSection > .btn").click();
    cy.get('[value="Email"] > .fw-semibold').click();
    cy.get(":nth-child(1) > .form-control").type(Cypress.env("userName"));
    cy.get(":nth-child(2) > .form-control").type(Cypress.env("userPassword"));
    cy.get("form > .vstack > .btn").click();
    cy.get(".PostHeader > .btn").click();
    cy.get(".post-input-bar").type("Hello Test!");
    cy.get(".w-md-editor-text-input").type("hello my test");
    cy.get(".w-md-editor-text-input").click();
    cy.get("section > .btn-primary").click();
    cy.get(
      "div > div.Write > div.Preview.preview-layout.bg-fff.z-index-1.scrollOpen > div:nth-child(2) > div:nth-child(1) > div > input"
    ).type("Test,");
    cy.get(".mb-3 > .btn").should("have.text", "Test");
    cy.get(":nth-child(2) > .hstack > .btn-primary").click();
    cy.get(".fs-1").should("have.text", "Hello Test!");
    cy.get(".wmde-markdown > p").should("have.text", "hello my test");
    cy.get(".w-100 > :nth-child(5)").should("be.visible");
    cy.get(".w-100 > :nth-child(6)").should("be.visible");
    cy.get(".img-thumbnail").click();
    cy.get('[name="logout"]').click();
    cy.get(".fw-bold").should("be.visible");
    /* ==== End Cypress Studio ==== */
  });
  it("Edit Test", function () {
    cy.visit("localhost:3000");
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".MainSection > .btn").click();
    cy.visit("localhost:3000");
    cy.get(".MainSection > .btn").click();
    cy.get('[value="Email"] > .fw-semibold').click();
    cy.get(":nth-child(1) > .form-control").type(Cypress.env("userName"));
    cy.get(":nth-child(2) > .form-control").type(Cypress.env("userPassword"));
    cy.get("form > .vstack > .btn").click();
    cy.get(".col > .btn").should("have.text", "Test");
    cy.get(".vstack > .overflow-hidden").click();
    cy.get(".w-100 > :nth-child(5)").click();
    cy.get(".post-input-bar").clear();
    cy.get(".post-input-bar").type("Hello Test?");
    cy.get("section > .btn-primary").click();
    cy.get(".mb-3 > .btn").click();
    cy.get(".col > .form-control").type("Test2,");
    cy.get(":nth-child(2) > .hstack > .btn-primary").click();
    cy.get(".fs-1").should("have.text", "Hello Test?");
    cy.get(":nth-child(1) > .nav-link").click();
    cy.get(".col > .btn").should("have.text", "Test2");
    cy.get(".img-thumbnail").click();
    cy.get('[name="logout"]').click();
    cy.get(".fw-bold").should("be.visible");
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Delete Post", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("localhost:3000");
    cy.get(".MainSection > .btn").click();
    cy.get('[value="Email"] > .fw-semibold').click();
    cy.get(":nth-child(1) > .form-control").type(Cypress.env("userName"));
    cy.get(":nth-child(2) > .form-control").type(Cypress.env("userPassword"));
    cy.get("form > .vstack > .btn").click();
    cy.get(".PostItem > .vstack").click();
    cy.get(".w-100 > :nth-child(6)").click();
    cy.get(".btn-danger").click();
    cy.get(".modal-title").should("have.text", "Delete post complete");
    cy.get(".btn-secondary").click();
    cy.get(".text-primary").should("have.text", "(0)");
    /* ==== End Cypress Studio ==== */
  });
});
