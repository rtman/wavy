'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('albums', [
      {
        id: '6960fd68-732e-4c3c-8995-8d72989f53db',
        title: 'Untitled',
        artist_id: '30f65df5-98bb-48cd-83e5-867f707f941d',
        song_ids: ['ef8bfa7c-d2b4-49b5-9da9-17978be4e9a4'],
        description: 'Untitled is a single/ep',
        image: 'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        title: 'Moods From the Multiverse',
        artist_id: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        song_ids: [
          '3c3d5f29-d675-41b3-8ed6-c2c781c3a606',
          '0eaaa270-9373-458b-a6d6-7fd013931245',
          '20872940-4952-4d3e-84b7-d68529af7a91',
          5
        ],
        description: 'Released on heart to heart records',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'f2028bf3-ed1c-4057-b430-c3374116a959',
        title: 'Proto',
        artist_id: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        song_ids: [6, 7, 8],
        description: 'Released on cosmic resonance',
        image: 'gs://groov-development-ddc9d.appspot.com/raf reza - proto.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        title: 'On Cue',
        artist_id: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        song_ids: [9, 10, 11, 12],
        description: 'Released on heart to heart records',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '911684b3-c073-4b33-ae2a-014346df4bc8',
        title: 'Origins',
        artist_id: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        song_ids: [13, 14, 15, 16],
        description: 'Released on heart to heart records',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        title: 'Mist Outro',
        artist_id: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        song_ids: [17, 18, 19, 20],
        description: 'Released on heart to heart records',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        title: 'Foreign Parts',
        artist_id: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        song_ids: [21, 22, 23, 24, 25, 26, 27, 28],
        description: 'Released on SW',
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '8c587e75-58c0-45e0-a87e-538fbf69848f',
        title: 'Melodic Tools',
        artist_id: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        song_ids: [29, 30],
        description: 'Released on SW',
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - sw005.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        title: 'SW004',
        artist_id: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        song_ids: [31, 32, 33, 34],
        description: 'Released on SW',
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        title: 'Submarine',
        artist_id: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        song_ids: [35, 36, 37, 38],
        description: 'Released on SW',
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        title: 'U',
        artist_id: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        song_ids: [39, 40, 41, 42, 43, 44],
        description: 'Released on SW',
        image: 'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        title: 'BBNG',
        artist_id: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        song_ids: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
        description: 'Self released',
        image: 'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        title: `Bene's World`,
        artist_id: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        song_ids: [57, 58, 59, 60, 61, 62, 63, 64],
        description: 'Released on Leaving Records',
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        title: `Coolin`,
        artist_id: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        song_ids: [65, 66, 67, 68],
        description: 'Released on Leaving Records',
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - coolin.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('albums', null, {});
  }
};
