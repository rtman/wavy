'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('artist', [
      {
        id: '30f65df5-98bb-48cd-83e5-867f707f941d',
        name: 'András',
        description: 'András Fox is a musician from australia!',
        imageRef: 'gs://groov-development-ddc9d.appspot.com/andras.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/andras.jpg?alt=media&token=452f75aa-2329-4f08-9be1-cc7fbb2e17aa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        name: 'Raf Reza',
        description: 'Raf is a musician living in toronto!',
        imageRef: 'gs://groov-development-ddc9d.appspot.com/raf.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/raf.jpg?alt=media&token=08f44863-e81c-416c-a8ae-64679975e4cb',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        name: 'ESB',
        description: 'ESB is a musician living in vancouver!',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/esb%20live%20PR%20(filtre).jpg?alt=media&token=f95f227e-3471-4611-9338-32ecce29b7eb',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        name: 'Seb Wildblood',
        description: 'Seb is a musician living in london!',
        imageRef: 'gs://groov-development-ddc9d.appspot.com/seb wildblood.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood.jpg?alt=media&token=748fc364-7c25-423d-97ca-4bffb05e76de',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        name: 'Bad Bad Not Good',
        description: 'BBNG are a musicians living in toronto (I think)!',
        imageRef: 'gs://groov-development-ddc9d.appspot.com/bbng.jpeg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/bbng.jpeg?alt=media&token=3fb89f69-7358-4f3a-955e-a1b9e740dc9d',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        name: 'Benedek',
        description: 'Benedek makes dope funk!',
        imageRef: 'gs://groov-development-ddc9d.appspot.com/benedek.jpeg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek.jpeg?alt=media&token=c9268b77-c4d7-470f-b3ac-9a5895a7d6e9',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('artist', null, {});
  },
};
