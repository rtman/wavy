'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('user', [
      {
        id: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        firstName: 'Ryan',
        lastName: 'Trann',
        email: 'ryanjtrann@gmail.com',
        password: 'testtest',
        profileImageStoragePathLarge:
          'gs://groov-development-ddc9d.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://groov-development-ddc9d.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Fprofile_large.jpg?alt=media&token=e8522aa9-f89e-43b7-847d-18ced36c5381',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Fprofile_small.jpg?alt=media&token=03dcbaa9-09e5-48d1-9ca9-ffcfca6f912a',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Fprofile_thumb.jpg?alt=media&token=889ccf1c-1efc-43d5-9559-0b3583070326',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'F2qAdR0c81c3xGFk5PmgDXKAjis2',
        firstName: 'Test',
        lastName: 'Person',
        email: 'test@gmail.com',
        password: 'testtest',
        profileImageStoragePathLarge:
          'gs://groov-development-ddc9d.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://groov-development-ddc9d.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Fprofile_large.jpg?alt=media&token=e8522aa9-f89e-43b7-847d-18ced36c5381',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Fprofile_small.jpg?alt=media&token=03dcbaa9-09e5-48d1-9ca9-ffcfca6f912a',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Fprofile_thumb.jpg?alt=media&token=889ccf1c-1efc-43d5-9559-0b3583070326',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('user', null, {});
  },
};
