'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('playlists', [
      {
        id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc09',
        title: 'Hot Choones 2020',
        description: 'Only heaters!!',
        image:
          'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        title: 'Anotha One',
        description: '!@#!$',
        image:
          'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc11',
        title: 'asdf',
        description: 'ffff!',
        image:
          'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('playlists', null, {});
  }
};
