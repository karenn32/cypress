class Page {
  navigate() {
    cy.visit("https://demo.realworld.io/#/");
  }

  getErrorMessage() {
    return cy.get(".error-messages");
  }
}

export default Page;
