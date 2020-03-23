'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('albums', [
      {
        album_id: '6960fd68-732e-4c3c-8995-8d72989f53db',
        album_title: 'Untitled',
        album_artist_id: '30f65df5-98bb-48cd-83e5-867f707f941d',
        album_description: 'Untitled is a single/ep',
        album_image: 'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        album_createdAt: new Date(),
        album_updatedAt: new Date()
      },
      {
        album_id: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        album_title: 'Moods From the Multiverse',
        album_artist_id: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        album_description: 'Released on heart to heart records',
        album_image: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        album_createdAt: new Date(),
        album_updatedAt: new Date()
      },
      {
        album_id: 'f2028bf3-ed1c-4057-b430-c3374116a959',
        album_title: 'Proto',
        album_artist_id: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        album_description: 'Released on cosmic resonance',
        album_image: 'gs://groov-development-ddc9d.appspot.com/raf reza - proto.jpg',
        album_createdAt: new Date(),
        album_updatedAt: new Date()
      },
      {
        album_id: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        album_title: 'On Cue',
        album_artist_id: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        album_description: 'Released on heart to heart records',
        album_image: 'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        album_createdAt: new Date(),
        album_updatedAt: new Date()
      },
      {
        album_id: '911684b3-c073-4b33-ae2a-014346df4bc8',
        album_title: 'Origins',
        album_artist_id: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        album_description: 'Released on heart to heart records',
        album_image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        album_createdAt: new Date(),
        album_updatedAt: new Date()
      },
      {
        album_id: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        album_title: 'Mist Outro',
        album_artist_id: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        album_description: 'Released on heart to heart records',
        album_image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        album_createdAt: new Date(),
        album_updatedAt: new Date()
      },
      {
        album_id: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        album_title: 'Foreign Parts',
        album_artist_id: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        album_description: 'Released on SW',
        album_image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        album_createdAt: new Date(),
        album_updatedAt: new Date()
      },
      {
        album_id: '8c587e75-58c0-45e0-a87e-538fbf69848f',
        album_title: 'Melodic Tools',
        album_artist_id: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        album_description: 'Released on SW',
        album_image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - sw005.jpg',
        album_createdAt: new Date(),
        album_updatedAt: new Date()
      },
      {
        album_id: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        album_title: 'SW004',
        album_artist_id: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        album_description: 'Released on SW',
        album_image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        album_createdAt: new Date(),
        album_updatedAt: new Date()
      },
      {
        album_id: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        album_title: 'Submarine',
        album_artist_id: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        album_description: 'Released on SW',
        album_image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        album_createdAt: new Date(),
        album_updatedAt: new Date()
      },
      {
        album_id: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        album_title: 'U',
        album_artist_id: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        album_description: 'Released on SW',
        album_image: 'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        album_createdAt: new Date(),
        album_updatedAt: new Date()
      },
      {
        album_id: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        album_title: 'BBNG',
        album_artist_id: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        album_description: 'Self released',
        album_image: 'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        album_createdAt: new Date(),
        album_updatedAt: new Date()
      },
      {
        album_id: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        album_title: `Bene's World`,
        album_artist_id: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        album_description: 'Released on Leaving Records',
        album_image: 'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        album_createdAt: new Date(),
        album_updatedAt: new Date()
      },
      {
        album_id: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        album_title: `Coolin`,
        album_artist_id: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        album_description: 'Released on Leaving Records',
        album_image: 'gs://groov-development-ddc9d.appspot.com/benedek - coolin.jpg',
        album_createdAt: new Date(),
        album_updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('albums', null, {});
  }
};