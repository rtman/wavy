'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('userPlaylist', [
      {
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        playlistId: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc09',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        playlistId: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('userPlaylist', null, {});
  }
};
