class SignupFormPage {
  verifyAccountInfoVisible() {
    cy.contains('b', 'Enter Account Information').should('be.visible');
    return this;
  }

  fillAccountDetails(userData) {
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type(userData.password);
    cy.get('[data-qa="days"]').select(userData.birthDay || '15');
    cy.get('[data-qa="months"]').select(userData.birthMonth || '7');
    cy.get('[data-qa="years"]').select(userData.birthYear || '1995');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').type(userData.firstName || 'QA');
    cy.get('[data-qa="last_name"]').type(userData.lastName || 'Tester');
    cy.get('[data-qa="company"]').type(userData.company || 'Tech Company');
    cy.get('[data-qa="address"]').type(userData.address || 'Av. Paulista, 1000');
    cy.get('[data-qa="address2"]').type(userData.address2 || 'Suite 200');
    cy.get('[data-qa="country"]').select(userData.country || 'Canada');
    cy.get('[data-qa="state"]').type(userData.state || 'Ontario');
    cy.get('[data-qa="city"]').type(userData.city || 'Toronto');
    cy.get('[data-qa="zipcode"]').type(userData.zipcode || 'M5V 2T6');
    cy.get('[data-qa="mobile_number"]').type(userData.mobileNumber || '+1 416 555 0199');

    return this;
  }

  clickCreateAccount() {
    cy.get('[data-qa="create-account"]').click();
  }
}

export default new SignupFormPage();

