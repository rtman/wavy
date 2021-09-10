'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('label', [
      {
        id: '85248eee-5f5b-49f8-a9d9-e08418b829b8',
        name: 'Superconscious Records',
        description:
          'Australian record label run by Francis Inferno Orchestra and Fantastic Man. Distribution by Above Board Distribution.',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/85248eee-5f5b-49f8-a9d9-e08418b829b8/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/85248eee-5f5b-49f8-a9d9-e08418b829b8/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/85248eee-5f5b-49f8-a9d9-e08418b829b8/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/85248eee-5f5b-49f8-a9d9-e08418b829b8%2Fprofile_large.jpg?alt=media&token=047d5904-bf31-49b3-9a37-25a5d20b368e',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/85248eee-5f5b-49f8-a9d9-e08418b829b8%2Fprofile_small.jpg?alt=media&token=dc2c5e90-842d-4694-977a-0923d2122cf6',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/85248eee-5f5b-49f8-a9d9-e08418b829b8%2Fprofile_thumb.jpg?alt=media&token=c83236ba-bb88-4978-8e56-a465458e74c7',
        permissionCode: '10c45116-c9f4-4957-a411-991c4a251435',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 100,
      },
      {
        id: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        name: 'Heart to Heart Records',
        description:
          'Label out of western canada, exploring the underground dance floors of the world.',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/9862ca9e-23ed-4519-aef2-3daf27bf34f7/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/9862ca9e-23ed-4519-aef2-3daf27bf34f7/profile_small.jpg ',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/9862ca9e-23ed-4519-aef2-3daf27bf34f7/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/9862ca9e-23ed-4519-aef2-3daf27bf34f7%2Fprofile_large.jpg?alt=media&token=33a2d434-58ce-4b59-9ead-da71f462d230',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/9862ca9e-23ed-4519-aef2-3daf27bf34f7%2Fprofile_small.jpg?alt=media&token=3bf28911-2bf1-4f2a-a58e-30e688d72db5',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/9862ca9e-23ed-4519-aef2-3daf27bf34f7%2Fprofile_thumb.jpg?alt=media&token=965c0002-c6b7-4157-876d-41a6a138b41f',
        permissionCode: '907cc0f5-2a21-4b62-a303-d82169219749',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 99,
      },
      {
        id: 'b587201a-ccd8-4ac7-a9c7-fba9c369e7da',
        name: 'Cosmic Resonance',
        description:
          'Cosmic Resonance is a Toronto vinyl imprint showcasing artists who experiment with music via a cosmic perspective.',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/b587201a-ccd8-4ac7-a9c7-fba9c369e7da/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/b587201a-ccd8-4ac7-a9c7-fba9c369e7da/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/b587201a-ccd8-4ac7-a9c7-fba9c369e7da/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/b587201a-ccd8-4ac7-a9c7-fba9c369e7da%2Fprofile_large.jpg?alt=media&token=8564e235-1742-470c-bed3-f389465e39ba',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/b587201a-ccd8-4ac7-a9c7-fba9c369e7da%2Fprofile_small.jpg?alt=media&token=a6c34f47-e396-4a22-857b-a3257c3246f5',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/b587201a-ccd8-4ac7-a9c7-fba9c369e7da%2Fprofile_thumb.jpg?alt=media&token=21ba092c-7071-4cf2-b0b6-9aedc49d9b6a',
        permissionCode: 'ea317ddf-53a9-4235-8e9e-9c65dbb590a5',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 98,
      },
      {
        id: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        name: 'Church',
        description: 'Seb Wildbloods Label',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/3a6e67cb-7b0b-4248-baee-7e513a361d09/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/3a6e67cb-7b0b-4248-baee-7e513a361d09/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/3a6e67cb-7b0b-4248-baee-7e513a361d09/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/3a6e67cb-7b0b-4248-baee-7e513a361d09%2Fprofile_large.jpg?alt=media&token=e9f3a36d-8eda-4c93-9465-ccf927a8bcaf9',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/3a6e67cb-7b0b-4248-baee-7e513a361d09%2Fprofile_small.jpg?alt=media&token=07003921-980b-4b0f-896b-7e7c7a9d3dc4',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/3a6e67cb-7b0b-4248-baee-7e513a361d09%2Fprofile_thumb.jpg?alt=media&token=fe5c35ba-34c8-4489-9a6c-21c5e4a926d5',
        permissionCode: '74f8c298-bd1a-4b46-8131-5b3cbf67793f',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 1000,
      },
      {
        id: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        name: 'Leaving Records',
        description:
          'Leaving Records is a homegrown experimental record label started by L.A. experimental musician MatthewDavid + visual artist Jesselisa Moretti. Distribution partnership with Stones Throw Records.',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65%2Fprofile_large.jpg?alt=media&token=912c1d9b-bcd4-43fd-891c-339183f0df09',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65%2Fprofile_small.jpg?alt=media&token=800dbaa6-f55c-4f1b-94ea-4eb7a60bf41e',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65%2Fprofile_thumb.jpg?alt=media&token=02cbbb0b-093a-4a10-a2bf-29bbaab7aaa6',
        permissionCode: '8cfecbb5-dd0e-420b-ad19-ab9c40fd6e26',
        createdAt: new Date(),
        updatedAt: new Date(),
        followers: 250,
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('label', null, {});
  },
};
