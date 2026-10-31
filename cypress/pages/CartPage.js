class CartPage {
  verifyCartPageDisplayed() {
    cy.url().should('include', '/view_cart');
    cy.get('#cart_items').should('be.visible');
    return this;
  }

  clickProceedToCheckout() {
    cy.contains('a', 'Proceed To Checkout').click();
  }

  clickRegisterLoginModal() {
    cy.get('#checkoutModal').should('be.visible');
    cy.get('#checkoutModal a[href="/login"]').click();
  }
}

export default new CartPage();

