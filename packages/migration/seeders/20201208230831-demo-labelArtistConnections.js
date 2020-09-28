'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('labelArtistConnections', [
      {
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        artistId: '30f65df5-98bb-48cd-83e5-867f707f941d',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('labelArtistConnections', null, {});
  },
};
