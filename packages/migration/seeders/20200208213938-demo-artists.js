'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('artists', [
      {
        id: 1,
        name: 'András',
        album_ids: [1],
        song_ids: [1, 2],
        description: 'András Fox is a musician from australia!',
        image: 'gs://groov-development-ddc9d.appspot.com/andras.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Raf Reza',
        album_ids: [2],
        song_ids: [3],
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
