'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('albums', [
      {
        id: 1,
        title: 'Untitled',
        artist_id: 1,
        song_ids: [1, 2],
        description: 'Untitled is a single/ep',
        image: 'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Moods From the Multiverse',
        artist_id: 2,
        song_ids: [3],
        description: 'Released on heart to heart records',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Proto',
        artist_id: 2,
        song_ids: [3],
        description: 'Released on cosmic resonance',
        image: 'gs://groov-development-ddc9d.appspot.com/raf reza - proto.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'On Cue',
        artist_id: 3,
        song_ids: [3],
        description: 'Released on heart to heart records',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Origins',
        artist_id: 3,
        song_ids: [3],
        description: 'Released on heart to heart records',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: 'Mist Outro',
        artist_id: 3,
        song_ids: [3],
        description: 'Released on heart to heart records',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        title: 'Foreign Parts',
        artist_id: 4,
        song_ids: [3],
        description: 'Released on SW',
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        title: 'Melodic Tools',
        artist_id: 4,
        song_ids: [3],
        description: 'Released on SW',
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - sw005.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        title: 'SW004',
        artist_id: 4,
        song_ids: [3],
        description: 'Released on SW',
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        title: 'Submarine',
        artist_id: 4,
        song_ids: [3],
        description: 'Released on SW',
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        title: 'U',
        artist_id: 4,
        song_ids: [3],
        description: 'Released on SW',
        image: 'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        title: 'BBNG',
        artist_id: 5,
        song_ids: [3],
        description: 'Self released',
        image: 'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        title: `Bene's World`,
        artist_id: 6,
        song_ids: [3],
        description: 'Released on Leaving Records',
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        title: `Coolin`,
        artist_id: 6,
        song_ids: [3],
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
