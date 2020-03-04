'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('artists', [
      {
        id: 1,
        name: 'András',
        album_ids: [1],
        song_ids: [1, 2],
        description: 'András Fox is a musician from australia!',
        image: 'gs://groov-development-ddc9d.appspot.com/andras.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Raf Reza',
        album_ids: [2],
        song_ids: [3],
        description: 'Raf is a musician living in toronto!',
        image: 'gs://groov-development-ddc9d.appspot.com/raf.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'ESB',
        album_ids: [2],
        song_ids: [3],
        description: 'ESB is a musician living in vancouver!',
        image: 'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Seb Wildblood',
        album_ids: [2],
        song_ids: [3],
        description: 'Seb is a musician living in london!',
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Bad Bad Not Good',
        album_ids: [2],
        song_ids: [3],
        description: 'BBNG are a musicians living in toronto (I think)!',
        image: 'gs://groov-development-ddc9d.appspot.com/bbng.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Benedek',
        album_ids: [2],
        song_ids: [3],
        description: 'Benedek makes dope funk!',
        image: 'gs://groov-development-ddc9d.appspot.com/benedek.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('artists', null, {});
  }
};
