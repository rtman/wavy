'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('song_artist_supporting_artist', [
      // TODO: Create seed for supporting artists
      // {
      //   song_id: '',
      //   artist_id: '',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   song_id: '',
      //   artist_id: '',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('song_artist_supporting_artist', null, {});
  }
};
