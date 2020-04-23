'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('userSongRecentlyPlayed', [
      {
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        songId: '995d0081-63ee-4fc2-8a61-fc67928c4a12',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        songId: 'b5ca4741-9d14-4513-8e10-f163f9dd5623',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('userSongRecentlyPlayed', null, {});
  },
};
