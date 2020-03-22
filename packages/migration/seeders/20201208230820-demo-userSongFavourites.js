'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('user_song_favourites', [
      {
        user_id: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        song_id: 'ef8bfa7c-d2b4-49b5-9da9-17978be4e9a4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        song_id: '3c3d5f29-d675-41b3-8ed6-c2c781c3a606',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        song_id: '0eaaa270-9373-458b-a6d6-7fd013931245',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        song_id: '20872940-4952-4d3e-84b7-d68529af7a91',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        song_id: 'fc0be79a-274a-4bf8-98a5-b580b7a1bac5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        song_id: '0694f13e-f8ca-406d-8b6b-fd081e1c930a',
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
    return await queryInterface.bulkDelete('user_song_favourites', null, {});
  }
};
