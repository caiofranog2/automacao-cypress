class AccountCreatedPage {
  verifyAccountCreated() {
    cy.get('[data-qa="account-created"]').should('be.visible');
    return this;
  }

  clickContinue() {
    cy.get('[data-qa="continue-button"]').click();
  }

  verifyAccountDeleted() {
    cy.get('[data-qa="account-deleted"]').should('be.visible');
    return this;
  }
}

export default new AccountCreatedPage();

