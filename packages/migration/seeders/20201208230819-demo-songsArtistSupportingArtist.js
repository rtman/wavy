'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('songArtistSupportingArtist', [
      // TODO: Create seed for supporting artists
      {
        songId: 'ef8bfa7c-d2b4-49b5-9da9-17978be4e9a4',
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete(
      'songArtistSupportingArtist',
      null,
      {}
    );
  },
};
