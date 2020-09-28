'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('artistArtistConnections', [
      // return await queryInterface.bulkInsert('artist_artist_connections_artist', [
      // {
      //   artistId1: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
      //   artistId2: '30f65df5-98bb-48cd-83e5-867f707f941d',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      {
        artist1Id: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        artist2Id: '30f65df5-98bb-48cd-83e5-867f707f941d',
        // createdAt: new Date(),
        // updatedAt: new Date(),
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
