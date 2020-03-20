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
        playlist_songs: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        playlist_createdAt: new Date(),
        playlist_updatedAt: new Date()
      },
      {
        playlist_id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        playlist_title: 'Anotha One',
        playlist_description: '!@#!$',
        playlist_image: 'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        // user_ids: ['H2qAdR0c81c3xGFk5PmgDXKAjis1'],
        playlist_songs: [1, 2],
        playlist_createdAt: new Date(),
        playlist_updatedAt: new Date()
      },
      {
        playlist_id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc11',
        playlist_title: 'asdf',
        playlist_description: 'ffff!',
        playlist_image: 'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        // user_ids: ['H2qAdR0c81c3xGFk5PmgDXKAjis1'],
        playlist_songs: [1, 2, 3, 4],
        playlist_createdAt: new Date(),
        playlist_updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('playlists', null, {});
  }
};
