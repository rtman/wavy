'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('playlists', [
      {
        playlist_id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc09',
        playlist_title: 'Hot Choones 2020',
        playlist_description: 'Only heaters!!',
        playlist_image: 'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        // user_ids: ['H2qAdR0c81c3xGFk5PmgDXKAjis1'],
        playlist_songs: [
          'ef8bfa7c-d2b4-49b5-9da9-17978be4e9a4',
          '3c3d5f29-d675-41b3-8ed6-c2c781c3a606',
          '0eaaa270-9373-458b-a6d6-7fd013931245',
          '20872940-4952-4d3e-84b7-d68529af7a91',
          'fc0be79a-274a-4bf8-98a5-b580b7a1bac5',
          '0694f13e-f8ca-406d-8b6b-fd081e1c930a',
          '995d0081-63ee-4fc2-8a61-fc67928c4a12',
          'b5ca4741-9d14-4513-8e10-f163f9dd5623',
          '6cea15ba-0be2-410a-8bdc-acd101685a80'
        ],
        playlist_createdAt: new Date(),
        playlist_updatedAt: new Date()
      },
      {
        playlist_id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        playlist_title: 'Anotha One',
        playlist_description: '!@#!$',
        playlist_image: 'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        // user_ids: ['H2qAdR0c81c3xGFk5PmgDXKAjis1'],
        playlist_songs: ['ef8bfa7c-d2b4-49b5-9da9-17978be4e9a4', '3c3d5f29-d675-41b3-8ed6-c2c781c3a606'],
        playlist_createdAt: new Date(),
        playlist_updatedAt: new Date()
      },
      {
        playlist_id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc11',
        playlist_title: 'asdf',
        playlist_description: 'ffff!',
        playlist_image: 'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        // user_ids: ['H2qAdR0c81c3xGFk5PmgDXKAjis1'],
        playlist_songs: [
          'ef8bfa7c-d2b4-49b5-9da9-17978be4e9a4',
          '3c3d5f29-d675-41b3-8ed6-c2c781c3a606',
          '0eaaa270-9373-458b-a6d6-7fd013931245',
          '20872940-4952-4d3e-84b7-d68529af7a91'
        ],
        playlist_createdAt: new Date(),
        playlist_updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('playlists', null, {});
  }
};
