'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('artistLabel', [
      {
        labelId: '85248eee-5f5b-49f8-a9d9-e08418b829b8',
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
      {
        labelId: 'b587201a-ccd8-4ac7-a9c7-fba9c369e7da',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('artistLabel', null, {});
  },
};
