'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('userPlaylist', [
      {
        userId: '3WkOZ9SdaZOu6grNQPPd8dhV4vC3',
        playlistId: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc09',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        userId: '3WkOZ9SdaZOu6grNQPPd8dhV4vC3',
        playlistId: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('userPlaylist', null, {});
  },
};
