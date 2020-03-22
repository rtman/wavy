'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('users', [
      {
        user_id: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        user_firstName: 'Ryan',
        user_lastName: 'Trann',
        user_email: 'ryanjtrann@gmail.com',
        user_password: '123456',
        user_createdAt: new Date(),
        user_updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('users', null, {});
  }
};
