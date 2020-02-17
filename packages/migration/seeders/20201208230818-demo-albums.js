'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('albums', [
      {
        id: 1,
        title: 'Untitled',
        song_ids: [1, 2],
        description: 'Untitled is a single/ep',
        image: 'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Moods From the Multiverse',
        song_ids: [3],
        description: 'Released on heart to heart records',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('albums', null, {});
  }
};
