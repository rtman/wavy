'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('user_playlist', [
      {
        user_id: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        playlist_id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc09',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('user_playlist', null, {});
  }
};
