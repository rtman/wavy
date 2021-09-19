'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('user', [
      {
        id: 'IhoEK55AxJU4QsTftSoV0uQdnz13',
        firstName: 'Test',
        lastName: 'Person',
        email: 'test@test.com',
        password: 'testtest',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/andras-untitled.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Fprofile_large.jpg?alt=media&token=9bc54a85-4495-42df-97bd-935d946debe7',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Fprofile_small.jpg?alt=media&token=a9470ff5-8ae0-4894-b1a9-e96e3fcd905a',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Fprofile_thumb.jpg?alt=media&token=1e99ffe8-411d-4966-9394-5e37d9f8f566',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'UF2VJMo4W7MGAcP03HNFtviiG3x2',
        firstName: 'Test',
        lastName: 'Person 2',
        email: 'test2@test.com',
        password: 'testtest',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/andras-untitled.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Fprofile_large.jpg?alt=media&token=9bc54a85-4495-42df-97bd-935d946debe7',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Fprofile_small.jpg?alt=media&token=a9470ff5-8ae0-4894-b1a9-e96e3fcd905a',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Fprofile_thumb.jpg?alt=media&token=1e99ffe8-411d-4966-9394-5e37d9f8f566',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('user', null, {});
  },
};
