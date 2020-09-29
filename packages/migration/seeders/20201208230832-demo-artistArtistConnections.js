'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('artistArtistConnections', [
      {
        primaryId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        connectionId: '30f65df5-98bb-48cd-83e5-867f707f941d',
      },
      {
        primaryId: '30f65df5-98bb-48cd-83e5-867f707f941d',
        connectionId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
      },
      {
        primaryId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        connectionId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
      },
      {
        primaryId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        connectionId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('artistArtistConnections', null, {});
    // return await queryInterface.bulkDelete(
    //   'artist_artist_connections_artist',
    //   null,
    //   {}
    // );
  },
};
