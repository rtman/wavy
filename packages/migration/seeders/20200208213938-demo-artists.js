'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('artists', [
      {
        name: 'András',
        albums: ['Untitled'],
        description: 'András Fox is a musician from australia!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Raf Reza',
        albums: ['Moods from the Multiverse'],
        description: 'Raf is a musician living in toronto!',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('artists', null, {});
  }
};
