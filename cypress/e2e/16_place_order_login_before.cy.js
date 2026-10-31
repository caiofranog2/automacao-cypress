import homePage from '../pages/HomePage';
import signupLoginPage from '../pages/SignupLoginPage';
import signupFormPage from '../pages/SignupFormPage';
import accountCreatedPage from '../pages/AccountCreatedPage';
import productsPage from '../pages/ProductsPage';
import cartPage from '../pages/CartPage';
import checkoutPage from '../pages/CheckoutPage';
import paymentPage from '../pages/PaymentPage';

describe('Test Case 16: Place Order: Login before Checkout', () => {
  let user;

  before(() => {
    cy.generateUserData().then((userData) => {
      user = userData;
      homePage.visit().clickSignupLogin();
      signupLoginPage.fillSignup(user.name, user.email).clickSignup();
      signupFormPage.fillAccountDetails(user).clickCreateAccount();
      accountCreatedPage.verifyAccountCreated().clickContinue();
      homePage.clickLogout();
    });
  });

  it('deve logar antes de adicionar itens ao carrinho, finalizar pedido e excluir conta', () => {
    cy.fixture('testData').then((data) => {
      homePage.visit();
      homePage.verifyHomePageVisible();

      homePage.clickSignupLogin();
      signupLoginPage.verifyLoginToAccountVisible();
      signupLoginPage.fillLogin(user.email, user.password);
      signupLoginPage.clickLogin();

      homePage.verifyLoggedInAs(user.name);

      homePage.clickProducts();
      productsPage.verifyAllProductsPageVisible();
      productsPage.addFirstProductToCart();

      cartPage.verifyCartPageDisplayed();
      cartPage.clickProceedToCheckout();

      checkoutPage.verifyAddressDetailsVisible();
      checkoutPage.verifyReviewOrderVisible();
      checkoutPage.enterCommentAndPlaceOrder('Pedido via Test Case 16');

      paymentPage.fillPaymentDetails(data.payment);
      paymentPage.clickPayAndConfirmOrder();
      paymentPage.verifyOrderSuccessMessage();

      homePage.clickDeleteAccount();
      accountCreatedPage.verifyAccountDeleted();
      accountCreatedPage.clickContinue();
    });
  });
});
