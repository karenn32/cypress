class Page {
  navigate() {
    cy.visit("");
  }

  getErrorMessage() {
    return cy.get(".error-messages");
  }
}

export default Page;
