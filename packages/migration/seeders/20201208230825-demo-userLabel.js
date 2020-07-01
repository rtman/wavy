'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('userLabel', [
      {
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('userLabel', null, {});
  },
};
