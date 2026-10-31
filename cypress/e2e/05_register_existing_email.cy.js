import homePage from '../pages/HomePage';
import signupLoginPage from '../pages/SignupLoginPage';
import signupFormPage from '../pages/SignupFormPage';
import accountCreatedPage from '../pages/AccountCreatedPage';

describe('Test Case 5: Register User with existing email', () => {
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

  after(() => {
    homePage.clickSignupLogin();
    signupLoginPage.fillLogin(user.email, user.password).clickLogin();
    homePage.clickDeleteAccount();
    accountCreatedPage.verifyAccountDeleted();
  });

  it('deve exibir mensagem de erro ao tentar cadastrar um e-mail já existente', () => {
    homePage.visit();
    homePage.verifyHomePageVisible();
    homePage.clickSignupLogin();
    signupLoginPage.verifyNewUserSignupVisible();

    signupLoginPage.fillSignup('Outro Nome', user.email);
    signupLoginPage.clickSignup();

    signupLoginPage.verifyExistingEmailErrorMessage();
  });
});
