'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('song', [
      {
        id: 'ef8bfa7c-d2b4-49b5-9da9-17978be4e9a4',
        ref:
          'gs://groov-development-ddc9d.appspot.com/András - B1. Gold Coast (House Mix).ogg',
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: 'Gold Coast (House Mix)',
        artistId: '30f65df5-98bb-48cd-83e5-867f707f941d',
        albumId: '6960fd68-732e-4c3c-8995-8d72989f53db',
        labelId: '85248eee-5f5b-49f8-a9d9-e08418b829b8',
        releaseDate: '2014-05-20T07:00:00+00:00', // RFC 3339
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 20,
        tagSearchString: 'house,electronic',
      },
      {
        id: '3c3d5f29-d675-41b3-8ed6-c2c781c3a606',
        ref:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/B2_Exit_Point_Mastered_16.ogg?alt=media&token=5c9b1273-03d4-4e0c-bf91-e1f6629aa9d4',
        title: 'Exit Point',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH013%20art.png?alt=media&token=3be2fff8-e75f-4dba-a18f-0ac6e7a850e5',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 10,
        tagSearchString: 'house,electronic',
      },
      {
        id: '0eaaa270-9373-458b-a6d6-7fd013931245',
        ref:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - A1_C_Quenz_Mastered_16.ogg',
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Raf%20Reza%20-%20A1_C_Quenz_Mastered_16.ogg?alt=media&token=58b33e18-fa20-4a66-a3e5-85b82c66b69d',
        title: 'C Quenz',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH013%20art.png?alt=media&token=3be2fff8-e75f-4dba-a18f-0ac6e7a850e5',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 220,
        tagSearchString: 'house,electronic',
      },
      {
        id: '20872940-4952-4d3e-84b7-d68529af7a91',
        ref:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - A2_Cruising_Speed_Mastered_16.ogg',
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Raf%20Reza%20-%20A2_Cruising_Speed_Mastered_16.ogg?alt=media&token=d011ce3c-9038-45fe-bc1f-d3eb8dc0698e',
        title: 'Cruising Speed',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH013%20art.png?alt=media&token=3be2fff8-e75f-4dba-a18f-0ac6e7a850e5',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 310,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'fc0be79a-274a-4bf8-98a5-b580b7a1bac5',
        ref:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - B1_Rogue_Mastered_16.ogg',
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Raf%20Reza%20-%20B1_Rogue_Mastered_16.ogg?alt=media&token=0b277166-6832-4260-a2c3-27790a7690b4',
        title: 'Rogue',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH013%20art.png?alt=media&token=3be2fff8-e75f-4dba-a18f-0ac6e7a850e5',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 120,
        tagSearchString: 'house,electronic',
      },
      {
        id: '0694f13e-f8ca-406d-8b6b-fd081e1c930a',
        ref:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - Pineapple Island.ogg',
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Raf%20Reza%20-%20Pineapple%20Island.ogg?alt=media&token=d3a776f8-c130-42d7-99d3-9659be1af118',
        title: 'Pineapple Island',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: 'f2028bf3-ed1c-4057-b430-c3374116a959',
        labelId: 'b587201a-ccd8-4ac7-a9c7-fba9c369e7da',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/raf reza - proto.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/raf%20reza%20-%20proto.jpg?alt=media&token=b26858a3-232e-43b8-a47d-dd2e644d1b63',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 220,
        tagSearchString: 'house,electronic',
      },
      {
        id: '995d0081-63ee-4fc2-8a61-fc67928c4a12',
        ref:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - Space Strut.ogg',
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Raf%20Reza%20-%20Space%20Strut.ogg?alt=media&token=4b96dafc-7272-4e9a-b698-d5b77fad47ab',
        title: 'Space Strut',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: 'f2028bf3-ed1c-4057-b430-c3374116a959',
        labelId: 'b587201a-ccd8-4ac7-a9c7-fba9c369e7da',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/raf reza - proto.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/raf%20reza%20-%20proto.jpg?alt=media&token=b26858a3-232e-43b8-a47d-dd2e644d1b63',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 240,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'b5ca4741-9d14-4513-8e10-f163f9dd5623',
        ref:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - Why You Gotta_.ogg',
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Raf%20Reza%20-%20Why%20You%20Gotta_.ogg?alt=media&token=992819db-d1bd-446e-94db-cb4440ae1010',
        title: 'Why You Gotta',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: 'f2028bf3-ed1c-4057-b430-c3374116a959',
        labelId: 'b587201a-ccd8-4ac7-a9c7-fba9c369e7da',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/raf reza - proto.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/raf%20reza%20-%20proto.jpg?alt=media&token=b26858a3-232e-43b8-a47d-dd2e644d1b63',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 0,
        tagSearchString: 'house,electronic',
      },
      {
        id: '6cea15ba-0be2-410a-8bdc-acd101685a80',
        ref: 'gs://groov-development-ddc9d.appspot.com/ESB - On Cue.ogg',
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20On%20Cue.ogg?alt=media&token=4aa0c8ea-92fe-434f-890f-b4c6de703b33',
        title: 'On Cue',
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH002_A_digital.png?alt=media&token=2bbcf80a-2a4b-4b1f-b3b0-85f9046676b3',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 260,
        tagSearchString: 'house,electronic',
      },
      {
        id: '1d7f1de6-20ca-4656-ac43-ec9bde834510',
        ref:
          'gs://groov-development-ddc9d.appspot.com/ESB - On Cue (Vakula Remix).ogg',
        title: 'On Cue (Vakula Remix)',
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20On%20Cue%20(Vakula%20Remix).ogg?alt=media&token=06599d4b-43ba-4e1f-b549-6f5039f96a07',
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH002_A_digital.png?alt=media&token=2bbcf80a-2a4b-4b1f-b3b0-85f9046676b3',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 100,
        tagSearchString: 'house,electronic',
      },
      {
        id: '56c8a3cc-53af-4de3-ac91-c16a5c35cd0f',
        ref: `gs://groov-development-ddc9d.appspot.com/ESB - time won't forget.ogg`,
        url: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20time%20won't%20forget.ogg?alt=media&token=f923fe17-c8e5-4451-a349-6e6492cf0f18`,
        title: `Time Won't Forget`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH002_A_digital.png?alt=media&token=2bbcf80a-2a4b-4b1f-b3b0-85f9046676b3',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 110,
        tagSearchString: 'house,electronic',
      },
      {
        id: '1219f0dc-b472-4832-9bd9-23e101b0596d',
        ref: `gs://groov-development-ddc9d.appspot.com/ESB - terrium.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20terrium.ogg?alt=media&token=d1cfb450-7da7-4271-a2b6-d37a374e96bf',
        title: `Terrium`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH002_A_digital.png?alt=media&token=2bbcf80a-2a4b-4b1f-b3b0-85f9046676b3',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 130,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'c35b0e2e-99b6-4a08-aae2-a312e06b86ca',
        ref: `gs://groov-development-ddc9d.appspot.com/ESB - Q1.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20Q1.ogg?alt=media&token=e1e3bee4-6f7a-45f0-bc4c-19d37ff4a6e9',
        title: `Q1`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '911684b3-c073-4b33-ae2a-014346df4bc8',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH005_A_digital.png?alt=media&token=79a4ccc2-fa1c-45e2-ba31-656365fb488c',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 143,
        tagSearchString: 'house,electronic',
      },
      {
        id: '0de438c0-a710-4fb2-ba8e-7aaf55a4e2e4',
        ref: `gs://groov-development-ddc9d.appspot.com/ESB - Spaneaur.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20Spaneaur.ogg?alt=media&token=2e2c0fb7-5f59-4657-822e-6c00ad0480f0',
        title: `Spaneaur`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '911684b3-c073-4b33-ae2a-014346df4bc8',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH005_A_digital.png?alt=media&token=79a4ccc2-fa1c-45e2-ba31-656365fb488c',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 154,
        tagSearchString: 'house,electronic',
      },
      {
        id: '50ef4fe1-0e5b-4aab-84e8-1ca5e2507071',
        ref: `gs://groov-development-ddc9d.appspot.com/ESB - Whisper Theme.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20Whisper%20Theme.ogg?alt=media&token=38a20a96-a7cb-497d-9418-7269eca7ef2b',
        title: `Whisper Theme`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '911684b3-c073-4b33-ae2a-014346df4bc8',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH005_A_digital.png?alt=media&token=79a4ccc2-fa1c-45e2-ba31-656365fb488c',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 573,
        tagSearchString: 'house,electronic',
      },
      {
        id: '41bdaaf2-1b2d-4b4a-b4bd-8a2a3914f505',
        ref: `gs://groov-development-ddc9d.appspot.com/ESB - 20% Deeper.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%2020%25%20Deeper.ogg?alt=media&token=aff2b583-7480-47fc-b4b2-0ea5c97fbded',
        title: `20% Deeper`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '911684b3-c073-4b33-ae2a-014346df4bc8',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH005_A_digital.png?alt=media&token=79a4ccc2-fa1c-45e2-ba31-656365fb488c',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 630,
        tagSearchString: 'house,electronic',
      },
      {
        id: '8459e7b7-93aa-45ea-a078-4765208af79a',
        ref: `gs://groov-development-ddc9d.appspot.com/ESB - Fixation.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20Fixation.ogg?alt=media&token=a5f49da0-c10a-48e7-ac39-d316e6c5a78f',
        title: `Fixation`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH005_A_digital.png?alt=media&token=79a4ccc2-fa1c-45e2-ba31-656365fb488c',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 240,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'e9ebfe67-5913-4a41-86d2-dd43ab55e353',
        ref: `gs://groov-development-ddc9d.appspot.com/ESB - GLWL.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20GLWL.ogg?alt=media&token=89540520-cb5f-4981-b7dd-94f174d5e804',
        title: `GLWL`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH005_A_digital.png?alt=media&token=79a4ccc2-fa1c-45e2-ba31-656365fb488c',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 530,
        tagSearchString: 'house,electronic',
      },
      {
        id: '2f97ffaa-7b0c-40ea-b341-498347389038',
        ref: `gs://groov-development-ddc9d.appspot.com/ESB - Make It Thru.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20Make%20It%20Thru.ogg?alt=media&token=5741ee72-d1bf-4efc-a01d-9dbdae0b4579',
        title: `Make It Thru`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH005_A_digital.png?alt=media&token=79a4ccc2-fa1c-45e2-ba31-656365fb488c',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 210,
        tagSearchString: 'house,electronic',
      },
      {
        id: '279b4cce-edf0-431d-b9d2-fa3171eda9f5',
        ref: `gs://groov-development-ddc9d.appspot.com/ESB - Mist Outro.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20Mist%20Outro.ogg?alt=media&token=d2a503ed-717a-4ac3-a431-acda78ca10e1',
        title: `Mist Outro`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/HTH005_A_digital.png?alt=media&token=79a4ccc2-fa1c-45e2-ba31-656365fb488c',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 190,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'b98976fc-6a4f-4efe-81f2-13e1f7ddabc0',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 01 Foreign Parts.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Foreign%20Parts%20-%2001%20Foreign%20Parts.ogg?alt=media&token=a145353e-5ac0-440f-bd4b-0253675e7969',
        title: `Foreign Parts`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20foreign%20parts.jpg?alt=media&token=1d91232b-acc9-4a73-ad96-29f21e1d6e9a',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 330,
        tagSearchString: 'house,electronic',
      },
      {
        id: '2729a114-414b-412b-8b8a-2df40244f8f6',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 02 Sondag.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Foreign%20Parts%20-%2002%20Sondag.ogg?alt=media&token=68551005-a4d4-4764-9f98-4d028e9f9983',
        title: `Sondag`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20foreign%20parts.jpg?alt=media&token=1d91232b-acc9-4a73-ad96-29f21e1d6e9a',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 420,
        tagSearchString: 'house,electronic',
      },
      {
        id: '2adbb9e0-b4bc-48d2-9dff-9fecd2df4775',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 03 Gunvor.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Foreign%20Parts%20-%2003%20Gunvor.ogg?alt=media&token=6a9815fd-ac24-4286-80d7-91e1625d5bb4',
        title: `Gunvor`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20foreign%20parts.jpg?alt=media&token=1d91232b-acc9-4a73-ad96-29f21e1d6e9a',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 630,
        tagSearchString: 'house,electronic',
      },
      {
        id: '6c0cb32e-1495-4d07-ac42-cde370f75d15',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 04 Moodlight.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Foreign%20Parts%20-%2004%20Moodlight.ogg?alt=media&token=75e22a97-c1d9-43ea-9006-987ccb275448',
        title: `Moodlight`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20foreign%20parts.jpg?alt=media&token=1d91232b-acc9-4a73-ad96-29f21e1d6e9a',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 500,
        tagSearchString: 'house,electronic',
      },
      {
        id: '14e987b4-a1c8-4517-9e50-1398c2b52279',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 05 Brodir.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Foreign%20Parts%20-%2005%20Brodir.ogg?alt=media&token=54353753-0d75-45fa-960c-82db1bee7d49',
        title: `Brodir`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20foreign%20parts.jpg?alt=media&token=1d91232b-acc9-4a73-ad96-29f21e1d6e9a',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 320,
        tagSearchString: 'house,electronic',
      },
      {
        id: '95b02d5e-054d-4994-bce7-0979e69e1e6c',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 06 Systir.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Foreign%20Parts%20-%2006%20Systir.ogg?alt=media&token=4717832e-6c90-465d-a577-5f961bef9a35',
        title: `Systir`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20foreign%20parts.jpg?alt=media&token=1d91232b-acc9-4a73-ad96-29f21e1d6e9a',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 230,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'bbda595d-624b-4646-abfe-f45289ef7f80',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 03 Gunvor.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Foreign%20Parts%20-%2003%20Gunvor.ogg?alt=media&token=6a9815fd-ac24-4286-80d7-91e1625d5bb4',
        title: `Gunvor`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20foreign%20parts.jpg?alt=media&token=1d91232b-acc9-4a73-ad96-29f21e1d6e9a',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 440,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'ffb050e7-a023-4c65-9e49-1d5ed9803774',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 07 Modir.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Foreign%20Parts%20-%2007%20Modir.ogg?alt=media&token=ae116131-e2e7-42d2-9cc7-4e50b7e52ac0',
        title: `Modir`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20foreign%20parts.jpg?alt=media&token=1d91232b-acc9-4a73-ad96-29f21e1d6e9a',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 450,
        tagSearchString: 'house,electronic',
      },
      {
        id: '6b4971fd-1751-4878-9be8-a8055f8951c3',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW005 - 01 MT01.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20SW005%20-%2001%20MT01.ogg?alt=media&token=9a19713b-3ce3-49d1-8130-c101cceccb40',
        title: `MT01`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '8c587e75-58c0-45e0-a87e-538fbf69848f',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - sw005.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20sw005.jpg?alt=media&token=040ac5ea-1d47-44bf-aa88-fbbe3fa5bfaf',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 460,
        tagSearchString: 'house,electronic',
      },
      {
        id: '56e3b234-de56-4849-962a-3c21ed195f9d',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW005 - 02 MT02.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20SW005%20-%2002%20MT02.ogg?alt=media&token=4f6fa900-0a78-44d2-86ff-7223c59c508b',
        title: `MT02`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '8c587e75-58c0-45e0-a87e-538fbf69848f',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - sw005.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20sw005.jpg?alt=media&token=040ac5ea-1d47-44bf-aa88-fbbe3fa5bfaf',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 540,
        tagSearchString: 'house,electronic',
      },
      {
        id: '857f44a3-6f40-4c95-9b7a-e9789eb62d47',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW004 - 01 Everybody Looks Good At The Restaurant.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20SW004%20-%2001%20Everybody%20Looks%20Good%20At%20The%20Restaurant.ogg?alt=media&token=2af9ce4f-4967-4f71-b32d-800b8dea9c85',
        title: `Everybody Looks Good At The Restaurant`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20%20-%20sw%20004.jpg?alt=media&token=d3f80a0b-83bb-4827-ac86-f7da6adc9688',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 550,
        tagSearchString: 'house,electronic',
      },
      {
        id: '5b9734f7-08a1-41b0-855a-81900b611421',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW004 - 02 I Will.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20SW004%20-%2002%20I%20Will.ogg?alt=media&token=19db5ac7-eefa-4ea4-80fb-299e29c4a512',
        title: `I Will`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20%20-%20sw%20004.jpg?alt=media&token=d3f80a0b-83bb-4827-ac86-f7da6adc9688',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 340,
        tagSearchString: 'house,electronic',
      },
      {
        id: '4ffc70f7-4aaa-4796-84a8-0b1305278937',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW004 - 03 Lifestyle w- James Booth.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20SW004%20-%2003%20Lifestyle%20w-%20James%20Booth.ogg?alt=media&token=9c7a47b7-b869-41cd-ad27-b8d7afbb6a34',
        title: `Lifestyle w- James Booth`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20%20-%20sw%20004.jpg?alt=media&token=d3f80a0b-83bb-4827-ac86-f7da6adc9688',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 430,
        tagSearchString: 'house,electronic',
      },
      {
        id: '42312cf4-78f5-423f-971b-e792d40e463f',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW004 - 04 I Won't.ogg`,
        url: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20SW004%20-%2004%20I%20Won't.ogg?alt=media&token=0cea14b2-d8aa-48cc-ae8f-dc0ba6d8348d`,
        title: `I Won't`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20%20-%20sw%20004.jpg?alt=media&token=d3f80a0b-83bb-4827-ac86-f7da6adc9688',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 230,
        tagSearchString: 'house,electronic',
      },
      {
        id: '14a16828-d7d5-4933-9b0b-5f878e990150',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Submarine - 01 Swimmers.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Submarine%20-%2001%20Swimmers.ogg?alt=media&token=c8526dc9-ea6a-4c05-85db-d7a25ea9b441',
        title: `Swimmers`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20submarine.jpg?alt=media&token=9e6fd534-7467-4362-bad9-d9015e90c870',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 650,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'e89c53a4-477b-4b86-ac7c-16b6ad292e5c',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Submarine - 02 Mariana Dub.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Submarine%20-%2002%20Mariana%20Dub.ogg?alt=media&token=e0555e01-f0f2-4be3-b65e-8ad2b02aab27',
        title: `Mariana Dub`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20submarine.jpg?alt=media&token=9e6fd534-7467-4362-bad9-d9015e90c870',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 850,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'cec2cc9d-1f93-42c5-b94a-fe1bfc275e5b',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Submarine - 03 Submarine.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Submarine%20-%2003%20Submarine.ogg?alt=media&token=d033a641-518c-4ab5-aa6d-77c31d8639d7',
        title: `Submarine`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20submarine.jpg?alt=media&token=9e6fd534-7467-4362-bad9-d9015e90c870',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 970,
        tagSearchString: 'house,electronic',
      },
      {
        id: '3f454fd6-dde9-4412-b4f8-e932a2dc389a',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Submarine - 04 Submarine (Project Pablo Remix).ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Submarine%20-%2004%20Submarine%20(Project%20Pablo%20Remix).ogg?alt=media&token=cb52ceeb-2733-4cd2-950b-eff6035995c4',
        title: `Submarine (Project Pablo Remix)`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/seb%20wildblood%20-%20submarine.jpg?alt=media&token=9e6fd534-7467-4362-bad9-d9015e90c870',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 580,
        tagSearchString: 'house,electronic',
      },
      {
        id: '04dd515f-eb5e-4d02-9d34-c1d90d56e23e',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 01 I Will.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20U%20-%2001%20I%20Will.ogg?alt=media&token=78863769-8b64-47bd-a6cf-57402308a7bf',
        title: `I Will`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/sebwildblood%20-%20u.jpg?alt=media&token=15bd72c7-c5e6-43a3-afae-42eccecefea0',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 730,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'c192c16c-2b2f-473c-b562-d7f2aa4f4760',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 02 U.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20U%20-%2002%20U.ogg?alt=media&token=b45bd02f-60ce-48a9-8b36-2771ebbb5d53',
        title: `U`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/sebwildblood%20-%20u.jpg?alt=media&token=15bd72c7-c5e6-43a3-afae-42eccecefea0',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 580,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'c5e4e4b4-29d7-4e32-b910-ed3591d27858',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 03 Lifestyle w- James Booth.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20U%20-%2003%20Lifestyle%20w-%20James%20Booth.ogg?alt=media&token=fe1589bb-7fc1-4bc5-9082-a39b2ae02b6c',
        title: `Lifestyle w- James Booth`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/sebwildblood%20-%20u.jpg?alt=media&token=15bd72c7-c5e6-43a3-afae-42eccecefea0',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 540,
        tagSearchString: 'house,electronic',
      },
      {
        id: '105f00e3-23ff-424d-b747-877e8c51bb56',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 04 I Won't.ogg`,
        url: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20U%20-%2004%20I%20Won't.ogg?alt=media&token=f6139329-ea54-4fe3-b855-464346ad09bd`,
        title: `I Won't`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/sebwildblood%20-%20u.jpg?alt=media&token=15bd72c7-c5e6-43a3-afae-42eccecefea0',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 750,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'c14fb209-6f90-4dd3-967a-aeb40944e301',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 05 Bonsai Care.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20U%20-%2005%20Bonsai%20Care.ogg?alt=media&token=b0429972-2173-484f-a978-4e42465c8f00',
        title: `Bonsai Care`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/sebwildblood%20-%20u.jpg?alt=media&token=15bd72c7-c5e6-43a3-afae-42eccecefea0',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 260,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'ddb3c816-3786-4e94-861e-68d0e70ab026',
        ref: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 06 Crazy Eyes, Eric.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20U%20-%2006%20Crazy%20Eyes%2C%20Eric.ogg?alt=media&token=7d26c73f-db1e-451e-9d66-954012705a0b',
        title: `Crazy Eyes, Eric`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/sebwildblood%20-%20u.jpg?alt=media&token=15bd72c7-c5e6-43a3-afae-42eccecefea0',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 570,
        tagSearchString: 'house,electronic',
      },
      {
        id: '70bdaa3d-eb84-4219-ba22-db79d2bbb223',
        ref: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 01 Based Is How You Feel Inside.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2001%20Based%20Is%20How%20You%20Feel%20Inside.ogg?alt=media&token=faca9e7b-d1a4-42df-b0ff-bfb493962915',
        title: `Based Is How You Feel Inside`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%20cover.png?alt=media&token=a3c25e5f-0ce0-4d30-aa3c-b3d542743bb9',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 970,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: 'd9c9b094-8c3c-4c2b-96b7-67c0174618af',
        ref: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 02 Fall In Love.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2002%20Fall%20In%20Love.ogg?alt=media&token=e7a2dd17-8801-4d21-87da-8db37cdabde0',
        title: `Fall In Love`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%20cover.png?alt=media&token=a3c25e5f-0ce0-4d30-aa3c-b3d542743bb9',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 560,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '678706f1-6b87-4602-a231-72c5cac3f355',
        ref: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 03 Improvised Jam.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2003%20Improvised%20Jam.ogg?alt=media&token=a86c0383-871c-4cea-a2d8-862eb44b8946',
        title: `Improvised Jam`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%20cover.png?alt=media&token=a3c25e5f-0ce0-4d30-aa3c-b3d542743bb9',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 870,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: 'abe6ab8e-fca2-4219-989d-e002832af3aa',
        ref: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 04 Mass Appeal - Transmission.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2004%20Mass%20Appeal%20-%20Transmission.ogg?alt=media&token=b2c2d496-1972-420a-9261-877e0b70659a',
        title: `Mass Appeal - Transmission`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%20cover.png?alt=media&token=a3c25e5f-0ce0-4d30-aa3c-b3d542743bb9',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 470,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: 'e738480a-9cdc-4afc-b870-02c72b894b0b',
        ref: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 05 I Got A Bad Feeling About This.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2005%20I%20Got%20A%20Bad%20Feeling%20About%20This.ogg?alt=media&token=d9706191-3357-4e5b-ad05-acad898b8a2e',
        title: `I Got A Bad Feeling About This`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%20cover.png?alt=media&token=a3c25e5f-0ce0-4d30-aa3c-b3d542743bb9',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 760,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '01497634-7270-4157-a530-0104a63dc900',
        ref: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 06 Salmonella.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2006%20Salmonella.ogg?alt=media&token=679468ef-ab2a-4291-98bc-3ca3d3deb235',
        title: `Salmonella`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%20cover.png?alt=media&token=a3c25e5f-0ce0-4d30-aa3c-b3d542743bb9',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 740,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '5f7a00aa-1904-4287-a3f5-f9447b193440',
        ref: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 07 Freedom - Billium Evans (Prod. Seeds of Yaris).ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2007%20Freedom%20-%20Billium%20Evans%20(Prod.%20Seeds%20of%20Yaris).ogg?alt=media&token=3760c1f1-647e-4e24-b770-4bb0cb867564',
        title: `Freedom - Billium Evans (Prod. Seeds of Yaris)`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%20cover.png?alt=media&token=a3c25e5f-0ce0-4d30-aa3c-b3d542743bb9',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 660,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '7ee03d70-294a-4221-8d67-c88062b5cf2f',
        ref: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 08 The World Is Yours - Brooklyn Zoo.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2008%20The%20World%20Is%20Yours%20-%20Brooklyn%20Zoo.ogg?alt=media&token=0664c8fb-e1e0-4f8c-9700-4969d475c9a7',
        title: `The World Is Yours - Brooklyn Zoo`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%20cover.png?alt=media&token=a3c25e5f-0ce0-4d30-aa3c-b3d542743bb9',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 6660,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '9bd56619-12db-4f73-8584-09a7054f46b4',
        ref: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 09 Listeriosis.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2009%20Listeriosis.ogg?alt=media&token=f07ba1f7-45be-4d79-819f-80ec0d1691b2',
        title: `Listeriosis`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%20cover.png?alt=media&token=a3c25e5f-0ce0-4d30-aa3c-b3d542743bb9',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 470,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: 'f9d18dd3-aaba-4d5e-b6df-cd68ee4cc070',
        ref: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 10 Camel.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2010%20Camel.ogg?alt=media&token=98d0d7e3-cc43-4a7f-bd63-4449ede14a67',
        title: `Camel`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%20cover.png?alt=media&token=a3c25e5f-0ce0-4d30-aa3c-b3d542743bb9',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 650,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: 'ee235a85-1c59-4b7b-992a-89f8cfa410ec',
        ref: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 11 Title Theme - Saria's Song - Song Of Storms.ogg`,
        url: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2011%20Title%20Theme%20-%20Saria's%20Song%20-%20Song%20Of%20Storms.ogg?alt=media&token=534a4368-c62c-40b9-a07f-1659cc6a182c`,
        title: `Saria's Song - Song Of Storms`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%20cover.png?alt=media&token=a3c25e5f-0ce0-4d30-aa3c-b3d542743bb9',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 340,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '4fc26f03-aeac-489e-820c-9f39bf3c65af',
        ref: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 12 Outro - Glasper.ogg`,
        url:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2012%20Outro%20-%20Glasper.ogg?alt=media&token=8f6de7f1-a52c-4350-8564-305d6cc07081',
        title: `Outro - Glasper`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%20cover.png?alt=media&token=a3c25e5f-0ce0-4d30-aa3c-b3d542743bb9',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 540,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '62ab3812-297a-4cb0-a056-1880d36f3a77',
        ref: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 01 On My Way.ogg`,
        url: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Bene's%20World%20-%2001%20On%20My%20Way.ogg?alt=media&token=7bab42cd-d7de-4733-b7be-e2f2c6fd33e1`,
        title: `On My Way`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20benes%20world.jpg?alt=media&token=3ea5ae8f-b379-4cbb-8940-1166a63ec5f6',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 650,
        tagSearchString: 'funk,electronic',
      },
      {
        id: 'a7624249-3ceb-4ea6-a183-9ae45a33b7af',
        ref: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 02 Westin.ogg`,
        url: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Bene's%20World%20-%2002%20Westin.ogg?alt=media&token=4b97144f-b5da-4771-add6-1dbe54f474af`,
        title: `Westin`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20benes%20world.jpg?alt=media&token=3ea5ae8f-b379-4cbb-8940-1166a63ec5f6',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 760,
        tagSearchString: 'funk,electronic',
      },
      {
        id: 'b2f1f98e-22e7-4e08-b4bc-fa6f742e1063',
        ref: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 03 Big Nite City (Sax Mix).ogg`,
        url: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Bene's%20World%20-%2003%20Big%20Nite%20City%20(Sax%20Mix).ogg?alt=media&token=cf716f84-dae7-47a2-9755-2520dc72d9b1`,
        title: `Big Nite City (Sax Mix)`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20benes%20world.jpg?alt=media&token=3ea5ae8f-b379-4cbb-8940-1166a63ec5f6',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 450,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '1f4f0aef-3d99-43a1-9e04-93bdc3926f49',
        ref: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 04 Castle 2 Castle.ogg`,
        url: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Bene's%20World%20-%2004%20Castle%202%20Castle.ogg?alt=media&token=e7b58c56-e766-4359-9679-ffc67648f8461`,
        title: `Castle 2 Castle`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20benes%20world.jpg?alt=media&token=3ea5ae8f-b379-4cbb-8940-1166a63ec5f6',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 760,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '556ba9f7-af5a-49e8-a6a5-a35446be59cf',
        ref: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 05 Ocean Park (feat. Just Tony).ogg`,
        url: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Bene's%20World%20-%2005%20Ocean%20Park%20(feat.%20Just%20Tony).ogg?alt=media&token=dd1aa681-93b1-4b44-9661-5ce3fd73e390`,
        title: `Ocean Park (feat. Just Tony)`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20benes%20world.jpg?alt=media&token=3ea5ae8f-b379-4cbb-8940-1166a63ec5f6',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 760,
        tagSearchString: 'funk,electronic',
      },
      {
        id: 'afc72c6f-0e51-404e-9eca-536172390859',
        ref: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 06 Tuff Luv.ogg`,
        url: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Bene's%20World%20-%2006%20Tuff%20Luv.ogg?alt=media&token=3ccd4959-dfed-4e77-b964-bdcebc60359a`,
        title: `Tuff Luv`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20benes%20world.jpg?alt=media&token=3ea5ae8f-b379-4cbb-8940-1166a63ec5f6',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 880,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '6f45eb26-c731-4686-8046-4fbc2b7960cb',
        ref: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 07 Afterglo.ogg`,
        url: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Bene's%20World%20-%2007%20Afterglo.ogg?alt=media&token=50929e6b-dff8-41d0-b71c-6752e6fc7ca7`,
        title: `Afterglo`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20benes%20world.jpg?alt=media&token=3ea5ae8f-b379-4cbb-8940-1166a63ec5f6',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 980,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '14a9b933-11dc-43a0-b8ee-b92e2b5e015c',
        ref: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 08 Sonatine.ogg`,
        url: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Bene's%20World%20-%2008%20Sonatine.ogg?alt=media&token=f13a2208-e8d2-4cb1-85af-f4faf56ff84a`,
        title: `Sonantine`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20benes%20world.jpg?alt=media&token=3ea5ae8f-b379-4cbb-8940-1166a63ec5f6',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 870,
        tagSearchString: 'funk,electronic',
      },
      {
        id: 'cce7d3b8-f1c2-4f45-8170-b7b8e51ecd6a',
        ref: `gs://groov-development-ddc9d.appspot.com/Benedek - Coolin' - EP - 01 Coolin'.ogg`,
        url: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Coolin'%20-%20EP%20-%2001%20Coolin'.ogg?alt=media&token=dd5be299-9e60-4bd9-a883-f4de20730262`,
        title: `Coolin'`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/benedek - coolin.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 730,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '4199509d-56aa-4cfd-a3de-760ed35f068e',
        ref: `gs://groov-development-ddc9d.appspot.com/Benedek - Coolin' - EP - 02 Ryukyu.ogg`,
        url: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Coolin'%20-%20EP%20-%2002%20Ryukyu.ogg?alt=media&token=8bea84cc-6e51-4525-ba98-f4d50955c17b`,
        title: `Ryukyu`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/benedek - coolin.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 480,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '53ad1742-514a-4baf-9238-41e18f7d6c0d',
        ref: `gs://groov-development-ddc9d.appspot.com/Benedek - Coolin' - EP - 03 Voices.ogg`,
        url: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Coolin'%20-%20EP%20-%2003%20Voices.ogg?alt=media&token=f18a442f-39eb-4852-a795-65759e2b4bd5`,
        title: `Voices`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/benedek - coolin.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 760,
        tagSearchString: 'funk,electronic',
      },
      {
        id: 'd4d1ff4e-5424-4ead-b6ed-eddcba9c3239',
        ref: `gs://groov-development-ddc9d.appspot.com/Benedek - Coolin' - EP - 04 Angeles Vista.ogg`,
        url: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Coolin'%20-%20EP%20-%2004%20Angeles%20Vista.ogg?alt=media&token=f9b4390f-f9f1-4d6f-9bcc-7d0657890d5e`,
        title: `Angeles Vista`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        releaseDate: '2014-05-20T07:00:00+00:00',
        imageRef:
          'gs://groov-development-ddc9d.appspot.com/benedek - coolin.jpg',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/benedek%20-%20coolin.jpg?alt=media&token=fe935ac6-71bf-44db-a4e1-5283914a5fdd',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 7770,
        tagSearchString: 'funk,electronic',
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('song', null, {});
  },
};
