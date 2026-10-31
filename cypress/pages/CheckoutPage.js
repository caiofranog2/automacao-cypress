class CheckoutPage {
  verifyAddressDetailsVisible() {
    cy.contains('h2', 'Address Details').should('be.visible');
    return this;
  }

  verifyReviewOrderVisible() {
    cy.contains('h2', 'Review Your Order').should('be.visible');
    return this;
  }

  enterCommentAndPlaceOrder(comment = 'Order placed by automated test') {
    cy.get('textarea[name="message"]').type(comment);
    cy.get('a[href="/payment"]').click();
  }
}

export default new CheckoutPage();

