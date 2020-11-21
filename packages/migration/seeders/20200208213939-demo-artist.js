'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('artist', [
      {
        id: '0b600e0a-96d0-4ec0-bc94-2587a6b3507a',
        name: 'Various Artists',
        description: '',
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
        connectionCode: 'bbc0e46a-1a75-4be2-a4be-af171877aa83',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 0,
        creatorUserId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
      },
      {
        id: '30f65df5-98bb-48cd-83e5-867f707f941d',
        name: 'András',
        description: 'András Fox is a musician from australia!',
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
        connectionCode: '963a8dcb-3568-4f5b-90d4-7778445b6b79',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 100,
        creatorUserId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
      },
      {
        id: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        name: 'Raf Reza',
        description: 'Raf is a musician living in toronto!',
        profileImageStoragePathLarge:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/proflie_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Fprofile_large.jpg?alt=media&token=9ae0cf14-7bb5-46ae-ac59-3dcfde001047',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Fprofile_small.jpg?alt=media&token=58b8a11c-7100-427e-a287-fc95d9c8540e',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Fproflie_thumb.jpg?alt=media&token=3af011d7-53b1-489a-9015-975f5c7e04a2',
        connectionCode: 'aeb602a7-43d7-4e99-ba26-d9dab393581f',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 200,
        creatorUserId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
      },
      {
        id: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        name: 'ESB',
        description: 'ESB is a musician living in vancouver!',
        profileImageStoragePathLarge:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fprofile_large.jpg?alt=media&token=b8bb7b08-fc8c-4866-bce8-527310e10470',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fprofile_small.jpg?alt=media&token=1f1808e4-2ef1-4215-ac60-3ad03ded795b',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fprofile_thumb.jpg?alt=media&token=3c0b4467-059b-4725-aa69-0b89d63c9264',
        connectionCode: 'f773f5cd-a1cb-406d-bba4-7c2b996b80a2',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 300,
        creatorUserId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
      },
      {
        id: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        name: 'Seb Wildblood',
        description: 'Seb is a musician living in london!',
        profileImageStoragePathLarge:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fprofile_large.jpg?alt=media&token=c66abd8b-4f45-4f57-9178-b96c06435c4c',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fprofile_small.jpg?alt=media&token=ced698ae-a3f3-4dec-b8b7-3a595d539663',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fprofile_thumb.jpg?alt=media&token=445c0199-f1c4-439d-b943-276ea2a722eb',
        connectionCode: '1e7a7925-1414-4ece-823a-ca39bdf928ea',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 250,
        creatorUserId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
      },
      {
        id: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        name: 'Bad Bad Not Good',
        description: 'BBNG are a musicians living in toronto (I think)!',
        profileImageStoragePathLarge:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2Fprofile_large.jpg?alt=media&token=bd3b700d-dbc5-46cb-a9ee-4a3cd936d09b',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2Fprofile_small.jpg?alt=media&token=bc5359a5-8e66-47c6-8ce0-0eb1fe81f8b1',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2Fprofile_thumb.jpg?alt=media&token=e0bc0683-3a94-40b1-a043-b4b2834ed933',
        connectionCode: 'b83e915c-8d94-4857-a63e-87fa150f2a48',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 1000,
        creatorUserId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
      },
      {
        id: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        name: 'Benedek',
        description: 'Benedek makes dope funk!',
        profileImageStoragePathLarge:
          'gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2Fprofile_large.jpg?alt=media&token=8f239031-ba5d-4d18-baa7-c8bfdb10d218',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2Fprofile_small.jpg?alt=media&token=99031996-2065-49f1-9273-15a30376fbfe',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2Fprofile_thumb.jpg?alt=media&token=fc7027ef-afe9-4bec-9704-9c52ac16eb59',
        connectionCode: 'df5f4881-d1bb-4958-8bbe-c1c9ca8d8f23',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 225,
        creatorUserId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('artist', null, {});
  },
};
