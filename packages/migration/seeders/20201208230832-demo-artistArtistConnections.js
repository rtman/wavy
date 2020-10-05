'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('artistArtistConnections', [
      {
        primaryArtistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        connectionArtistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
      },
      {
        primaryArtistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        connectionArtistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
      },
      {
        primaryArtistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        connectionArtistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
      },
      {
        primaryArtistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        connectionArtistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('artistArtistConnections', null, {});
  },
};
