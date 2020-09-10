'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('label', [
      {
        id: '85248eee-5f5b-49f8-a9d9-e08418b829b8',
        name: 'Superconscious Records',
        description:
          'Australian record label run by Francis Inferno Orchestra and Fantastic Man. Distribution by Above Board Distribution.',
        profileImageStoragePathLarge:
          'gs://groov-development-ddc9d.appspot.com/superconcious.jpg',
        profileImageStoragePathSmall:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageStoragePathThumb:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/superconcious.jpg?alt=media&token=a7f5b84b-18f7-4260-9c76-90e0b5be4529',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 100,
      },
      {
        id: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        name: 'Heart to Heart Records',
        description:
          'Label out of western canada, exploring the underground dance floors of the world.',
        profileImageStoragePathLarge:
          'gs://groov-development-ddc9d.appspot.com/hth_gradient_logo.png',
        profileImageStoragePathSmall:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageStoragePathThumb:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/hth_gradient_logo.png?alt=media&token=7f5c8380-f39b-4600-b112-24ef108919f3',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 99,
      },
      {
        id: 'b587201a-ccd8-4ac7-a9c7-fba9c369e7da',
        name: 'Cosmic Resonance',
        description:
          'Cosmic Resonance is a Toronto vinyl imprint showcasing artists who experiment with music via a cosmic perspective.',
        profileImageStoragePathLarge:
          'gs://groov-development-ddc9d.appspot.com/cosmicResonance.png',
        profileImageStoragePathSmall:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageStoragePathThumb:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cosmicResonance.png?alt=media&token=61afef55-3d27-4862-8722-baaaf63a8015',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 98,
      },
      {
        id: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        name: 'SW',
        description: 'Seb Wildbloods Label',
        profileImageStoragePathLarge:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        profileImageStoragePathSmall:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageStoragePathThumb:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20%20-%20sw%20004.jpg?alt=media&token=d3f80a0b-83bb-4827-ac86-f7da6adc9688',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 1000,
      },
      {
        id: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        name: 'Leaving Records',
        description:
          'Leaving Records is a homegrown experimental record label started by L.A. experimental musician MatthewDavid + visual artist Jesselisa Moretti. Distribution partnership with Stones Throw Records.',
        profileImageStoragePathLarge:
          'gs://groov-development-ddc9d.appspot.com/leavingRecords.jpeg',
        profileImageStoragePathSmall:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageStoragePathThumb:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/leavingRecords.jpeg?alt=media&token=3b607bcb-639a-4c68-a979-079e1f8f9c87',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 250,
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('label', null, {});
  },
};
