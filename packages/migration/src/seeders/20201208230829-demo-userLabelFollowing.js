'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('userLabelFollowing', [
      {
        userId: 'IhoEK55AxJU4QsTftSoV0uQdnz13',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 'IhoEK55AxJU4QsTftSoV0uQdnz13',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 'IhoEK55AxJU4QsTftSoV0uQdnz13',
        labelId: 'b587201a-ccd8-4ac7-a9c7-fba9c369e7da',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 'IhoEK55AxJU4QsTftSoV0uQdnz13',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('userLabelFollowing', null, {});
  },
};
