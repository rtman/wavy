'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('artists', [
      {
        name: 'András',
        // albums: 'Untitled',
        genre: 'House',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Raf Reza',
        // albums: 'Moods from the Multiverse',
        genre: 'Space',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('artists', null, {});
  }
};
