'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('album', [
      {
        id: '6960fd68-732e-4c3c-8995-8d72989f53db',
        title: 'Untitled',
        artistId: '30f65df5-98bb-48cd-83e5-867f707f941d',
        labelId: '85248eee-5f5b-49f8-a9d9-e08418b829b8',
        description: 'Untitled is a single/ep',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/albums/6960fd68-732e-4c3c-8995-8d72989f53db/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/albums/6960fd68-732e-4c3c-8995-8d72989f53db/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/albums/6960fd68-732e-4c3c-8995-8d72989f53db/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Falbums%2F6960fd68-732e-4c3c-8995-8d72989f53db%2Fprofile_large.jpg?alt=media&token=5ff2bda4-854a-4f67-8acb-366ab0c86f70',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Falbums%2F6960fd68-732e-4c3c-8995-8d72989f53db%2Fprofile_small.jpg?alt=media&token=419b9be5-1de3-4d5f-964e-95773eddb9ae',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Falbums%2F6960fd68-732e-4c3c-8995-8d72989f53db%2Fprofile_thumb.jpg?alt=media&token=21944373-f845-41e9-ab7a-2b9c3280b9e3',
        releaseDate: '2014-05-20T07:00:00+00:00',
        processing: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
      },
      {
        id: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        title: 'Moods From the Multiverse',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        description: 'Released on heart to heart records',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2Fprofile_large.jpg?alt=media&token=72ade621-7146-4066-aa60-b9575d27f292',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2Fprofile_small.jpg?alt=media&token=901909b4-c640-4a79-be8e-8913ba2f249d',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2Fprofile_thumb.jpg?alt=media&token=e4a598d6-9571-4ece-9c16-43e2e88476ae',
        releaseDate: '2014-05-20T07:00:00+00:00',
        processing: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
      },
      {
        id: 'f2028bf3-ed1c-4057-b430-c3374116a959',
        title: 'Proto',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        labelId: 'b587201a-ccd8-4ac7-a9c7-fba9c369e7da',
        description: 'Released on cosmic resonance',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2Fprofile_large.jpg?alt=media&token=70d8e61d-7e5d-4070-8b70-1896fe02a5ab',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2Fprofile_small.jpg?alt=media&token=2afcad28-942b-42bd-8c77-82f0be885c6c',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2Fprofile_thumb.jpg?alt=media&token=ac74b9d8-ad88-47e9-97b2-982d90ed3689',
        releaseDate: '2014-05-20T07:00:00+00:00',
        processing: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
      },
      {
        id: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        title: 'On Cue',
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        description: 'Released on heart to heart records',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2Fprofile_large.jpg?alt=media&token=7ce1f4f0-245f-4322-8a25-9f36e4227995',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2Fprofile_small.jpg?alt=media&token=b2d8c202-5a43-43dd-b5aa-be22771fae6b',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2Fprofile_thumb.jpg?alt=media&token=edf90944-14cf-46da-b417-5000d1f90d1e',
        releaseDate: '2014-05-20T07:00:00+00:00',
        processing: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
      },
      {
        id: '911684b3-c073-4b33-ae2a-014346df4bc8',
        title: 'Origins',
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        description: 'Released on heart to heart records',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2Fprofile_large.jpg?alt=media&token=215367b3-3a05-454e-b172-9becfa33cec3',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2Fprofile_small.jpg?alt=media&token=22afc9f5-99c3-4967-864f-6ee0ab8896ef',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2Fprofile_thumb.jpg?alt=media&token=92029692-5029-4246-b816-af3595e8bf11',
        releaseDate: '2014-05-20T07:00:00+00:00',
        processing: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
      },
      {
        id: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        title: 'Mist Outro',
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        description: 'Released on heart to heart records',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2Fprofile_large.jpg?alt=media&token=215367b3-3a05-454e-b172-9becfa33cec3',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2Fprofile_small.jpg?alt=media&token=22afc9f5-99c3-4967-864f-6ee0ab8896ef',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2Fprofile_thumb.jpg?alt=media&token=92029692-5029-4246-b816-af3595e8bf11',
        releaseDate: '2014-05-20T07:00:00+00:00',
        processing: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
      },
      {
        id: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        title: 'Foreign Parts',
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        description: 'Released on SW',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2Fprofile_large.jpg?alt=media&token=b4f24a2a-b7ad-478d-8ed5-00528c76e501',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2Fprofile_small.jpg?alt=media&token=cdebe67d-b879-4002-bb12-7630ad1b8db9',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2Fprofile_thumb.jpg?alt=media&token=4659b61f-90a8-4925-8759-3b2a72a97800',
        releaseDate: '2014-05-20T07:00:00+00:00',
        processing: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
      },
      {
        id: '8c587e75-58c0-45e0-a87e-538fbf69848f',
        title: 'Melodic Tools',
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        description: 'Released on SW',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/8c587e75-58c0-45e0-a87e-538fbf69848f/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/8c587e75-58c0-45e0-a87e-538fbf69848f/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/8c587e75-58c0-45e0-a87e-538fbf69848f/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2Fprofile_large.jpg?alt=media&token=b1064855-95b0-4c50-8656-364438669e5e',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2Fprofile_small.jpg?alt=media&token=ee1d8ab8-64eb-47c2-96f6-755a3211ba04',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2Fprofile_thumb.jpg?alt=media&token=7cb6ff61-de79-4dc3-9d8b-3ed7cfb87496',
        releaseDate: '2014-05-20T07:00:00+00:00',
        processing: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
      },
      {
        id: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        title: 'SW004',
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        description: 'Released on SW',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2Fprofile_large.jpg?alt=media&token=9937e8db-0f10-467f-88f1-4b22a6ed0a68',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2Fprofile_small.jpg?alt=media&token=82b11b76-8834-4f7d-825d-710e528f8b34',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2Fprofile_thumb.jpg?alt=media&token=099f1111-4e1b-4497-a042-a5ed18c6d6b3',
        releaseDate: '2014-05-20T07:00:00+00:00',
        processing: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
      },
      {
        id: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        title: 'Submarine',
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        description: 'Released on SW',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2Fprofile_large.jpg?alt=media&token=fc595236-8a2c-4303-869a-2e3afe0d09d0',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2Fprofile_small.jpg?alt=media&token=17bce8c8-38c9-4dd4-96a3-1517d30ee757',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2Fprofile_thumb.jpg?alt=media&token=a5551ed0-b035-4dbf-8d73-7553516d058f',
        releaseDate: '2014-05-20T07:00:00+00:00',
        processing: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
      },
      {
        id: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        title: 'U',
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        description: 'Released on SW',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2Fprofile_large.jpg?alt=media&token=76e45bc4-b13a-4984-bb88-a49de7ddc4c2',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2Fprofile_small.jpg?alt=media&token=dbc30073-d52d-4ce5-85f0-9f620cb10bfa',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2Fprofile_thumb.jpg?alt=media&token=ec4ab0d6-6f25-4888-b432-8f60ccf0a9fb',
        releaseDate: '2014-05-20T07:00:00+00:00',
        processing: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
      },
      {
        id: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        title: 'BBNG',
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        description: 'Self released',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2Fprofile_large.jpg?alt=media&token=0235af94-6919-4a88-a273-0710fbdd48af',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2Fprofile_small.jpg?alt=media&token=57982375-0961-4525-ad25-33a41e2d51f5',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2Fprofile_thumb.jpg?alt=media&token=930afa88-ae0a-40c6-ac34-cd61736d09b9',
        releaseDate: '2014-05-20T07:00:00+00:00',
        processing: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
      },
      {
        id: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        title: `Bene's World`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        description: 'Released on Leaving Records',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2Fprofile_large.jpg?alt=media&token=b1904931-74c5-4722-a406-c5f7e14a4345',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2Fprofile_small.jpg?alt=media&token=e2b8a975-c49c-4b85-8fed-eb992d5e5f80',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2Fprofile_thumb.jpg?alt=media&token=42cd5065-5be4-4236-8cfd-27ddee625cdc',
        releaseDate: '2014-05-20T07:00:00+00:00',
        processing: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
      },
      {
        id: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        title: `Coolin`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        description: 'Released on Leaving Records',
        profileImageStoragePathLarge:
          'gs://wavy-development.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/profile_large.jpg',
        profileImageStoragePathSmall:
          'gs://wavy-development.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/profile_small.jpg',
        profileImageStoragePathThumb:
          'gs://wavy-development.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/profile_thumb.jpg',
        profileImageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2Fprofile_large.jpg?alt=media&token=2f600b45-d983-4260-bc76-e962fb2807ad',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2Fprofile_small.jpg?alt=media&token=6dea3122-a675-4fd5-9f5f-7819829f23ea',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2Fprofile_thumb.jpg?alt=media&token=4e3eb480-c80d-4994-965d-db841f56e6b3',
        releaseDate: '2014-05-20T07:00:00+00:00',
        processing: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('album', null, {});
  },
};
