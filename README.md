# Trabalho de Automação de Testes Web

Projeto de automação de testes E2E utilizando Cypress na aplicação [Automation Exercise](https://automationexercise.com/test_cases).

## Casos de Teste
- Test Case 1: Register User
- Test Case 2: Login User with correct email and password
- Test Case 3: Login User with incorrect email and password
- Test Case 4: Logout User
- Test Case 5: Register User with existing email
- Test Case 8: Verify All Products and product detail page
- Test Case 9: Search Product
- Test Case 10: Verify Subscription in home page
- Test Case 15: Place Order: Register before Checkout
- Test Case 16: Place Order: Login before Checkout

## Estrutura
- **Cypress** com Page Object Model (POM) na pasta `cypress/pages`
- **Mochawesome** para geração de relatórios HTML em `cypress/reports/html`
- **GitHub Actions** configurado em `.github/workflows/cypress.yml`

## Como rodar o projeto

1. Instalar dependências:
```bash
npm install
```

2. Rodar os testes via terminal (headless):
```bash
npm test
```

3. Abrir o Cypress:
```bash
npm run cypress:open
```

O relatório HTML é gerado automaticamente na pasta `cypress/reports/html/index.html`.
