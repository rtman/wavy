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
      {
        id: 'b587201a-ccd8-4ac7-a9c7-fba9c369e7da',
        name: 'Cosmic Resonance',
        description:
          'Cosmic Resonance is a Toronto vinyl imprint showcasing artists who experiment with music via a cosmic perspective.',
        image: 'gs://groov-development-ddc9d.appspot.com/cosmicResonance.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        name: 'SW',
        description: 'Seb Wildbloods Label',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        name: 'Leaving Records',
        description:
          'Leaving Records is a homegrown experimental record label started by L.A. experimental musician MatthewDavid + visual artist Jesselisa Moretti. Distribution partnership with Stones Throw Records.',
        image: 'gs://groov-development-ddc9d.appspot.com/leavingRecords.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('label', null, {});
  },
};
