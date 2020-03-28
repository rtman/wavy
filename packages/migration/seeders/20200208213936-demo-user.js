'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('users', [
      {
        id: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        firstName: 'Ryan',
        lastName: 'Trann',
        email: 'ryanjtrann@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('users', null, {});
  },
};
