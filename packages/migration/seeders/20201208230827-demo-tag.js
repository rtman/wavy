'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('tag', [
      {
        id: 'd50949eb-1d6c-411d-bcb8-6e3d1f2049d1',
        title: 'House',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '50d30580-9cb0-465e-a209-6aa117436bab',
        title: 'Techno',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'c73507ea-4828-472a-a6e0-07c4b1a34c7e',
        title: 'Jazz',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'e1a9e5c6-5c1d-4e0a-87a8-ea97d64d182e',
        title: 'Funk',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1b01abc7-a2bf-4a79-9d48-9bc43fd1b037',
        title: 'HipHop',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('tag', null, {});
  },
};
