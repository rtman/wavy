'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('artists', [
      {
        artist_id: '30f65df5-98bb-48cd-83e5-867f707f941d',
        artist_name: 'András',
        artist_description: 'András Fox is a musician from australia!',
        artist_image: 'gs://groov-development-ddc9d.appspot.com/andras.jpg',
        artist_createdAt: new Date(),
        artist_updatedAt: new Date()
      },
      {
        artist_id: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        artist_name: 'Raf Reza',
        artist_description: 'Raf is a musician living in toronto!',
        artist_image: 'gs://groov-development-ddc9d.appspot.com/raf.jpg',
        artist_createdAt: new Date(),
        artist_updatedAt: new Date()
      },
      {
        artist_id: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        artist_name: 'ESB',
        artist_description: 'ESB is a musician living in vancouver!',
        artist_image: 'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        artist_createdAt: new Date(),
        artist_updatedAt: new Date()
      },
      {
        artist_id: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        artist_name: 'Seb Wildblood',
        artist_description: 'Seb is a musician living in london!',
        artist_image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood.jpg',
        artist_createdAt: new Date(),
        artist_updatedAt: new Date()
      },
      {
        artist_id: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        artist_name: 'Bad Bad Not Good',
        artist_description: 'BBNG are a musicians living in toronto (I think)!',
        artist_image: 'gs://groov-development-ddc9d.appspot.com/bbng.jpeg',
        artist_createdAt: new Date(),
        artist_updatedAt: new Date()
      },
      {
        artist_id: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        artist_name: 'Benedek',
        artist_description: 'Benedek makes dope funk!',
        artist_image: 'gs://groov-development-ddc9d.appspot.com/benedek.jpeg',
        artist_createdAt: new Date(),
        artist_updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('artists', null, {});
  }
};
