import homePage from '../pages/HomePage';
import signupLoginPage from '../pages/SignupLoginPage';
import signupFormPage from '../pages/SignupFormPage';
import accountCreatedPage from '../pages/AccountCreatedPage';
import productsPage from '../pages/ProductsPage';
import cartPage from '../pages/CartPage';
import checkoutPage from '../pages/CheckoutPage';
import paymentPage from '../pages/PaymentPage';

describe('Test Case 15: Place Order: Register before Checkout', () => {
  it('deve cadastrar usuário antes do checkout, adicionar produto, finalizar pedido e excluir conta', () => {
    cy.fixture('testData').then((data) => {
      cy.generateUserData().then((user) => {
        homePage.visit();
        homePage.verifyHomePageVisible();
        homePage.clickSignupLogin();

        signupLoginPage.verifyNewUserSignupVisible();
        signupLoginPage.fillSignup(user.name, user.email);
        signupLoginPage.clickSignup();

        signupFormPage.verifyAccountInfoVisible();
        signupFormPage.fillAccountDetails(user);
        signupFormPage.clickCreateAccount();

        accountCreatedPage.verifyAccountCreated();
        accountCreatedPage.clickContinue();
        homePage.verifyLoggedInAs(user.name);

        homePage.clickProducts();
        productsPage.verifyAllProductsPageVisible();
        productsPage.addFirstProductToCart();

        cartPage.verifyCartPageDisplayed();
        cartPage.clickProceedToCheckout();

        checkoutPage.verifyAddressDetailsVisible();
        checkoutPage.verifyReviewOrderVisible();
        checkoutPage.enterCommentAndPlaceOrder('Favor deixar na portaria do bloco');

        paymentPage.fillPaymentDetails(data.payment);
        paymentPage.clickPayAndConfirmOrder();
        paymentPage.verifyOrderSuccessMessage();

        homePage.clickDeleteAccount();
        accountCreatedPage.verifyAccountDeleted();
        accountCreatedPage.clickContinue();
      });
    });
  });
});
