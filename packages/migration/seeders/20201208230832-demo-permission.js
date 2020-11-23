'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('permission', [
      {
        requestorId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        requestorEntity: 'Artist',
        requesteeId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        requesteeEntity: 'Artist',
        createMusic: true,
        createSupportingArtist: true,
      },
      {
        requestorId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        requestorEntity: 'Artist',
        requesteeId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        requesteeEntity: 'Artist',
        createMusic: true,
        createSupportingArtist: true,
      },
      {
        requestorId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        requestorEntity: 'Artist',
        requesteeId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        requesteeEntity: 'Artist',
        createMusic: true,
        createSupportingArtist: true,
      },
      {
        requestorId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        requestorEntity: 'Artist',
        requesteeId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        requesteeEntity: 'Artist',
        createMusic: true,
        createSupportingArtist: true,
      },
      {
        requestorId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        requestorEntity: 'Label',
        requesteeId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        requesteeEntity: 'Artist',
        createMusic: true,
        createSupportingArtist: true,
      },
      {
        requestorId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        requestorEntity: 'Label',
        requesteeId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        requesteeEntity: 'Artist',
        createMusic: true,
        createSupportingArtist: true,
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('permission', null, {});
  },
};
