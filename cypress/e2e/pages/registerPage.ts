import Page from "./page";

class RegisterPage extends Page {
  private readonly usernameInput = 'input[placeholder="Username"]';
  private readonly emailInput = 'input[placeholder="Email"]';
  private readonly passwordInput = 'input[placeholder="Password"]';
  private readonly signUpButton = 'button[type="submit"]';
  private readonly errorMessage = ".error-messages";

  constructor() {
    super();
  }

  navigate() {
    cy.visit("#/register");
  }

  getUsernameInput() {
    return cy.get(this.usernameInput);
  }

  getEmailInput() {
    return cy.get(this.emailInput);
  }

  getPasswordInput() {
    return cy.get(this.passwordInput);
  }

  getSignUpButton() {
    return cy.get(this.signUpButton);
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }

  enterUsername(username: string) {
    this.getUsernameInput().type(username);
  }

  enterEmail(email: string) {
    this.getEmailInput().type(email);
  }

  enterPassword(password: string) {
    this.getPasswordInput().type(password);
  }

  clickSignUp() {
    this.getSignUpButton().click();
  }
}

export default RegisterPage;
