import homePage from '../pages/HomePage';
import signupLoginPage from '../pages/SignupLoginPage';
import signupFormPage from '../pages/SignupFormPage';
import accountCreatedPage from '../pages/AccountCreatedPage';

describe('Test Case 1: Register User', () => {
  it('deve registrar um novo usuário com sucesso e em seguida deletar a conta', () => {
    cy.generateUserData().then((userData) => {
      homePage.visit();
      homePage.verifyHomePageVisible();
      homePage.clickSignupLogin();

      signupLoginPage.verifyNewUserSignupVisible();
      signupLoginPage.fillSignup(userData.name, userData.email);
      signupLoginPage.clickSignup();

      signupFormPage.verifyAccountInfoVisible();
      signupFormPage.fillAccountDetails(userData);
      signupFormPage.clickCreateAccount();

      accountCreatedPage.verifyAccountCreated();
      accountCreatedPage.clickContinue();

      homePage.verifyLoggedInAs(userData.name);
      homePage.clickDeleteAccount();

      accountCreatedPage.verifyAccountDeleted();
      accountCreatedPage.clickContinue();
    });
  });
});
