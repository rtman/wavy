'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('artist', [
      {
        id: '0b600e0a-96d0-4ec0-bc94-2587a6b3507a',
        name: 'Various Artists',
        description: '',
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
        permissionCode: 'bbc0e46a-1a75-4be2-a4be-af171877aa83',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 0,
        creatorUserId: '3WkOZ9SdaZOu6grNQPPd8dhV4vC3',
        claimed: true,
      },
      {
        id: '30f65df5-98bb-48cd-83e5-867f707f941d',
        name: 'András',
        description: 'András Fox is a musician from australia!',
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
        permissionCode: '963a8dcb-3568-4f5b-90d4-7778445b6b79',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 100,
        creatorUserId: '3WkOZ9SdaZOu6grNQPPd8dhV4vC3',
        claimed: true,
      },
      {
        id: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        name: 'Raf Reza',
        description: 'Raf is a musician living in toronto!',
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
        permissionCode: 'aeb602a7-43d7-4e99-ba26-d9dab393581f',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 200,
        creatorUserId: '3WkOZ9SdaZOu6grNQPPd8dhV4vC3',
        claimed: true,
      },
      {
        id: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        name: 'ESB',
        description: 'ESB is a musician living in vancouver!',
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
        permissionCode: 'f773f5cd-a1cb-406d-bba4-7c2b996b80a2',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 300,
        creatorUserId: '3WkOZ9SdaZOu6grNQPPd8dhV4vC3',
        claimed: true,
      },
      {
        id: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        name: 'Seb Wildblood',
        description: 'Seb is a musician living in london!',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fprofile_large.jpg?alt=media&token=c58d0f50-a364-44af-a77e-abdbbfa04a62',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fprofile_small.jpg?alt=media&token=9b323720-50d4-453c-ae11-2432fff68be7',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fprofile_thumb.jpg?alt=media&token=0652e8f1-dfc3-4495-b1b8-29e782bc1ab8',
        permissionCode: '1e7a7925-1414-4ece-823a-ca39bdf928ea',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 250,
        creatorUserId: '3WkOZ9SdaZOu6grNQPPd8dhV4vC3',
        claimed: true,
      },
      {
        id: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        name: 'Bad Bad Not Good',
        description: 'BBNG are a musicians living in toronto (I think)!',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2Fprofile_large.jpg?alt=media&token=3a581ee1-cc75-4cb0-96ef-108f51afaaa0',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2Fprofile_small.jpg?alt=media&token=a2d2b18c-99d4-40ef-a80c-ce337532eddb',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2Fprofile_thumb.jpg?alt=media&token=b2ea4a81-a107-47f1-acd6-31ae978aefd0',
        permissionCode: 'b83e915c-8d94-4857-a63e-87fa150f2a48',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 1000,
        creatorUserId: '3WkOZ9SdaZOu6grNQPPd8dhV4vC3',
        claimed: true,
      },
      {
        id: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        name: 'Benedek',
        description: 'Benedek makes dope funk!',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2Fprofile_large.jpg?alt=media&token=99c19223-63b3-4fcb-9b67-00523d4f6280',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2Fprofile_small.jpg?alt=media&token=0aff3916-b4ca-47c6-8da5-8ed173cc969d',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2Fprofile_thumb.jpg?alt=media&token=8261b880-1375-4197-880d-d76dbef915e5',
        permissionCode: 'df5f4881-d1bb-4958-8bbe-c1c9ca8d8f23',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 225,
        creatorUserId: '3WkOZ9SdaZOu6grNQPPd8dhV4vC3',
        claimed: true,
      },
      {
        id: '00b699d2-6439-404d-aff3-166a886ccd6a',
        name: 'Test Unclaimed Artist',
        description: 'Benedek makes dope funk!',
        permissionCode: 'd8e7f002-1136-41d6-95cd-8e20134b38a2',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 225,
        creatorUserId: '3WkOZ9SdaZOu6grNQPPd8dhV4vC3',
        claimed: false,
        claimantEmail: 'ryanjtrann@gmail.com',
        claimCode: '7d15a539-c558-412d-a192-e0f26db2a925',
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('artist', null, {});
  },
};
