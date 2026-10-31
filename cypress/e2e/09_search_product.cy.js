import homePage from '../pages/HomePage';
import productsPage from '../pages/ProductsPage';

describe('Test Case 9: Search Product', () => {
  it('deve buscar por um produto e validar a listagem dos itens encontrados', () => {
    cy.fixture('testData').then((data) => {
      homePage.visit();
      homePage.verifyHomePageVisible();
      homePage.clickProducts();
      productsPage.verifyAllProductsPageVisible();

      productsPage.searchProduct(data.search.term);
      productsPage.verifySearchedProductsVisible();
      productsPage.verifySearchResultsContain();
    });
  });
});
