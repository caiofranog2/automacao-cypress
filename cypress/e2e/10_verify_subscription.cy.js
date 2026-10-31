import homePage from '../pages/HomePage';

describe('Test Case 10: Verify Subscription in home page', () => {
  it('deve realizar inscrição na newsletter com sucesso no rodapé da página inicial', () => {
    const randomEmail = `subscriber_${Date.now()}@example.com`;

    homePage.visit();
    homePage.verifyHomePageVisible();
    homePage.scrollToFooter();
    homePage.verifySubscriptionText();
    homePage.subscribe(randomEmail);
    homePage.verifySubscriptionSuccess();
  });
});
