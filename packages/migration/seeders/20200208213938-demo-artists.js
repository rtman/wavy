'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('artists', [
      {
        name: 'András',
        albums: ['Untitled'],
        description: 'András Fox is a musician from australia!',
        image: 'gs://groov-development-ddc9d.appspot.com/andras.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Raf Reza',
        albums: ['Moods from the Multiverse'],
        description: 'Raf is a musician living in toronto!',
        image: 'gs://groov-development-ddc9d.appspot.com/raf.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('artists', null, {});
  }
};
