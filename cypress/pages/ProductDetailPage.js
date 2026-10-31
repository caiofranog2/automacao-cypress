class ProductDetailPage {
  verifyProductDetailsVisible() {
    cy.url().should('include', '/product_details/');
    cy.get('.product-information').should('be.visible');
    cy.get('.product-information h2').should('be.visible');
    cy.get('.product-information').contains('Category:').should('be.visible');
    cy.get('.product-information').contains('Rs.').should('be.visible');
    cy.get('.product-information').contains('Availability:').should('be.visible');
    cy.get('.product-information').contains('Condition:').should('be.visible');
    cy.get('.product-information').contains('Brand:').should('be.visible');

    return this;
  }
}

export default new ProductDetailPage();

