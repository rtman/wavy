'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('playlist', [
      {
        id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc09',
        title: 'Hot Choones 2020',
        description: 'Only heaters!!',
        profileImageStoragePathLarge:
          'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        profileImageStoragePathSmall:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageStoragePathThumb:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/esb%20live%20PR%20(filtre).jpg?alt=media&token=f95f227e-3471-4611-9338-32ecce29b7eb',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 100,
      },
      {
        id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        title: 'Anotha One',
        description: '!@#!$',
        profileImageStoragePathLarge:
          'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        profileImageStoragePathSmall:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageStoragePathThumb:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/esb%20live%20PR%20(filtre).jpg?alt=media&token=f95f227e-3471-4611-9338-32ecce29b7eb',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 101,
      },
      {
        id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc11',
        title: 'asdf',
        description: 'ffff!',
        profileImageStoragePathLarge:
          'gs://groov-development-ddc9d.appspot.com/esb live PR (filtre).jpg',
        profileImageStoragePathSmall:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageStoragePathThumb:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/esb%20live%20PR%20(filtre).jpg?alt=media&token=f95f227e-3471-4611-9338-32ecce29b7eb',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
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
