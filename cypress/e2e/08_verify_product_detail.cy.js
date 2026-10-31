import homePage from '../pages/HomePage';
import productsPage from '../pages/ProductsPage';
import productDetailPage from '../pages/ProductDetailPage';

describe('Test Case 8: Verify All Products and product detail page', () => {
  it('deve listar todos os produtos e verificar os detalhes do primeiro produto', () => {
    homePage.visit();
    homePage.verifyHomePageVisible();
    homePage.clickProducts();

    productsPage.verifyAllProductsPageVisible();
    productsPage.verifyProductsListVisible();
    productsPage.viewFirstProduct();

    productDetailPage.verifyProductDetailsVisible();
  });
});
