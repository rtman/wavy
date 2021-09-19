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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Falbums%2F6960fd68-732e-4c3c-8995-8d72989f53db%2Fprofile_large.jpg?alt=media&token=9624efbb-c323-4298-9030-d908ae659ef2',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Falbums%2F6960fd68-732e-4c3c-8995-8d72989f53db%2Fprofile_small.jpg?alt=media&token=c099359c-d282-481b-888f-8883ece13fc0',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Falbums%2F6960fd68-732e-4c3c-8995-8d72989f53db%2Fprofile_thumb.jpg?alt=media&token=5e0a741d-f1eb-4acc-8efb-b6e4e6a9d722',
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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2Fprofile_large.jpg?alt=media&token=c6000147-35be-4a5c-a4b9-0fd1c7c7c4ac',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2Fprofile_small.jpg?alt=media&token=6ebbb638-5551-4e1b-8d0e-38ff2ff6ee14',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2Fprofile_thumb.jpg?alt=media&token=76fac8df-1ffb-4492-a9ef-b97ea114ff30',
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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2Fprofile_large.jpg?alt=media&token=af123c6b-941e-4b67-a9d6-b27f3bd8dd08',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2Fprofile_small.jpg?alt=media&token=893837a7-ca32-4f53-bcaf-fe1949c2b995',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2Fprofile_thumb.jpg?alt=media&token=fa6c12f1-f2cf-460f-a015-bc47b91a31b4',
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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2Fprofile_large.jpg?alt=media&token=eb3e0d98-3a3e-4bf4-bc61-2cba07adf239',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2Fprofile_small.jpg?alt=media&token=1333d65d-2ddb-4114-9bc6-899c1a03960a',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2Fprofile_thumb.jpg?alt=media&token=aa09488d-32d3-421b-be70-bd0e6d29eefe',
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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2Fprofile_large.jpg?alt=media&token=e306f83e-34b0-4417-9f21-8f1aac609eea',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2Fprofile_small.jpg?alt=media&token=bd737b0c-ccb0-406c-8548-9177ed246303',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2Fprofile_thumb.jpg?alt=media&token=849a0443-c2de-48f2-b3bf-bc67f70a3be8',
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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2Fprofile_large.jpg?alt=media&token=e306f83e-34b0-4417-9f21-8f1aac609eea',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2Fprofile_small.jpg?alt=media&token=bd737b0c-ccb0-406c-8548-9177ed246303',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2Fprofile_thumb.jpg?alt=media&token=849a0443-c2de-48f2-b3bf-bc67f70a3be8',
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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2Fprofile_large.jpg?alt=media&token=8f5ffbb9-f945-41cc-8fd2-240b0195da3d',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2Fprofile_small.jpg?alt=media&token=d93fd291-0840-4045-9b5e-92687c046bcf',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2Fprofile_thumb.jpg?alt=media&token=cbcbf57e-f274-44a9-a9c6-a6be7416d8fd',
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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2Fprofile_large.jpg?alt=media&token=87e6273c-6426-4f45-9dff-dba274666bae',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2Fprofile_small.jpg?alt=media&token=8fe3d91c-86e7-4cb4-9846-2ff3558dded7',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2Fprofile_thumb.jpg?alt=media&token=d34e00e4-8c08-43ee-bfbc-386290b9ad44',
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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2Fprofile_large.jpg?alt=media&token=8070e76c-30e6-4b8c-899c-73e44f60a541',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2Fprofile_small.jpg?alt=media&token=e8e172bb-782c-4a14-98d6-23955f37ec53',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2Fprofile_thumb.jpg?alt=media&token=d30522de-f208-4503-a4e6-559a5decd621',
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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2Fprofile_large.jpg?alt=media&token=d49659b9-2a96-46ed-991f-825ab3a24c21',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2Fprofile_small.jpg?alt=media&token=d1a3cc59-3718-4e8b-94f1-d43ae561d0f1',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2Fprofile_thumb.jpg?alt=media&token=b2eda4f6-db25-4f34-926d-67b769b419a5',
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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2Fprofile_large.jpg?alt=media&token=68ee0f04-2469-41e1-b1ba-a5723eb437dd',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2Fprofile_small.jpg?alt=media&token=806a9c12-6f4d-45a9-a444-58422058ae3f',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2Fprofile_thumb.jpg?alt=media&token=7a1cab4a-b28f-40a0-8cf1-fe2901aa654b',
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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2Fprofile_large.jpg?alt=media&token=ee41aa48-404b-4366-90e2-220cfb1f2b1d',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2Fprofile_small.jpg?alt=media&token=a88973ce-5bd3-4fb8-aa75-28bb724704cc',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2Fprofile_thumb.jpg?alt=media&token=6ebab93e-a529-43ca-816f-425e69e1ff54',
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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2Fprofile_large.jpg?alt=media&token=5d5bc522-f910-453c-aadc-fc9403050ea9',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2Fprofile_small.jpg?alt=media&token=b6dc4b09-fb3c-4824-a3e3-d793966bd1e4',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2Fprofile_thumb.jpg?alt=media&token=281aa482-a57c-4e1b-bede-5fb255019a95',
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
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2Fprofile_large.jpg?alt=media&token=841a587f-6848-4e13-a295-2c7ec643f0df',
        profileImageUrlSmall:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2Fprofile_small.jpg?alt=media&token=159069d6-6038-41ff-824d-7c0068ce17cda',
        profileImageUrlThumb:
          'https://firebasestorage.googleapis.com/v0/b/wavy-development.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2Fprofile_thumb.jpg?alt=media&token=063e59e1-a7b5-4da6-9027-5cbc474a2144',
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
