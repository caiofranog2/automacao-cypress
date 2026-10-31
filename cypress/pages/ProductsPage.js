class ProductsPage {
  verifyAllProductsPageVisible() {
    cy.url().should('include', '/products');
    cy.contains('h2', 'All Products').should('be.visible');
    return this;
  }

  verifyProductsListVisible() {
    cy.get('.features_items').should('be.visible');
    cy.get('.features_items .col-sm-4').should('have.length.greaterThan', 0);
    return this;
  }

  viewFirstProduct() {
    cy.get('.features_items').find('a[href^="/product_details/"]').first().click();
  }

  searchProduct(term) {
    cy.get('#search_product').clear().type(term);
    cy.get('#submit_search').click();
    return this;
  }

  verifySearchedProductsVisible() {
    cy.contains('h2', 'Searched Products').should('be.visible');
    return this;
  }

  verifySearchResultsContain() {
    cy.get('.features_items .col-sm-4').should('have.length.greaterThan', 0);
    return this;
  }

  addFirstProductToCart() {
    cy.get('.features_items .add-to-cart').first().click({ force: true });
    cy.get('.modal-content', { timeout: 10000 }).should('be.visible');
    cy.get('.modal-content a[href="/view_cart"]').click();
  }
}

export default new ProductsPage();

