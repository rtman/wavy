'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('albums', [
      {
        id: 1,
        title: 'Untitled',
        artist_id: 1,
        song_ids: [1],
        description: 'Untitled is a single/ep',
        image: 'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Moods From the Multiverse',
        artist_id: 2,
        song_ids: [2, 3, 4, 5],
        description: 'Released on heart to heart records',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Proto',
        artist_id: 2,
        song_ids: [6, 7, 8],
        description: 'Released on cosmic resonance',
        image: 'gs://groov-development-ddc9d.appspot.com/raf reza - proto.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: 'On Cue',
        artist_id: 3,
        song_ids: [9, 10, 11, 12],
        description: 'Released on heart to heart records',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        title: 'Origins',
        artist_id: 3,
        song_ids: [13, 14, 15, 16],
        description: 'Released on heart to heart records',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        title: 'Mist Outro',
        artist_id: 3,
        song_ids: [17, 18, 19, 20],
        description: 'Released on heart to heart records',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        title: 'Foreign Parts',
        artist_id: 4,
        song_ids: [21, 22, 23, 24, 25, 26, 27, 28],
        description: 'Released on SW',
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        title: 'Melodic Tools',
        artist_id: 4,
        song_ids: [29, 30],
        description: 'Released on SW',
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - sw005.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        title: 'SW004',
        artist_id: 4,
        song_ids: [31, 32, 33, 34],
        description: 'Released on SW',
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        title: 'Submarine',
        artist_id: 4,
        song_ids: [35, 36, 37, 38],
        description: 'Released on SW',
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        title: 'U',
        artist_id: 4,
        song_ids: [39, 40, 41, 42, 43, 44],
        description: 'Released on SW',
        image: 'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        title: 'BBNG',
        artist_id: 5,
        song_ids: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
        description: 'Self released',
        image: 'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        title: `Bene's World`,
        artist_id: 6,
        song_ids: [57, 58, 59, 60, 61, 62, 63, 64],
        description: 'Released on Leaving Records',
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        title: `Coolin`,
        artist_id: 6,
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
