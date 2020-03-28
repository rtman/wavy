'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('artists', [
      {
        id: '30f65df5-98bb-48cd-83e5-867f707f941d',
        name: 'András',
        description: 'András Fox is a musician from australia!',
        image: 'gs://groov-development-ddc9d.appspot.com/andras.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        name: 'Raf Reza',
        description: 'Raf is a musician living in toronto!',
        image: 'gs://groov-development-ddc9d.appspot.com/raf.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        name: 'ESB',
        description: 'ESB is a musician living in vancouver!',
        image:
          'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        name: 'Seb Wildblood',
        description: 'Seb is a musician living in london!',
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        name: 'Bad Bad Not Good',
        description: 'BBNG are a musicians living in toronto (I think)!',
        image: 'gs://groov-development-ddc9d.appspot.com/bbng.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        name: 'Benedek',
        description: 'Benedek makes dope funk!',
        image: 'gs://groov-development-ddc9d.appspot.com/benedek.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('artists', null, {});
  },
};
