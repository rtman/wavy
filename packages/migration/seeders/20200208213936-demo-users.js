'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('users', [
      {
        id: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        firstName: 'Ryan',
        lastName: 'Trann',
        email: 'ryanjtrann@gmail.com',
        password: '123456',
        favourites: [5, 6, 7],
        recentlyPlayed: [1, 2, 3, 4],
        following: [1, 2, 3],
        playlists: Sequelize.literal(`ARRAY['9cf2e2ed-932b-4e98-bb6a-39c1e324dc09']::"uuid"[]`),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('users', null, {});
  }
};
