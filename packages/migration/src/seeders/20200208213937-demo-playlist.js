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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Fprofile_large.jpg?alt=media&token=49277ebf-0415-410d-bf95-f99f8db7b390',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Fprofile_small.jpg?alt=media&token=20820215-63f6-414b-8e8d-f0afefe8ab9c',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Fproflie_thumb.jpg?alt=media&token=eaaea884-edde-4dc6-9776-14209a76b15a',
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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fprofile_large.jpg?alt=media&token=85a232dd-961d-4735-ae71-ee0ce8fba697',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fprofile_small.jpg?alt=media&token=88aa753b-82f1-4062-b8d2-e9501004b6db',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fprofile_thumb.jpg?alt=media&token=08fcb0d3-5311-45c1-a131-7120992ac93b',
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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2Fprofile_large.jpg?alt=media&token=3a581ee1-cc75-4cb0-96ef-108f51afaaa0',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2Fprofile_small.jpg?alt=media&token=a2d2b18c-99d4-40ef-a80c-ce337532eddb1',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2Fprofile_thumb.jpg?alt=media&token=b2ea4a81-a107-47f1-acd6-31ae978aefd0',
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
