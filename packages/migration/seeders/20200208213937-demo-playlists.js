'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('playlists', [
      {
        id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc09',
        title: 'Hot Choones 2020',
        description: 'Only heaters!!',
        image: 'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        user_ids: ['H2qAdR0c81c3xGFk5PmgDXKAjis1'],
        songs: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('playlists', null, {});
  }
};
