import homePage from '../pages/HomePage';
import signupLoginPage from '../pages/SignupLoginPage';

describe('Test Case 3: Login User with incorrect email and password', () => {
  it('deve exibir mensagem de erro ao tentar logar com credenciais inválidas', () => {
    cy.fixture('testData').then((data) => {
      homePage.visit();
      homePage.verifyHomePageVisible();
      homePage.clickSignupLogin();

      signupLoginPage.verifyLoginToAccountVisible();
      signupLoginPage.fillLogin(data.invalidUser.email, data.invalidUser.password);
      signupLoginPage.clickLogin();

      signupLoginPage.verifyLoginErrorMessage();
    });
  });
});
