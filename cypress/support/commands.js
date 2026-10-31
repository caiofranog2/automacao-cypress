Cypress.Commands.add('generateUserData', () => {
  const timestamp = Date.now();
  return {
    name: `Lucas ${timestamp.toString().slice(-4)}`,
    email: `lucas.bsb${timestamp}@gmail.com`,
    password: 'Brasilia@2024',
    firstName: 'Lucas',
    lastName: 'Ferreira',
    company: 'DF Servicos',
    address: 'SQS 308 Bloco D',
    address2: 'Apto 204',
    country: 'Canada',
    state: 'Distrito Federal',
    city: 'Brasilia',
    zipcode: '70355-040',
    mobileNumber: '61981234567',
    birthDay: '15',
    birthMonth: '7',
    birthYear: '1995',
  };
});
