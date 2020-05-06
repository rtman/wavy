'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('label', [
      {
        id: '85248eee-5f5b-49f8-a9d9-e08418b829b8',
        name: 'Superconscious Records',
        description:
          'Australian record label run by Francis Inferno Orchestra and Fantastic Man. Distribution by Above Board Distribution.',
        image: 'gs://groov-development-ddc9d.appspot.com/superconcious.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        name: 'Heart to Heart Records',
        description:
          'Label out of western canada, exploring the underground dance floors of the world.',
        image: 'gs://groov-development-ddc9d.appspot.com/hth_gradient_logo.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('label', null, {});
  },
};
