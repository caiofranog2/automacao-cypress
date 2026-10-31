class PaymentPage {
  fillPaymentDetails(paymentData) {
    cy.get('[data-qa="name-on-card"]').type(paymentData.nameOnCard);
    cy.get('[data-qa="card-number"]').type(paymentData.cardNumber);
    cy.get('[data-qa="cvc"]').type(paymentData.cvc);
    cy.get('[data-qa="expiry-month"]').type(paymentData.expiryMonth);
    cy.get('[data-qa="expiry-year"]').type(paymentData.expiryYear);
    return this;
  }

  clickPayAndConfirmOrder() {
    cy.get('[data-qa="pay-button"]').click();
  }

  verifyOrderSuccessMessage() {
    cy.contains('p', 'Congratulations! Your order has been confirmed!').should('be.visible');
    return this;
  }
}

export default new PaymentPage();

