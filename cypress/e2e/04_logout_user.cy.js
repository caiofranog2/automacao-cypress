import homePage from '../pages/HomePage';
import signupLoginPage from '../pages/SignupLoginPage';
import signupFormPage from '../pages/SignupFormPage';
import accountCreatedPage from '../pages/AccountCreatedPage';

describe('Test Case 4: Logout User', () => {
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

  it('deve realizar logout com sucesso e retornar para a tela de login', () => {
    homePage.visit();
    homePage.verifyHomePageVisible();
    homePage.clickSignupLogin();
    signupLoginPage.verifyLoginToAccountVisible();

    signupLoginPage.fillLogin(user.email, user.password);
    signupLoginPage.clickLogin();

    homePage.verifyLoggedInAs(user.name);
    homePage.clickLogout();

    cy.url().should('include', '/login');
    signupLoginPage.verifyLoginToAccountVisible();
  });
});
