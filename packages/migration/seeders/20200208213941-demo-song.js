'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('song', [
      {
        id: 'ef8bfa7c-d2b4-49b5-9da9-17978be4e9a4',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/albums/6960fd68-732e-4c3c-8995-8d72989f53db/András - B1. Gold Coast (House Mix).ogg',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/albums/6960fd68-732e-4c3c-8995-8d72989f53db/András - B1. Gold Coast (House Mix).ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/albums/6960fd68-732e-4c3c-8995-8d72989f53db/András - B1. Gold Coast (House Mix).ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Falbums%2F6960fd68-732e-4c3c-8995-8d72989f53db%2FAndra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=d266ccc5-c6fb-4dc1-997d-7af5d848b4c0',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Falbums%2F6960fd68-732e-4c3c-8995-8d72989f53db%2FAndra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=d266ccc5-c6fb-4dc1-997d-7af5d848b4c0',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Falbums%2F6960fd68-732e-4c3c-8995-8d72989f53db%2FAndra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=d266ccc5-c6fb-4dc1-997d-7af5d848b4c0',
        title: 'Gold Coast (House Mix)',
        artistId: '30f65df5-98bb-48cd-83e5-867f707f941d',
        albumId: '6960fd68-732e-4c3c-8995-8d72989f53db',
        labelId: '85248eee-5f5b-49f8-a9d9-e08418b829b8',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 20,
        tagSearchString: 'house,electronic',
      },
      {
        id: '3c3d5f29-d675-41b3-8ed6-c2c781c3a606',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/B2_Exit_Point_Mastered_16.ogg?alt=media&token=5c9b1273-03d4-4e0c-bf91-e1f6629aa9d4',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: 'Exit Point',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 10,
        tagSearchString: 'house,electronic',
      },
      {
        id: '0eaaa270-9373-458b-a6d6-7fd013931245',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - A1_C_Quenz_Mastered_16.ogg',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - A1_C_Quenz_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - A1_C_Quenz_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A1_C_Quenz_Mastered_16.ogg?alt=media&token=35cb9f2e-7b2d-4c71-a773-71c4caed5517',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A1_C_Quenz_Mastered_16.ogg?alt=media&token=35cb9f2e-7b2d-4c71-a773-71c4caed5517',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A1_C_Quenz_Mastered_16.ogg?alt=media&token=35cb9f2e-7b2d-4c71-a773-71c4caed5517',
        title: 'C Quenz',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 220,
        tagSearchString: 'house,electronic',
      },
      {
        id: '20872940-4952-4d3e-84b7-d68529af7a91',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - A2_Cruising_Speed_Mastered_16.ogg',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - A2_Cruising_Speed_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - A2_Cruising_Speed_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A2_Cruising_Speed_Mastered_16.ogg?alt=media&token=34fa9009-4c53-4e77-99b9-b96a2ab19d0f',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A2_Cruising_Speed_Mastered_16.ogg?alt=media&token=34fa9009-4c53-4e77-99b9-b96a2ab19d0f',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A2_Cruising_Speed_Mastered_16.ogg?alt=media&token=34fa9009-4c53-4e77-99b9-b96a2ab19d0f',
        title: 'Cruising Speed',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 310,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'fc0be79a-274a-4bf8-98a5-b580b7a1bac5',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - B1_Rogue_Mastered_16.ogg',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - B1_Rogue_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - B1_Rogue_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20B1_Rogue_Mastered_16.ogg?alt=media&token=1889f54d-1ac0-4090-a138-55c98beff347',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20B1_Rogue_Mastered_16.ogg?alt=media&token=1889f54d-1ac0-4090-a138-55c98beff347',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20B1_Rogue_Mastered_16.ogg?alt=media&token=1889f54d-1ac0-4090-a138-55c98beff347',
        title: 'Rogue',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 120,
        tagSearchString: 'house,electronic',
      },
      {
        id: '0694f13e-f8ca-406d-8b6b-fd081e1c930a',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Pineapple Island.ogg',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Pineapple Island.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Pineapple Island.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Pineapple%20Island.ogg?alt=media&token=b2ffd0ed-e427-4731-bb8b-fb2411ad918c',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Pineapple%20Island.ogg?alt=media&token=b2ffd0ed-e427-4731-bb8b-fb2411ad918c',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Pineapple%20Island.ogg?alt=media&token=b2ffd0ed-e427-4731-bb8b-fb2411ad918c',
        title: 'Pineapple Island',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: 'f2028bf3-ed1c-4057-b430-c3374116a959',
        labelId: 'b587201a-ccd8-4ac7-a9c7-fba9c369e7da',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 220,
        tagSearchString: 'house,electronic',
      },
      {
        id: '995d0081-63ee-4fc2-8a61-fc67928c4a12',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Space Strut.ogg',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Space Strut.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Space Strut.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Space%20Strut.ogg?alt=media&token=dfb537b5-ebe1-472c-b475-ebf56851ce64',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Space%20Strut.ogg?alt=media&token=dfb537b5-ebe1-472c-b475-ebf56851ce64',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Space%20Strut.ogg?alt=media&token=dfb537b5-ebe1-472c-b475-ebf56851ce64',
        title: 'Space Strut',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: 'f2028bf3-ed1c-4057-b430-c3374116a959',
        labelId: 'b587201a-ccd8-4ac7-a9c7-fba9c369e7da',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 240,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'b5ca4741-9d14-4513-8e10-f163f9dd5623',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Why You Gotta_.ogg',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Why You Gotta_.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Why You Gotta_.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Why%20You%20Gotta_.ogg?alt=media&token=de37929c-b67f-4cf2-8184-a26985f6f0b6',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Why%20You%20Gotta_.ogg?alt=media&token=de37929c-b67f-4cf2-8184-a26985f6f0b6',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Why%20You%20Gotta_.ogg?alt=media&token=de37929c-b67f-4cf2-8184-a26985f6f0b6',
        title: 'Why You Gotta',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: 'f2028bf3-ed1c-4057-b430-c3374116a959',
        labelId: 'b587201a-ccd8-4ac7-a9c7-fba9c369e7da',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 0,
        tagSearchString: 'house,electronic',
      },
      {
        id: '6cea15ba-0be2-410a-8bdc-acd101685a80',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue.ogg',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue.ogg?alt=media&token=b6fa9418-2352-4a74-b95a-244734c89315',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue.ogg?alt=media&token=b6fa9418-2352-4a74-b95a-244734c89315',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue.ogg?alt=media&token=b6fa9418-2352-4a74-b95a-244734c89315',
        title: 'On Cue',
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 260,
        tagSearchString: 'house,electronic',
      },
      {
        id: '1d7f1de6-20ca-4656-ac43-ec9bde834510',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue (Vakula Remix).ogg',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue (Vakula Remix).ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue (Vakula Remix).ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue%20(Vakula%20Remix).ogg?alt=media&token=add75dca-2fb4-4529-926d-80dcd9138d6a',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue%20(Vakula%20Remix).ogg?alt=media&token=add75dca-2fb4-4529-926d-80dcd9138d6a',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue%20(Vakula%20Remix).ogg?alt=media&token=add75dca-2fb4-4529-926d-80dcd9138d6a',
        title: 'On Cue (Vakula Remix)',
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 100,
        tagSearchString: 'house,electronic',
      },
      {
        id: '56c8a3cc-53af-4de3-ac91-c16a5c35cd0f',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - time won't forget.ogg`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - time won't forget.ogg`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - time won't forget.ogg`,
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20time%20won't%20forget.ogg?alt=media&token=045a04ca-1af5-4bd9-86ff-bb0fdb99b083`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20time%20won't%20forget.ogg?alt=media&token=045a04ca-1af5-4bd9-86ff-bb0fdb99b083`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20time%20won't%20forget.ogg?alt=media&token=045a04ca-1af5-4bd9-86ff-bb0fdb99b083`,
        title: `Time Won't Forget`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 110,
        tagSearchString: 'house,electronic',
      },
      {
        id: '1219f0dc-b472-4832-9bd9-23e101b0596d',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - terrium.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - terrium.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - terrium.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20terrium.ogg?alt=media&token=3c3201d0-04a4-4fea-9efd-0bbc54049f6c',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20terrium.ogg?alt=media&token=3c3201d0-04a4-4fea-9efd-0bbc54049f6c',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20terrium.ogg?alt=media&token=3c3201d0-04a4-4fea-9efd-0bbc54049f6c',
        title: `Terrium`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 130,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'c35b0e2e-99b6-4a08-aae2-a312e06b86ca',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/ESB - Q1.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20Q1.ogg?alt=media&token=e1e3bee4-6f7a-45f0-bc4c-19d37ff4a6e9',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Q1`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '911684b3-c073-4b33-ae2a-014346df4bc8',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 143,
        tagSearchString: 'house,electronic',
      },
      {
        id: '0de438c0-a710-4fb2-ba8e-7aaf55a4e2e4',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/ESB - Spaneaur.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20Spaneaur.ogg?alt=media&token=2e2c0fb7-5f59-4657-822e-6c00ad0480f0',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Spaneaur`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '911684b3-c073-4b33-ae2a-014346df4bc8',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 154,
        tagSearchString: 'house,electronic',
      },
      {
        id: '50ef4fe1-0e5b-4aab-84e8-1ca5e2507071',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/ESB - Whisper Theme.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20Whisper%20Theme.ogg?alt=media&token=38a20a96-a7cb-497d-9418-7269eca7ef2b',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Whisper Theme`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '911684b3-c073-4b33-ae2a-014346df4bc8',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 573,
        tagSearchString: 'house,electronic',
      },
      {
        id: '41bdaaf2-1b2d-4b4a-b4bd-8a2a3914f505',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/ESB - 20% Deeper.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%2020%25%20Deeper.ogg?alt=media&token=aff2b583-7480-47fc-b4b2-0ea5c97fbded',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `20% Deeper`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '911684b3-c073-4b33-ae2a-014346df4bc8',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 630,
        tagSearchString: 'house,electronic',
      },
      {
        id: '8459e7b7-93aa-45ea-a078-4765208af79a',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/ESB - Fixation.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20Fixation.ogg?alt=media&token=a5f49da0-c10a-48e7-ac39-d316e6c5a78f',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Fixation`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 240,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'e9ebfe67-5913-4a41-86d2-dd43ab55e353',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/ESB - GLWL.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20GLWL.ogg?alt=media&token=89540520-cb5f-4981-b7dd-94f174d5e804',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `GLWL`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 530,
        tagSearchString: 'house,electronic',
      },
      {
        id: '2f97ffaa-7b0c-40ea-b341-498347389038',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/ESB - Make It Thru.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20Make%20It%20Thru.ogg?alt=media&token=5741ee72-d1bf-4efc-a01d-9dbdae0b4579',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Make It Thru`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 210,
        tagSearchString: 'house,electronic',
      },
      {
        id: '279b4cce-edf0-431d-b9d2-fa3171eda9f5',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/ESB - Mist Outro.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/ESB%20-%20Mist%20Outro.ogg?alt=media&token=d2a503ed-717a-4ac3-a431-acda78ca10e1',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Mist Outro`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 190,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'b98976fc-6a4f-4efe-81f2-13e1f7ddabc0',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 01 Foreign Parts.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Foreign%20Parts%20-%2001%20Foreign%20Parts.ogg?alt=media&token=a145353e-5ac0-440f-bd4b-0253675e7969',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Foreign Parts`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 330,
        tagSearchString: 'house,electronic',
      },
      {
        id: '2729a114-414b-412b-8b8a-2df40244f8f6',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 02 Sondag.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Foreign%20Parts%20-%2002%20Sondag.ogg?alt=media&token=68551005-a4d4-4764-9f98-4d028e9f9983',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Sondag`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 420,
        tagSearchString: 'house,electronic',
      },
      {
        id: '2adbb9e0-b4bc-48d2-9dff-9fecd2df4775',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 03 Gunvor.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Foreign%20Parts%20-%2003%20Gunvor.ogg?alt=media&token=6a9815fd-ac24-4286-80d7-91e1625d5bb4',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Gunvor`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 630,
        tagSearchString: 'house,electronic',
      },
      {
        id: '6c0cb32e-1495-4d07-ac42-cde370f75d15',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 04 Moodlight.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Foreign%20Parts%20-%2004%20Moodlight.ogg?alt=media&token=75e22a97-c1d9-43ea-9006-987ccb275448',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Moodlight`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 500,
        tagSearchString: 'house,electronic',
      },
      {
        id: '14e987b4-a1c8-4517-9e50-1398c2b52279',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 05 Brodir.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Foreign%20Parts%20-%2005%20Brodir.ogg?alt=media&token=54353753-0d75-45fa-960c-82db1bee7d49',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Brodir`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 320,
        tagSearchString: 'house,electronic',
      },
      {
        id: '95b02d5e-054d-4994-bce7-0979e69e1e6c',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 06 Systir.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Foreign%20Parts%20-%2006%20Systir.ogg?alt=media&token=4717832e-6c90-465d-a577-5f961bef9a35',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Systir`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 230,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'bbda595d-624b-4646-abfe-f45289ef7f80',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 03 Gunvor.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Foreign%20Parts%20-%2003%20Gunvor.ogg?alt=media&token=6a9815fd-ac24-4286-80d7-91e1625d5bb4',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Gunvor`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 440,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'ffb050e7-a023-4c65-9e49-1d5ed9803774',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 07 Modir.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Foreign%20Parts%20-%2007%20Modir.ogg?alt=media&token=ae116131-e2e7-42d2-9cc7-4e50b7e52ac0',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Modir`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 450,
        tagSearchString: 'house,electronic',
      },
      {
        id: '6b4971fd-1751-4878-9be8-a8055f8951c3',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW005 - 01 MT01.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20SW005%20-%2001%20MT01.ogg?alt=media&token=9a19713b-3ce3-49d1-8130-c101cceccb40',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `MT01`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '8c587e75-58c0-45e0-a87e-538fbf69848f',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 460,
        tagSearchString: 'house,electronic',
      },
      {
        id: '56e3b234-de56-4849-962a-3c21ed195f9d',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW005 - 02 MT02.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20SW005%20-%2002%20MT02.ogg?alt=media&token=4f6fa900-0a78-44d2-86ff-7223c59c508b',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `MT02`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '8c587e75-58c0-45e0-a87e-538fbf69848f',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 540,
        tagSearchString: 'house,electronic',
      },
      {
        id: '857f44a3-6f40-4c95-9b7a-e9789eb62d47',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW004 - 01 Everybody Looks Good At The Restaurant.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20SW004%20-%2001%20Everybody%20Looks%20Good%20At%20The%20Restaurant.ogg?alt=media&token=2af9ce4f-4967-4f71-b32d-800b8dea9c85',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Everybody Looks Good At The Restaurant`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 550,
        tagSearchString: 'house,electronic',
      },
      {
        id: '5b9734f7-08a1-41b0-855a-81900b611421',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW004 - 02 I Will.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20SW004%20-%2002%20I%20Will.ogg?alt=media&token=19db5ac7-eefa-4ea4-80fb-299e29c4a512',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `I Will`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 340,
        tagSearchString: 'house,electronic',
      },
      {
        id: '4ffc70f7-4aaa-4796-84a8-0b1305278937',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW004 - 03 Lifestyle w- James Booth.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20SW004%20-%2003%20Lifestyle%20w-%20James%20Booth.ogg?alt=media&token=9c7a47b7-b869-41cd-ad27-b8d7afbb6a34',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Lifestyle w- James Booth`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 430,
        tagSearchString: 'house,electronic',
      },
      {
        id: '42312cf4-78f5-423f-971b-e792d40e463f',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW004 - 04 I Won't.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20SW004%20-%2004%20I%20Won't.ogg?alt=media&token=0cea14b2-d8aa-48cc-ae8f-dc0ba6d8348d`,
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `I Won't`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 230,
        tagSearchString: 'house,electronic',
      },
      {
        id: '14a16828-d7d5-4933-9b0b-5f878e990150',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Submarine - 01 Swimmers.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Submarine%20-%2001%20Swimmers.ogg?alt=media&token=c8526dc9-ea6a-4c05-85db-d7a25ea9b441',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Swimmers`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 650,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'e89c53a4-477b-4b86-ac7c-16b6ad292e5c',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Submarine - 02 Mariana Dub.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Submarine%20-%2002%20Mariana%20Dub.ogg?alt=media&token=e0555e01-f0f2-4be3-b65e-8ad2b02aab27',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Mariana Dub`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 850,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'cec2cc9d-1f93-42c5-b94a-fe1bfc275e5b',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Submarine - 03 Submarine.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Submarine%20-%2003%20Submarine.ogg?alt=media&token=d033a641-518c-4ab5-aa6d-77c31d8639d7',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Submarine`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 970,
        tagSearchString: 'house,electronic',
      },
      {
        id: '3f454fd6-dde9-4412-b4f8-e932a2dc389a',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Submarine - 04 Submarine (Project Pablo Remix).ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20Submarine%20-%2004%20Submarine%20(Project%20Pablo%20Remix).ogg?alt=media&token=cb52ceeb-2733-4cd2-950b-eff6035995c4',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Submarine (Project Pablo Remix)`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 580,
        tagSearchString: 'house,electronic',
      },
      {
        id: '04dd515f-eb5e-4d02-9d34-c1d90d56e23e',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 01 I Will.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20U%20-%2001%20I%20Will.ogg?alt=media&token=78863769-8b64-47bd-a6cf-57402308a7bf',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `I Will`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 730,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'c192c16c-2b2f-473c-b562-d7f2aa4f4760',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 02 U.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20U%20-%2002%20U.ogg?alt=media&token=b45bd02f-60ce-48a9-8b36-2771ebbb5d53',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `U`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 580,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'c5e4e4b4-29d7-4e32-b910-ed3591d27858',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 03 Lifestyle w- James Booth.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20U%20-%2003%20Lifestyle%20w-%20James%20Booth.ogg?alt=media&token=fe1589bb-7fc1-4bc5-9082-a39b2ae02b6c',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Lifestyle w- James Booth`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 540,
        tagSearchString: 'house,electronic',
      },
      {
        id: '105f00e3-23ff-424d-b747-877e8c51bb56',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 04 I Won't.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20U%20-%2004%20I%20Won't.ogg?alt=media&token=f6139329-ea54-4fe3-b855-464346ad09bd`,
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `I Won't`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 750,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'c14fb209-6f90-4dd3-967a-aeb40944e301',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 05 Bonsai Care.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20U%20-%2005%20Bonsai%20Care.ogg?alt=media&token=b0429972-2173-484f-a978-4e42465c8f00',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Bonsai Care`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 260,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'ddb3c816-3786-4e94-861e-68d0e70ab026',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 06 Crazy Eyes, Eric.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Seb%20Wildblood%20-%20U%20-%2006%20Crazy%20Eyes%2C%20Eric.ogg?alt=media&token=7d26c73f-db1e-451e-9d66-954012705a0b',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Crazy Eyes, Eric`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 570,
        tagSearchString: 'house,electronic',
      },
      {
        id: '70bdaa3d-eb84-4219-ba22-db79d2bbb223',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 01 Based Is How You Feel Inside.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2001%20Based%20Is%20How%20You%20Feel%20Inside.ogg?alt=media&token=faca9e7b-d1a4-42df-b0ff-bfb493962915',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Based Is How You Feel Inside`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 970,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: 'd9c9b094-8c3c-4c2b-96b7-67c0174618af',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 02 Fall In Love.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2002%20Fall%20In%20Love.ogg?alt=media&token=e7a2dd17-8801-4d21-87da-8db37cdabde0',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Fall In Love`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 560,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '678706f1-6b87-4602-a231-72c5cac3f355',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 03 Improvised Jam.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2003%20Improvised%20Jam.ogg?alt=media&token=a86c0383-871c-4cea-a2d8-862eb44b8946',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Improvised Jam`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 870,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: 'abe6ab8e-fca2-4219-989d-e002832af3aa',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 04 Mass Appeal - Transmission.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2004%20Mass%20Appeal%20-%20Transmission.ogg?alt=media&token=b2c2d496-1972-420a-9261-877e0b70659a',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Mass Appeal - Transmission`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 470,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: 'e738480a-9cdc-4afc-b870-02c72b894b0b',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 05 I Got A Bad Feeling About This.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2005%20I%20Got%20A%20Bad%20Feeling%20About%20This.ogg?alt=media&token=d9706191-3357-4e5b-ad05-acad898b8a2e',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `I Got A Bad Feeling About This`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 760,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '01497634-7270-4157-a530-0104a63dc900',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 06 Salmonella.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2006%20Salmonella.ogg?alt=media&token=679468ef-ab2a-4291-98bc-3ca3d3deb235',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Salmonella`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 740,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '5f7a00aa-1904-4287-a3f5-f9447b193440',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 07 Freedom - Billium Evans (Prod. Seeds of Yaris).ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2007%20Freedom%20-%20Billium%20Evans%20(Prod.%20Seeds%20of%20Yaris).ogg?alt=media&token=3760c1f1-647e-4e24-b770-4bb0cb867564',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Freedom - Billium Evans (Prod. Seeds of Yaris)`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 660,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '7ee03d70-294a-4221-8d67-c88062b5cf2f',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 08 The World Is Yours - Brooklyn Zoo.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2008%20The%20World%20Is%20Yours%20-%20Brooklyn%20Zoo.ogg?alt=media&token=0664c8fb-e1e0-4f8c-9700-4969d475c9a7',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `The World Is Yours - Brooklyn Zoo`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 6660,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '9bd56619-12db-4f73-8584-09a7054f46b4',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 09 Listeriosis.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2009%20Listeriosis.ogg?alt=media&token=f07ba1f7-45be-4d79-819f-80ec0d1691b2',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Listeriosis`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 470,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: 'f9d18dd3-aaba-4d5e-b6df-cd68ee4cc070',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 10 Camel.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2010%20Camel.ogg?alt=media&token=98d0d7e3-cc43-4a7f-bd63-4449ede14a67',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Camel`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 650,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: 'ee235a85-1c59-4b7b-992a-89f8cfa410ec',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 11 Title Theme - Saria's Song - Song Of Storms.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2011%20Title%20Theme%20-%20Saria's%20Song%20-%20Song%20Of%20Storms.ogg?alt=media&token=534a4368-c62c-40b9-a07f-1659cc6a182c`,
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Saria's Song - Song Of Storms`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 340,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '4fc26f03-aeac-489e-820c-9f39bf3c65af',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 12 Outro - Glasper.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/BADBADNOTGOOD%20-%20BBNG%20-%2012%20Outro%20-%20Glasper.ogg?alt=media&token=8f6de7f1-a52c-4350-8564-305d6cc07081',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Outro - Glasper`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 540,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '62ab3812-297a-4cb0-a056-1880d36f3a77',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 01 On My Way.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Bene's%20World%20-%2001%20On%20My%20Way.ogg?alt=media&token=7bab42cd-d7de-4733-b7be-e2f2c6fd33e1`,
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `On My Way`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 650,
        tagSearchString: 'funk,electronic',
      },
      {
        id: 'a7624249-3ceb-4ea6-a183-9ae45a33b7af',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 02 Westin.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Bene's%20World%20-%2002%20Westin.ogg?alt=media&token=4b97144f-b5da-4771-add6-1dbe54f474af`,
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Westin`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 760,
        tagSearchString: 'funk,electronic',
      },
      {
        id: 'b2f1f98e-22e7-4e08-b4bc-fa6f742e1063',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 03 Big Nite City (Sax Mix).ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Bene's%20World%20-%2003%20Big%20Nite%20City%20(Sax%20Mix).ogg?alt=media&token=cf716f84-dae7-47a2-9755-2520dc72d9b1`,
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Big Nite City (Sax Mix)`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 450,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '1f4f0aef-3d99-43a1-9e04-93bdc3926f49',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 04 Castle 2 Castle.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Bene's%20World%20-%2004%20Castle%202%20Castle.ogg?alt=media&token=e7b58c56-e766-4359-9679-ffc67648f8461`,
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Castle 2 Castle`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 760,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '556ba9f7-af5a-49e8-a6a5-a35446be59cf',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 05 Ocean Park (feat. Just Tony).ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Bene's%20World%20-%2005%20Ocean%20Park%20(feat.%20Just%20Tony).ogg?alt=media&token=dd1aa681-93b1-4b44-9661-5ce3fd73e390`,
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Ocean Park (feat. Just Tony)`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 760,
        tagSearchString: 'funk,electronic',
      },
      {
        id: 'afc72c6f-0e51-404e-9eca-536172390859',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 06 Tuff Luv.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Bene's%20World%20-%2006%20Tuff%20Luv.ogg?alt=media&token=3ccd4959-dfed-4e77-b964-bdcebc60359a`,
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Tuff Luv`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 880,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '6f45eb26-c731-4686-8046-4fbc2b7960cb',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 07 Afterglo.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Bene's%20World%20-%2007%20Afterglo.ogg?alt=media&token=50929e6b-dff8-41d0-b71c-6752e6fc7ca7`,
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Afterglo`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 980,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '14a9b933-11dc-43a0-b8ee-b92e2b5e015c',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 08 Sonatine.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Bene's%20World%20-%2008%20Sonatine.ogg?alt=media&token=f13a2208-e8d2-4cb1-85af-f4faf56ff84a`,
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Sonantine`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 870,
        tagSearchString: 'funk,electronic',
      },
      {
        id: 'cce7d3b8-f1c2-4f45-8170-b7b8e51ecd6a',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Benedek - Coolin' - EP - 01 Coolin'.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Coolin'%20-%20EP%20-%2001%20Coolin'.ogg?alt=media&token=dd5be299-9e60-4bd9-a883-f4de20730262`,
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Coolin'`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 730,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '4199509d-56aa-4cfd-a3de-760ed35f068e',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Benedek - Coolin' - EP - 02 Ryukyu.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Coolin'%20-%20EP%20-%2002%20Ryukyu.ogg?alt=media&token=8bea84cc-6e51-4525-ba98-f4d50955c17b`,
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Ryukyu`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 480,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '53ad1742-514a-4baf-9238-41e18f7d6c0d',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Benedek - Coolin' - EP - 03 Voices.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Coolin'%20-%20EP%20-%2003%20Voices.ogg?alt=media&token=f18a442f-39eb-4852-a795-65759e2b4bd5`,
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Voices`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        playCount: 760,
        tagSearchString: 'funk,electronic',
      },
      {
        id: 'd4d1ff4e-5424-4ead-b6ed-eddcba9c3239',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/Benedek - Coolin' - EP - 04 Angeles Vista.ogg`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Benedek%20-%20Coolin'%20-%20EP%20-%2004%20Angeles%20Vista.ogg?alt=media&token=f9b4390f-f9f1-4d6f-9bcc-7d0657890d5e`,
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/Andra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=1ad76e69-e5a2-47bd-be2b-86048dd987f4',
        title: `Angeles Vista`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
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
