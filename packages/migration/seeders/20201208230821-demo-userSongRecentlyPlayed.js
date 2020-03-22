'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('user_song_recently_played', [
      {
        user_id: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        song_id: '995d0081-63ee-4fc2-8a61-fc67928c4a12',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        song_id: 'b5ca4741-9d14-4513-8e10-f163f9dd5623',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('user_song_recently_played', null, {});
  }
};
