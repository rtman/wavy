'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('album', [
      {
        id: '6960fd68-732e-4c3c-8995-8d72989f53db',
        title: 'Untitled',
        artistId: '30f65df5-98bb-48cd-83e5-867f707f941d',
        labelId: '85248eee-5f5b-49f8-a9d9-e08418b829b8',
        description: 'Untitled is a single/ep',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/andras-untitled.jpg?alt=media&token=41452af7-dfec-4c7c-abf5-edfe8f56bbd9',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        title: 'Moods From the Multiverse',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        description: 'Released on heart to heart records',
        imageRef: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH013%20art.png?alt=media&token=3be2fff8-e75f-4dba-a18f-0ac6e7a850e5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'f2028bf3-ed1c-4057-b430-c3374116a959',
        title: 'Proto',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        labelId: 'b587201a-ccd8-4ac7-a9c7-fba9c369e7da',
        description: 'Released on cosmic resonance',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/raf reza - proto.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/raf%20reza%20-%20proto.jpg?alt=media&token=b26858a3-232e-43b8-a47d-dd2e644d1b63',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        title: 'On Cue',
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        description: 'Released on heart to heart records',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH002_A_digital.png?alt=media&token=2bbcf80a-2a4b-4b1f-b3b0-85f9046676b3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '911684b3-c073-4b33-ae2a-014346df4bc8',
        title: 'Origins',
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        description: 'Released on heart to heart records',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH005_A_digital.png?alt=media&token=79a4ccc2-fa1c-45e2-ba31-656365fb488c',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        title: 'Mist Outro',
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        description: 'Released on heart to heart records',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH005_A_digital.png?alt=media&token=79a4ccc2-fa1c-45e2-ba31-656365fb488c',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        title: 'Foreign Parts',
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        description: 'Released on SW',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20foreign%20parts.jpg?alt=media&token=1d91232b-acc9-4a73-ad96-29f21e1d6e9a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '8c587e75-58c0-45e0-a87e-538fbf69848f',
        title: 'Melodic Tools',
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        description: 'Released on SW',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - sw005.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20sw005.jpg?alt=media&token=040ac5ea-1d47-44bf-aa88-fbbe3fa5bfaf',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        title: 'SW004',
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        description: 'Released on SW',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20%20-%20sw%20004.jpg?alt=media&token=d3f80a0b-83bb-4827-ac86-f7da6adc9688',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        title: 'Submarine',
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        description: 'Released on SW',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20submarine.jpg?alt=media&token=9e6fd534-7467-4362-bad9-d9015e90c870',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        title: 'U',
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        description: 'Released on SW',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/sebwildblood%20-%20u.jpg?alt=media&token=15bd72c7-c5e6-43a3-afae-42eccecefea0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        title: 'BBNG',
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        description: 'Self released',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%20cover.png?alt=media&token=a3c25e5f-0ce0-4d30-aa3c-b3d542743bb9',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        title: `Bene's World`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        description: 'Released on Leaving Records',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20benes%20world.jpg?alt=media&token=3ea5ae8f-b379-4cbb-8940-1166a63ec5f6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        title: `Coolin`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        description: 'Released on Leaving Records',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/benedek - coolin.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('album', null, {});
  },
};
