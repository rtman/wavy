'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('userPlaylistFollowing', [
      {
        userId: 'UF2VJMo4W7MGAcP03HNFtviiG3x2',
        playlistId: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc09',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 'UF2VJMo4W7MGAcP03HNFtviiG3x2',
        playlistId: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('userPlaylistFollowing', null, {});
  },
};
