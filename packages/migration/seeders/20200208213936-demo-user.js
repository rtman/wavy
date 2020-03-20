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
        user_favourites: [5, 6, 7],
        user_recentlyPlayed: [1, 2, 3, 4],
        user_following: [1, 2, 3],
        // playlists: Sequelize.literal(`ARRAY['9cf2e2ed-932b-4e98-bb6a-39c1e324dc09']::"uuid"[]`),
        user_createdAt: new Date(),
        user_updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('users', null, {});
  }
};
