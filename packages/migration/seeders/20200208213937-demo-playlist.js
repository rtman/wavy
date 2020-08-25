'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('playlist', [
      {
        id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc09',
        title: 'Hot Choones 2020',
        description: 'Only heaters!!',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/esb%20live%20PR%20(filtre).jpg?alt=media&token=f95f227e-3471-4611-9338-32ecce29b7eb',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 100,
      },
      {
        id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        title: 'Anotha One',
        description: '!@#!$',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/esb%20live%20PR%20(filtre).jpg?alt=media&token=f95f227e-3471-4611-9338-32ecce29b7eb',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 101,
      },
      {
        id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc11',
        title: 'asdf',
        description: 'ffff!',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/esb%20live%20PR%20(filtre).jpg?alt=media&token=f95f227e-3471-4611-9338-32ecce29b7eb',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 20,
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('playlist', null, {});
  },
};
