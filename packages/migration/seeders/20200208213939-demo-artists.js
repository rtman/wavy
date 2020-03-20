'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('artists', [
      {
        id: 1,
        name: 'András',
        album_ids: [1],
        song_ids: [1],
        description: 'András Fox is a musician from australia!',
        image: 'gs://groov-development-ddc9d.appspot.com/andras.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Raf Reza',
        album_ids: [2, 3],
        song_ids: [2, 3, 4, 5, 6, 7, 8],
        description: 'Raf is a musician living in toronto!',
        image: 'gs://groov-development-ddc9d.appspot.com/raf.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'ESB',
        album_ids: [4, 5, 6],
        song_ids: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        description: 'ESB is a musician living in vancouver!',
        image: 'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Seb Wildblood',
        album_ids: [7, 8, 9, 10, 11],
        song_ids: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        description: 'Seb is a musician living in london!',
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Bad Bad Not Good',
        album_ids: [12],
        song_ids: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
        description: 'BBNG are a musicians living in toronto (I think)!',
        image: 'gs://groov-development-ddc9d.appspot.com/bbng.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'Benedek',
        album_ids: [13, 14],
        song_ids: [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68],
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
