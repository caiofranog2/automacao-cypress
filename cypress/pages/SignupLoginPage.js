class SignupLoginPage {
  verifyNewUserSignupVisible() {
    cy.contains('h2', 'New User Signup!').should('be.visible');
    return this;
  }

  verifyLoginToAccountVisible() {
    cy.contains('h2', 'Login to your account').should('be.visible');
    return this;
  }

  fillSignup(name, email) {
    cy.get('[data-qa="signup-name"]').clear().type(name);
    cy.get('[data-qa="signup-email"]').clear().type(email);
    return this;
  }

  clickSignup() {
    cy.get('[data-qa="signup-button"]').click();
  }

  fillLogin(email, password) {
    cy.get('[data-qa="login-email"]').clear().type(email);
    cy.get('[data-qa="login-password"]').clear().type(password);
    return this;
  }

  clickLogin() {
    cy.get('[data-qa="login-button"]').click();
  }

  verifyLoginErrorMessage() {
    cy.contains('Your email or password is incorrect!').should('be.visible');
    return this;
  }

  verifyExistingEmailErrorMessage() {
    cy.contains('Email Address already exist!').should('be.visible');
    return this;
  }
}

export default new SignupLoginPage();

