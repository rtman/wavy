'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('users', [
      {
        id: 'd97f1d32-647a-11ea-bc55-0242ac130003',
        firstName: 'Ryan',
        lastName: 'Trann',
        email: 'ryanjtrann@gmail.com',
        password: '123456',
        favourites: [5, 6, 7],
        recentlyPlayed: [1, 2, 3, 4],
        following: [1, 2, 3],
        playlists: [1],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('users', null, {});
  }
};
