class HomePage {
  visit() {
    cy.visit('/');
    return this;
  }

  verifyHomePageVisible() {
    cy.get('body').should('be.visible');
    cy.get('#slider').should('be.visible');
    return this;
  }

  clickSignupLogin() {
    cy.get('a[href="/login"]').click();
  }

  clickProducts() {
    cy.get('a[href="/products"]').click();
  }

  clickCart() {
    cy.get('a[href="/view_cart"]').first().click();
  }

  verifyLoggedInAs(username) {
    cy.contains(`Logged in as ${username}`).should('be.visible');
    return this;
  }

  clickLogout() {
    cy.get('a[href="/logout"]').click();
  }

  clickDeleteAccount() {
    cy.get('a[href="/delete_account"]').click();
  }

  scrollToFooter() {
    cy.get('#footer').scrollIntoView();
    return this;
  }

  verifySubscriptionText() {
    cy.contains('h2', 'Subscription').should('be.visible');
    return this;
  }

  subscribe(email) {
    cy.get('#susbscribe_email').type(email);
    cy.get('#subscribe').click();
    return this;
  }

  verifySubscriptionSuccess() {
    cy.get('#success-subscribe').should('be.visible').and('contain.text', 'You have been successfully subscribed!');
    return this;
  }
}

export default new HomePage();

