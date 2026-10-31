import homePage from '../pages/HomePage';
import signupLoginPage from '../pages/SignupLoginPage';
import signupFormPage from '../pages/SignupFormPage';
import accountCreatedPage from '../pages/AccountCreatedPage';

describe('Test Case 2: Login User with correct email and password', () => {
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

  it('deve logar com e-mail e senha corretos e excluir a conta ao final', () => {
    homePage.visit();
    homePage.verifyHomePageVisible();
    homePage.clickSignupLogin();

    signupLoginPage.verifyLoginToAccountVisible();
    signupLoginPage.fillLogin(user.email, user.password);
    signupLoginPage.clickLogin();

    homePage.verifyLoggedInAs(user.name);
    homePage.clickDeleteAccount();
    accountCreatedPage.verifyAccountDeleted();
    accountCreatedPage.clickContinue();
  });
});
