'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('playlist', [
      {
        id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc09',
        title: 'Hot Choones 2020',
        description: 'Only heaters!!',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/proflie_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Fprofile_large.jpg?alt=media&token=9ae0cf14-7bb5-46ae-ac59-3dcfde001047',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Fprofile_small.jpg?alt=media&token=58b8a11c-7100-427e-a287-fc95d9c8540e',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Fproflie_thumb.jpg?alt=media&token=3af011d7-53b1-489a-9015-975f5c7e04a2',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 100,
      },
      {
        id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        title: 'Anotha One',
        description: '!@#!$',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/andras-untitled.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fprofile_large.jpg?alt=media&token=b8bb7b08-fc8c-4866-bce8-527310e10470',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fprofile_small.jpg?alt=media&token=1f1808e4-2ef1-4215-ac60-3ad03ded795b',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fprofile_thumb.jpg?alt=media&token=3c0b4467-059b-4725-aa69-0b89d63c9264',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 101,
      },
      {
        id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc11',
        title: 'asdf',
        description: 'ffff!',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2Fprofile_large.jpg?alt=media&token=bd3b700d-dbc5-46cb-a9ee-4a3cd936d09b',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2Fprofile_small.jpg?alt=media&token=bc5359a5-8e66-47c6-8ce0-0eb1fe81f8b1',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2Fprofile_thumb.jpg?alt=media&token=e0bc0683-3a94-40b1-a043-b4b2834ed933',
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
