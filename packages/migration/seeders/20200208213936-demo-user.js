'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('user', [
      {
        id: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        firstName: 'Ryan',
        lastName: 'Trann',
        email: 'ryanjtrann@gmail.com',
        password: 'testtest',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'F2qAdR0c81c3xGFk5PmgDXKAjis2',
        firstName: 'Test',
        lastName: 'Person',
        email: 'test@gmail.com',
        password: 'testtest',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('user', null, {});
  },
};
