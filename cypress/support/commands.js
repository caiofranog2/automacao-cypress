Cypress.Commands.add('generateUserData', () => {
  const timestamp = Date.now();
  return {
    name: `User_${timestamp}`,
    email: `qa.test.${timestamp}@example.com`,
    password: 'Password123!',
    firstName: 'QA',
    lastName: 'Engineer',
    company: 'Tech Academy',
    address: 'Av. Paulista, 1000',
    address2: 'Apto 101',
    country: 'Canada',
    state: 'Ontario',
    city: 'Toronto',
    zipcode: 'M5V 2T6',
    mobileNumber: '+1 416 555 0199',
    birthDay: '15',
    birthMonth: '7',
    birthYear: '1995',
  };
});
