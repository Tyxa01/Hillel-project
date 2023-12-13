/// <reference types = "cypress"/>

describe("Test for profile", () => {
  const userAndPass = `${Cypress.env("siteAUTH")}:${Cypress.env("sitePASS")}`;
  it("Profile photo upload", () => {
    cy.visit(`https://${userAndPass}@qauto.forstudy.space/`);
    cy.request("POST", "https://qauto.forstudy.space/api/auth/signin", {
      email: Cypress.env("userEmail"),
      password: Cypress.env("password"),
      remember: false,
    });
    cy.visit(`https://${userAndPass}@qauto.forstudy.space/panel/profile/`);
    cy.get("button.btn-primary").click();
    cy.get("input#editProfilePhoto").selectFile(
      "cypress/fixtures/images/logo.jpeg"
    );
    cy.contains("button", "Save").click();
    cy.get(".alert-success").should("contain", "User profile has been updated");
  });
});
