'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('song', [
      {
        id: 'ef8bfa7c-d2b4-49b5-9da9-17978be4e9a4',
        // storagePathHigh:
        //   'gs://groov-development-ddc9d.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/albums/6960fd68-732e-4c3c-8995-8d72989f53db/András - B1. Gold Coast (House Mix).ogg',
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/albums/6960fd68-732e-4c3c-8995-8d72989f53db/András - B1. Gold Coast (House Mix).ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/albums/6960fd68-732e-4c3c-8995-8d72989f53db/András - B1. Gold Coast (House Mix).ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Falbums%2F6960fd68-732e-4c3c-8995-8d72989f53db%2FAndra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=d266ccc5-c6fb-4dc1-997d-7af5d848b4c0',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Falbums%2F6960fd68-732e-4c3c-8995-8d72989f53db%2FAndra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=d266ccc5-c6fb-4dc1-997d-7af5d848b4c0',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Falbums%2F6960fd68-732e-4c3c-8995-8d72989f53db%2FAndra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).ogg?alt=media&token=d266ccc5-c6fb-4dc1-997d-7af5d848b4c0',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/albums/6960fd68-732e-4c3c-8995-8d72989f53db/András - B1. Gold Coast (House Mix).mp3',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/albums/6960fd68-732e-4c3c-8995-8d72989f53db/András - B1. Gold Coast (House Mix).mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/30f65df5-98bb-48cd-83e5-867f707f941d/albums/6960fd68-732e-4c3c-8995-8d72989f53db/András - B1. Gold Coast (House Mix).mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Falbums%2F6960fd68-732e-4c3c-8995-8d72989f53db%2FAndra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).mp3?alt=media&token=39c4fbe2-6190-4f24-bc5a-f93638380adc',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Falbums%2F6960fd68-732e-4c3c-8995-8d72989f53db%2FAndra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).mp3?alt=media&token=39c4fbe2-6190-4f24-bc5a-f93638380adc',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/30f65df5-98bb-48cd-83e5-867f707f941d%2Falbums%2F6960fd68-732e-4c3c-8995-8d72989f53db%2FAndra%CC%81s%20-%20B1.%20Gold%20Coast%20(House%20Mix).mp3?alt=media&token=39c4fbe2-6190-4f24-bc5a-f93638380adc',
        title: 'Gold Coast (House Mix)',
        artistId: '30f65df5-98bb-48cd-83e5-867f707f941d',
        albumId: '6960fd68-732e-4c3c-8995-8d72989f53db',
        labelId: '85248eee-5f5b-49f8-a9d9-e08418b829b8',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 20,
        tagSearchString: 'house,electronic',
      },
      {
        id: '3c3d5f29-d675-41b3-8ed6-c2c781c3a606',
        // storagePathHigh:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/B2_Exit_Point_Mastered_16.ogg',
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/B2_Exit_Point_Mastered_16.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/B2_Exit_Point_Mastered_16.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FB2_Exit_Point_Mastered_16.ogg?alt=media&token=f28993d5-d9fa-4dc1-95c9-8a7b0ba4a5f6',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FB2_Exit_Point_Mastered_16.ogg?alt=media&token=f28993d5-d9fa-4dc1-95c9-8a7b0ba4a5f6',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FB2_Exit_Point_Mastered_16.ogg?alt=media&token=f28993d5-d9fa-4dc1-95c9-8a7b0ba4a5f6',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/B2_Exit_Point_Mastered_16.mp3',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/B2_Exit_Point_Mastered_16.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/B2_Exit_Point_Mastered_16.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FB2_Exit_Point_Mastered_16.mp3?alt=media&token=179b3ee3-11c2-4c25-9213-797d8b30922f',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FB2_Exit_Point_Mastered_16.mp3?alt=media&token=179b3ee3-11c2-4c25-9213-797d8b30922f',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FB2_Exit_Point_Mastered_16.mp3?alt=media&token=179b3ee3-11c2-4c25-9213-797d8b30922f',
        title: 'Exit Point',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 10,
        tagSearchString: 'house,electronic',
      },
      {
        id: '0eaaa270-9373-458b-a6d6-7fd013931245',
        // storagePathHigh:
        //   'gs://groov-development-ddc9d.appspot.com/Raf Reza - A1_C_Quenz_Mastered_16.ogg',
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/Raf Reza - A1_C_Quenz_Mastered_16.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/Raf Reza - A1_C_Quenz_Mastered_16.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A1_C_Quenz_Mastered_16.ogg?alt=media&token=35cb9f2e-7b2d-4c71-a773-71c4caed5517',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A1_C_Quenz_Mastered_16.ogg?alt=media&token=35cb9f2e-7b2d-4c71-a773-71c4caed5517',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A1_C_Quenz_Mastered_16.ogg?alt=media&token=35cb9f2e-7b2d-4c71-a773-71c4caed5517',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - A1_C_Quenz_Mastered_16.mp3',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - A1_C_Quenz_Mastered_16.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - A1_C_Quenz_Mastered_16.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A1_C_Quenz_Mastered_16.mp3?alt=media&token=d10aa728-aec9-4c16-b92c-0d3431ce1421',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A1_C_Quenz_Mastered_16.mp3?alt=media&token=d10aa728-aec9-4c16-b92c-0d3431ce1421',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A1_C_Quenz_Mastered_16.mp3?alt=media&token=d10aa728-aec9-4c16-b92c-0d3431ce1421',
        title: 'C Quenz',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 220,
        tagSearchString: 'house,electronic',
      },
      {
        id: '20872940-4952-4d3e-84b7-d68529af7a91',
        // storagePathHigh:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - A2_Cruising_Speed_Mastered_16.ogg',
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - A2_Cruising_Speed_Mastered_16.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - A2_Cruising_Speed_Mastered_16.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A2_Cruising_Speed_Mastered_16.ogg?alt=media&token=34fa9009-4c53-4e77-99b9-b96a2ab19d0f',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A2_Cruising_Speed_Mastered_16.ogg?alt=media&token=34fa9009-4c53-4e77-99b9-b96a2ab19d0f',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A2_Cruising_Speed_Mastered_16.ogg?alt=media&token=34fa9009-4c53-4e77-99b9-b96a2ab19d0f',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - A2_Cruising_Speed_Mastered_16.mp3',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - A2_Cruising_Speed_Mastered_16.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - A2_Cruising_Speed_Mastered_16.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A2_Cruising_Speed_Mastered_16.mp3?alt=media&token=8d4b4dc2-cffb-466e-8df3-57aace7ce550',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A2_Cruising_Speed_Mastered_16.mp3?alt=media&token=8d4b4dc2-cffb-466e-8df3-57aace7ce550',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20A2_Cruising_Speed_Mastered_16.mp3?alt=media&token=8d4b4dc2-cffb-466e-8df3-57aace7ce550',
        title: 'Cruising Speed',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 310,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'fc0be79a-274a-4bf8-98a5-b580b7a1bac5',
        // storagePathHigh:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - B1_Rogue_Mastered_16.ogg',
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - B1_Rogue_Mastered_16.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - B1_Rogue_Mastered_16.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20B1_Rogue_Mastered_16.ogg?alt=media&token=1889f54d-1ac0-4090-a138-55c98beff347',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20B1_Rogue_Mastered_16.ogg?alt=media&token=1889f54d-1ac0-4090-a138-55c98beff347',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20B1_Rogue_Mastered_16.ogg?alt=media&token=1889f54d-1ac0-4090-a138-55c98beff347',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - B1_Rogue_Mastered_16.mp3',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - B1_Rogue_Mastered_16.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/89c2d3fd-c9c0-45c4-98c2-74386449ae2b/Raf Reza - B1_Rogue_Mastered_16.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20B1_Rogue_Mastered_16.mp3?alt=media&token=f35cb7b4-fec8-499f-95b4-5797598f58e5',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20B1_Rogue_Mastered_16.mp3?alt=media&token=f35cb7b4-fec8-499f-95b4-5797598f58e5',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2F89c2d3fd-c9c0-45c4-98c2-74386449ae2b%2FRaf%20Reza%20-%20B1_Rogue_Mastered_16.mp3?alt=media&token=f35cb7b4-fec8-499f-95b4-5797598f58e5',
        title: 'Rogue',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 120,
        tagSearchString: 'house,electronic',
      },
      {
        id: '0694f13e-f8ca-406d-8b6b-fd081e1c930a',
        // storagePathHigh:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Pineapple Island.ogg',
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Pineapple Island.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Pineapple Island.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Pineapple%20Island.ogg?alt=media&token=b2ffd0ed-e427-4731-bb8b-fb2411ad918c',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Pineapple%20Island.ogg?alt=media&token=b2ffd0ed-e427-4731-bb8b-fb2411ad918c',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Pineapple%20Island.ogg?alt=media&token=b2ffd0ed-e427-4731-bb8b-fb2411ad918c',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Pineapple Island.mp3',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Pineapple Island.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Pineapple Island.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Pineapple%20Island.mp3?alt=media&token=8ddffe16-a5ce-4976-b690-511ed71f067b',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Pineapple%20Island.mp3?alt=media&token=8ddffe16-a5ce-4976-b690-511ed71f067b',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Pineapple%20Island.mp3?alt=media&token=8ddffe16-a5ce-4976-b690-511ed71f067b',
        title: 'Pineapple Island',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: 'f2028bf3-ed1c-4057-b430-c3374116a959',
        labelId: 'b587201a-ccd8-4ac7-a9c7-fba9c369e7da',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 220,
        tagSearchString: 'house,electronic',
      },
      {
        id: '995d0081-63ee-4fc2-8a61-fc67928c4a12',
        // storagePathHigh:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Space Strut.ogg',
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Space Strut.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Space Strut.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Space%20Strut.ogg?alt=media&token=dfb537b5-ebe1-472c-b475-ebf56851ce64',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Space%20Strut.ogg?alt=media&token=dfb537b5-ebe1-472c-b475-ebf56851ce64',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Space%20Strut.ogg?alt=media&token=dfb537b5-ebe1-472c-b475-ebf56851ce64',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Space Strut.mp3',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Space Strut.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Space Strut.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Space%20Strut.mp3?alt=media&token=718c0388-46b8-4c60-90d2-834b17730a6e',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Space%20Strut.mp3?alt=media&token=718c0388-46b8-4c60-90d2-834b17730a6e',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Space%20Strut.mp3?alt=media&token=718c0388-46b8-4c60-90d2-834b17730a6e',
        title: 'Space Strut',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: 'f2028bf3-ed1c-4057-b430-c3374116a959',
        labelId: 'b587201a-ccd8-4ac7-a9c7-fba9c369e7da',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 240,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'b5ca4741-9d14-4513-8e10-f163f9dd5623',
        // storagePathHigh:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Why You Gotta_.ogg',
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Why You Gotta_.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Why You Gotta_.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Why%20You%20Gotta_.ogg?alt=media&token=de37929c-b67f-4cf2-8184-a26985f6f0b6',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Why%20You%20Gotta_.ogg?alt=media&token=de37929c-b67f-4cf2-8184-a26985f6f0b6',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Why%20You%20Gotta_.ogg?alt=media&token=de37929c-b67f-4cf2-8184-a26985f6f0b6',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Why You Gotta_.mp3',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Why You Gotta_.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91/f2028bf3-ed1c-4057-b430-c3374116a959/Raf Reza - Why You Gotta_.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Why%20You%20Gotta_.mp3?alt=media&token=6aa74c0f-8102-4d87-aaa7-add5a3b08435',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Why%20You%20Gotta_.mp3?alt=media&token=6aa74c0f-8102-4d87-aaa7-add5a3b08435',
        urlLow:
          'hhttps://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91%2Ff2028bf3-ed1c-4057-b430-c3374116a959%2FRaf%20Reza%20-%20Why%20You%20Gotta_.mp3?alt=media&token=6aa74c0f-8102-4d87-aaa7-add5a3b08435',
        title: 'Why You Gotta',
        artistId: 'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        albumId: 'f2028bf3-ed1c-4057-b430-c3374116a959',
        labelId: 'b587201a-ccd8-4ac7-a9c7-fba9c369e7da',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 0,
        tagSearchString: 'house,electronic',
      },
      {
        id: '6cea15ba-0be2-410a-8bdc-acd101685a80',
        // storagePathHigh:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue.ogg',
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue.ogg?alt=media&token=b6fa9418-2352-4a74-b95a-244734c89315',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue.ogg?alt=media&token=b6fa9418-2352-4a74-b95a-244734c89315',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue.ogg?alt=media&token=b6fa9418-2352-4a74-b95a-244734c89315',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue.mp3',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue.mp3?alt=media&token=3f6c0dd9-b643-4a51-8c54-69fb07311a8d',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue.mp3?alt=media&token=3f6c0dd9-b643-4a51-8c54-69fb07311a8d',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue.mp3?alt=media&token=3f6c0dd9-b643-4a51-8c54-69fb07311a8d',
        title: 'On Cue',
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: false,
        playCount: 260,
        tagSearchString: 'house,electronic',
      },
      {
        id: '1d7f1de6-20ca-4656-ac43-ec9bde834510',
        // storagePathHigh:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue (Vakula Remix).ogg',
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue (Vakula Remix).ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue (Vakula Remix).ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue%20(Vakula%20Remix).ogg?alt=media&token=add75dca-2fb4-4529-926d-80dcd9138d6a',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue%20(Vakula%20Remix).ogg?alt=media&token=add75dca-2fb4-4529-926d-80dcd9138d6a',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue%20(Vakula%20Remix).ogg?alt=media&token=add75dca-2fb4-4529-926d-80dcd9138d6a',
        storagePathHigh:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue (Vakula Remix).mp3',
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue (Vakula Remix).mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - On Cue (Vakula Remix).mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue%20(Vakula%20Remix).mp3?alt=media&token=ab5bbb80-9092-4c12-ae2c-aadf77e2efb0',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue%20(Vakula%20Remix).mp3?alt=media&token=ab5bbb80-9092-4c12-ae2c-aadf77e2efb0',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20On%20Cue%20(Vakula%20Remix).mp3?alt=media&token=ab5bbb80-9092-4c12-ae2c-aadf77e2efb0',
        title: 'On Cue (Vakula Remix)',
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: false,
        playCount: 100,
        tagSearchString: 'house,electronic',
      },
      {
        id: '56c8a3cc-53af-4de3-ac91-c16a5c35cd0f',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - time won't forget.ogg`,
        // storagePathMedium: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - time won't forget.ogg`,
        // storagePathLow: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - time won't forget.ogg`,
        // urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20time%20won't%20forget.ogg?alt=media&token=045a04ca-1af5-4bd9-86ff-bb0fdb99b083`,
        // urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20time%20won't%20forget.ogg?alt=media&token=045a04ca-1af5-4bd9-86ff-bb0fdb99b083`,
        // urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20time%20won't%20forget.ogg?alt=media&token=045a04ca-1af5-4bd9-86ff-bb0fdb99b083`,
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - time won't forget.mp3`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - time won't forget.mp3`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - time won't forget.mp3`,
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20time%20won't%20forget.mp3?alt=media&token=64a6783d-ed39-48ed-a36b-0ea10a48bae9`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20time%20won't%20forget.mp3?alt=media&token=64a6783d-ed39-48ed-a36b-0ea10a48bae9`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20time%20won't%20forget.mp3?alt=media&token=64a6783d-ed39-48ed-a36b-0ea10a48bae9`,
        title: `Time Won't Forget`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 110,
        tagSearchString: 'house,electronic',
      },
      {
        id: '1219f0dc-b472-4832-9bd9-23e101b0596d',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - terrium.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - terrium.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - terrium.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20terrium.ogg?alt=media&token=3c3201d0-04a4-4fea-9efd-0bbc54049f6c',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20terrium.ogg?alt=media&token=3c3201d0-04a4-4fea-9efd-0bbc54049f6c',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20terrium.ogg?alt=media&token=3c3201d0-04a4-4fea-9efd-0bbc54049f6c',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - terrium.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - terrium.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/b8fc8b71-509c-400a-831a-25ef04a9ec3b/ESB - terrium.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20terrium.mp3?alt=media&token=8f9162dc-a72a-4373-8c64-d28fc6e15ddc',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20terrium.mp3?alt=media&token=8f9162dc-a72a-4373-8c64-d28fc6e15ddc',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2Fb8fc8b71-509c-400a-831a-25ef04a9ec3b%2FESB%20-%20terrium.mp3?alt=media&token=8f9162dc-a72a-4373-8c64-d28fc6e15ddc',
        title: `Terrium`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 130,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'c35b0e2e-99b6-4a08-aae2-a312e06b86ca',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Q1.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Q1.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Q1.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Q1.ogg?alt=media&token=c351e9ba-5041-4c18-92a1-023281933195',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Q1.ogg?alt=media&token=c351e9ba-5041-4c18-92a1-023281933195',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Q1.ogg?alt=media&token=c351e9ba-5041-4c18-92a1-023281933195',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Q1.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Q1.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Q1.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Q1.mp3?alt=media&token=334ce15b-32db-4781-9a31-bc207bd205d8',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Q1.mp3?alt=media&token=334ce15b-32db-4781-9a31-bc207bd205d8',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Q1.mp3?alt=media&token=334ce15b-32db-4781-9a31-bc207bd205d8',
        title: `Q1`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '911684b3-c073-4b33-ae2a-014346df4bc8',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 143,
        tagSearchString: 'house,electronic',
      },
      {
        id: '0de438c0-a710-4fb2-ba8e-7aaf55a4e2e4',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Spaneaur.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Spaneaur.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Spaneaur.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Spaneaur.ogg?alt=media&token=71dc4a21-a6c9-43dd-8d6e-01eca1bab2e5',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Spaneaur.ogg?alt=media&token=71dc4a21-a6c9-43dd-8d6e-01eca1bab2e5',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Spaneaur.ogg?alt=media&token=71dc4a21-a6c9-43dd-8d6e-01eca1bab2e5',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Spaneaur.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Spaneaur.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Spaneaur.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Spaneaur.mp3?alt=media&token=dc4ae140-4591-4b3a-b791-e53bc403480f',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Spaneaur.mp3?alt=media&token=dc4ae140-4591-4b3a-b791-e53bc403480f',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Spaneaur.mp3?alt=media&token=dc4ae140-4591-4b3a-b791-e53bc403480f',
        title: `Spaneaur`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '911684b3-c073-4b33-ae2a-014346df4bc8',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 154,
        tagSearchString: 'house,electronic',
      },
      {
        id: '50ef4fe1-0e5b-4aab-84e8-1ca5e2507071',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Whisper Theme.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Whisper Theme.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Whisper Theme.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Whisper%20Theme.ogg?alt=media&token=21ae1e88-ca47-4383-9d2e-6fdf224f6fa7',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Whisper%20Theme.ogg?alt=media&token=21ae1e88-ca47-4383-9d2e-6fdf224f6fa7',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Whisper%20Theme.ogg?alt=media&token=21ae1e88-ca47-4383-9d2e-6fdf224f6fa7',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Whisper Theme.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Whisper Theme.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - Whisper Theme.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Whisper%20Theme.mp3?alt=media&token=9442b569-b339-4e33-b63c-4ed8194db904',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Whisper%20Theme.mp3?alt=media&token=9442b569-b339-4e33-b63c-4ed8194db904',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%20Whisper%20Theme.mp3?alt=media&token=9442b569-b339-4e33-b63c-4ed8194db904',
        title: `Whisper Theme`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '911684b3-c073-4b33-ae2a-014346df4bc8',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 573,
        tagSearchString: 'house,electronic',
      },
      {
        id: '41bdaaf2-1b2d-4b4a-b4bd-8a2a3914f505',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - 20% Deeper.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - 20% Deeper.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - 20% Deeper.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%2020%25%20Deeper.ogg?alt=media&token=f926143f-2203-4eca-bab6-dea87c7308f2',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%2020%25%20Deeper.ogg?alt=media&token=f926143f-2203-4eca-bab6-dea87c7308f2',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%2020%25%20Deeper.ogg?alt=media&token=f926143f-2203-4eca-bab6-dea87c7308f2',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - 20% Deeper.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - 20% Deeper.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/911684b3-c073-4b33-ae2a-014346df4bc8/ESB - 20% Deeper.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%2020%25%20Deeper.mp3?alt=media&token=7f8c8197-315a-47ea-a994-5b7c5e609e72',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%2020%25%20Deeper.mp3?alt=media&token=7f8c8197-315a-47ea-a994-5b7c5e609e72',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F911684b3-c073-4b33-ae2a-014346df4bc8%2FESB%20-%2020%25%20Deeper.mp3?alt=media&token=7f8c8197-315a-47ea-a994-5b7c5e609e72',
        title: `20% Deeper`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '911684b3-c073-4b33-ae2a-014346df4bc8',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 630,
        tagSearchString: 'house,electronic',
      },
      {
        id: '8459e7b7-93aa-45ea-a078-4765208af79a',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Fixation.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Fixation.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Fixation.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Fixation.ogg?alt=media&token=13fe4624-3122-4384-8a02-a8094fd38c0f',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Fixation.ogg?alt=media&token=13fe4624-3122-4384-8a02-a8094fd38c0f',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Fixation.ogg?alt=media&token=13fe4624-3122-4384-8a02-a8094fd38c0f',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Fixation.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Fixation.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Fixation.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Fixation.mp3?alt=media&token=180c0f5b-8132-4710-919c-9d6b6617011a',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Fixation.mp3?alt=media&token=180c0f5b-8132-4710-919c-9d6b6617011a',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Fixation.mp3?alt=media&token=180c0f5b-8132-4710-919c-9d6b6617011a',
        title: `Fixation`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 240,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'e9ebfe67-5913-4a41-86d2-dd43ab55e353',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - GLWL.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - GLWL.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - GLWL.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20GLWL.ogg?alt=media&token=ea6a469a-7fe5-44fc-8d05-6399ef6477d5',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20GLWL.ogg?alt=media&token=ea6a469a-7fe5-44fc-8d05-6399ef6477d5',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20GLWL.ogg?alt=media&token=ea6a469a-7fe5-44fc-8d05-6399ef6477d5',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - GLWL.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - GLWL.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - GLWL.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20GLWL.mp3?alt=media&token=c797aeb8-d38c-4227-a1a6-f14dccd3f632',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20GLWL.mp3?alt=media&token=c797aeb8-d38c-4227-a1a6-f14dccd3f632',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20GLWL.mp3?alt=media&token=c797aeb8-d38c-4227-a1a6-f14dccd3f632',
        title: `GLWL`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 530,
        tagSearchString: 'house,electronic',
      },
      {
        id: '2f97ffaa-7b0c-40ea-b341-498347389038',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Make It Thru.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Make It Thru.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Make It Thru.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Make%20It%20Thru.ogg?alt=media&token=0f857f90-f73a-4251-bced-492737add75e',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Make%20It%20Thru.ogg?alt=media&token=0f857f90-f73a-4251-bced-492737add75e',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Make%20It%20Thru.ogg?alt=media&token=0f857f90-f73a-4251-bced-492737add75e',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Make It Thru.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Make It Thru.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Make It Thru.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Make%20It%20Thru.mp3?alt=media&token=4b612b93-551b-45f6-a232-455051e6926d',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Make%20It%20Thru.mp3?alt=media&token=4b612b93-551b-45f6-a232-455051e6926d',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Make%20It%20Thru.mp3?alt=media&token=4b612b93-551b-45f6-a232-455051e6926d',
        title: `Make It Thru`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 210,
        tagSearchString: 'house,electronic',
      },
      {
        id: '279b4cce-edf0-431d-b9d2-fa3171eda9f5',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Mist Outro.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Mist Outro.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Mist Outro.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Mist%20Outro.ogg?alt=media&token=f58aae61-a055-4f54-b21b-591c7e163177',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Mist%20Outro.ogg?alt=media&token=f58aae61-a055-4f54-b21b-591c7e163177',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Mist%20Outro.ogg?alt=media&token=f58aae61-a055-4f54-b21b-591c7e163177',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Mist Outro.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Mist Outro.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac/2d3adf1-59de-4d3c-91ef-3530ed77ea59/ESB - Mist Outro.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Mist%20Outro.mp3?alt=media&token=9429e1e9-f433-49fc-8b02-8e7bc52c90dd',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Mist%20Outro.mp3?alt=media&token=9429e1e9-f433-49fc-8b02-8e7bc52c90dd',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/a4dbf9ca-9c33-41f3-b1b1-b61355f82aac%2F2d3adf1-59de-4d3c-91ef-3530ed77ea59%2FESB%20-%20Mist%20Outro.mp3?alt=media&token=9429e1e9-f433-49fc-8b02-8e7bc52c90dd',
        title: `Mist Outro`,
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        albumId: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        labelId: '9862ca9e-23ed-4519-aef2-3daf27bf34f7',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 190,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'b98976fc-6a4f-4efe-81f2-13e1f7ddabc0',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 01 Foreign Parts.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 01 Foreign Parts.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 01 Foreign Parts.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2001%20Foreign%20Parts.ogg?alt=media&token=909fbee7-2a98-412f-9251-c014696a90b8',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2001%20Foreign%20Parts.ogg?alt=media&token=909fbee7-2a98-412f-9251-c014696a90b8',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2001%20Foreign%20Parts.ogg?alt=media&token=909fbee7-2a98-412f-9251-c014696a90b8',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 01 Foreign Parts.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 01 Foreign Parts.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 01 Foreign Parts.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2001%20Foreign%20Parts.mp3?alt=media&token=d002d6d6-34d3-41b6-b24a-a2d5536c43bc',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2001%20Foreign%20Parts.mp3?alt=media&token=d002d6d6-34d3-41b6-b24a-a2d5536c43bc',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2001%20Foreign%20Parts.mp3?alt=media&token=d002d6d6-34d3-41b6-b24a-a2d5536c43bc',
        title: `Foreign Parts`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 330,
        tagSearchString: 'house,electronic',
      },
      {
        id: '2729a114-414b-412b-8b8a-2df40244f8f6',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 02 Sondag.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 02 Sondag.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 02 Sondag.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2002%20Sondag.ogg?alt=media&token=656852ae-4537-4033-a45b-0b4265450b89',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2002%20Sondag.ogg?alt=media&token=656852ae-4537-4033-a45b-0b4265450b89',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2002%20Sondag.ogg?alt=media&token=656852ae-4537-4033-a45b-0b4265450b89',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 02 Sondag.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 02 Sondag.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 02 Sondag.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2002%20Sondag.mp3?alt=media&token=a3650674-607b-46e3-9863-ba90e32fdd9e',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2002%20Sondag.mp3?alt=media&token=a3650674-607b-46e3-9863-ba90e32fdd9e',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2002%20Sondag.mp3?alt=media&token=a3650674-607b-46e3-9863-ba90e32fdd9e',
        title: `Sondag`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 420,
        tagSearchString: 'house,electronic',
      },
      {
        id: '2adbb9e0-b4bc-48d2-9dff-9fecd2df4775',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 03 Gunvor.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 03 Gunvor.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 03 Gunvor.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2003%20Gunvor.ogg?alt=media&token=a7290cd6-ea55-406e-a5ec-33f56f917a19',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2003%20Gunvor.ogg?alt=media&token=a7290cd6-ea55-406e-a5ec-33f56f917a19',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2003%20Gunvor.ogg?alt=media&token=a7290cd6-ea55-406e-a5ec-33f56f917a19',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 03 Gunvor.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 03 Gunvor.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 03 Gunvor.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2003%20Gunvor.mp3?alt=media&token=1ef23089-5d83-42ef-89c4-4576f4b995c4',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2003%20Gunvor.mp3?alt=media&token=1ef23089-5d83-42ef-89c4-4576f4b995c4',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2003%20Gunvor.mp3?alt=media&token=1ef23089-5d83-42ef-89c4-4576f4b995c4',
        title: `Gunvor`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 630,
        tagSearchString: 'house,electronic',
      },
      {
        id: '6c0cb32e-1495-4d07-ac42-cde370f75d15',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 04 Moodlight.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 04 Moodlight.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 04 Moodlight.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2004%20Moodlight.ogg?alt=media&token=8ca56828-33ec-4c17-8eec-7cdd7413e937',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2004%20Moodlight.ogg?alt=media&token=8ca56828-33ec-4c17-8eec-7cdd7413e937',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2004%20Moodlight.ogg?alt=media&token=8ca56828-33ec-4c17-8eec-7cdd7413e937',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 04 Moodlight.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 04 Moodlight.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 04 Moodlight.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2004%20Moodlight.mp3?alt=media&token=70a2ee32-048d-45f6-b69a-6a00d61caef8',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2004%20Moodlight.mp3?alt=media&token=70a2ee32-048d-45f6-b69a-6a00d61caef8',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2004%20Moodlight.mp3?alt=media&token=70a2ee32-048d-45f6-b69a-6a00d61caef8',
        title: `Moodlight`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 500,
        tagSearchString: 'house,electronic',
      },
      {
        id: '14e987b4-a1c8-4517-9e50-1398c2b52279',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 05 Brodir.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 05 Brodir.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 05 Brodir.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2005%20Brodir.ogg?alt=media&token=dbfedf4e-3686-4f6e-a012-e556f100d9a5',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2005%20Brodir.ogg?alt=media&token=dbfedf4e-3686-4f6e-a012-e556f100d9a5',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2005%20Brodir.ogg?alt=media&token=dbfedf4e-3686-4f6e-a012-e556f100d9a5',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 05 Brodir.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 05 Brodir.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 05 Brodir.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2005%20Brodir.mp3?alt=media&token=b5f05280-f1e3-4abf-a77f-0879dd95fb8b',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2005%20Brodir.mp3?alt=media&token=b5f05280-f1e3-4abf-a77f-0879dd95fb8b',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2005%20Brodir.mp3?alt=media&token=b5f05280-f1e3-4abf-a77f-0879dd95fb8b',
        title: `Brodir`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 320,
        tagSearchString: 'house,electronic',
      },
      {
        id: '95b02d5e-054d-4994-bce7-0979e69e1e6c',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 06 Systir.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 06 Systir.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 06 Systir.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2006%20Systir.ogg?alt=media&token=1ace4eae-8efa-47f6-a164-a521d9384349',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2006%20Systir.ogg?alt=media&token=1ace4eae-8efa-47f6-a164-a521d9384349',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2006%20Systir.ogg?alt=media&token=1ace4eae-8efa-47f6-a164-a521d9384349',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 06 Systir.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 06 Systir.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 06 Systir.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2006%20Systir.mp3?alt=media&token=52746653-a6ab-46d6-9c04-8b53fd411824',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2006%20Systir.mp3?alt=media&token=52746653-a6ab-46d6-9c04-8b53fd411824',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2006%20Systir.mp3?alt=media&token=52746653-a6ab-46d6-9c04-8b53fd411824',
        title: `Systir`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 230,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'ffb050e7-a023-4c65-9e49-1d5ed9803774',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 07 Modir.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 07 Modir.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 07 Modir.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2007%20Modir.ogg?alt=media&token=cc5f9038-cb6c-49f4-959b-d4fd27078a9d',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2007%20Modir.ogg?alt=media&token=cc5f9038-cb6c-49f4-959b-d4fd27078a9d',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2007%20Modir.ogg?alt=media&token=cc5f9038-cb6c-49f4-959b-d4fd27078a9d',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 07 Modir.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 07 Modir.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a4074c89-741d-409d-9b4e-e933c7311e2b/Seb Wildblood - Foreign Parts - 07 Modir.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2007%20Modir.mp3?alt=media&token=182df518-99f6-49b7-b07f-00be879a8537',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2007%20Modir.mp3?alt=media&token=182df518-99f6-49b7-b07f-00be879a8537',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa4074c89-741d-409d-9b4e-e933c7311e2b%2FSeb%20Wildblood%20-%20Foreign%20Parts%20-%2007%20Modir.mp3?alt=media&token=182df518-99f6-49b7-b07f-00be879a8537',
        title: `Modir`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 450,
        tagSearchString: 'house,electronic',
      },
      {
        id: '6b4971fd-1751-4878-9be8-a8055f8951c3',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/8c587e75-58c0-45e0-a87e-538fbf69848f/Seb Wildblood - Melodic Tools - 01 MT01.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/8c587e75-58c0-45e0-a87e-538fbf69848f/Seb Wildblood - Melodic Tools - 01 MT01.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/8c587e75-58c0-45e0-a87e-538fbf69848f/Seb Wildblood - Melodic Tools - 01 MT01.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2FSeb%20Wildblood%20-%20Melodic%20Tools%20-%2001%20MT01.ogg?alt=media&token=10fdb28d-61f3-419f-8702-7b6f28260e43',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2FSeb%20Wildblood%20-%20Melodic%20Tools%20-%2001%20MT01.ogg?alt=media&token=10fdb28d-61f3-419f-8702-7b6f28260e43',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2FSeb%20Wildblood%20-%20Melodic%20Tools%20-%2001%20MT01.ogg?alt=media&token=10fdb28d-61f3-419f-8702-7b6f28260e43',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/8c587e75-58c0-45e0-a87e-538fbf69848f/Seb Wildblood - Melodic Tools - 01 MT01.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/8c587e75-58c0-45e0-a87e-538fbf69848f/Seb Wildblood - Melodic Tools - 01 MT01.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/8c587e75-58c0-45e0-a87e-538fbf69848f/Seb Wildblood - Melodic Tools - 01 MT01.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2FSeb%20Wildblood%20-%20Melodic%20Tools%20-%2001%20MT01.mp3?alt=media&token=38596ef8-8fa5-40cf-b9aa-3077101b7fe7',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2FSeb%20Wildblood%20-%20Melodic%20Tools%20-%2001%20MT01.mp3?alt=media&token=38596ef8-8fa5-40cf-b9aa-3077101b7fe7',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2FSeb%20Wildblood%20-%20Melodic%20Tools%20-%2001%20MT01.mp3?alt=media&token=38596ef8-8fa5-40cf-b9aa-3077101b7fe7',
        title: `MT01`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '8c587e75-58c0-45e0-a87e-538fbf69848f',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 460,
        tagSearchString: 'house,electronic',
      },
      {
        id: '56e3b234-de56-4849-962a-3c21ed195f9d',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/8c587e75-58c0-45e0-a87e-538fbf69848f/Seb Wildblood - Melodic Tools - 02 MT02.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/8c587e75-58c0-45e0-a87e-538fbf69848f/Seb Wildblood - Melodic Tools - 02 MT02.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/8c587e75-58c0-45e0-a87e-538fbf69848f/Seb Wildblood - Melodic Tools - 02 MT02.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2FSeb%20Wildblood%20-%20Melodic%20Tools%20-%2002%20MT02.ogg?alt=media&token=90a7492b-5c13-4f73-a26b-41d5b4056003',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2FSeb%20Wildblood%20-%20Melodic%20Tools%20-%2002%20MT02.ogg?alt=media&token=90a7492b-5c13-4f73-a26b-41d5b4056003',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2FSeb%20Wildblood%20-%20Melodic%20Tools%20-%2002%20MT02.ogg?alt=media&token=90a7492b-5c13-4f73-a26b-41d5b4056003',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/8c587e75-58c0-45e0-a87e-538fbf69848f/Seb Wildblood - Melodic Tools - 02 MT02.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/8c587e75-58c0-45e0-a87e-538fbf69848f/Seb Wildblood - Melodic Tools - 02 MT02.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/8c587e75-58c0-45e0-a87e-538fbf69848f/Seb Wildblood - Melodic Tools - 02 MT02.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2FSeb%20Wildblood%20-%20Melodic%20Tools%20-%2002%20MT02.mp3?alt=media&token=feb03ac7-077c-4ce8-8450-84140781facd',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2FSeb%20Wildblood%20-%20Melodic%20Tools%20-%2002%20MT02.mp3?alt=media&token=feb03ac7-077c-4ce8-8450-84140781facd',
        urlLow:
          'hhttps://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F8c587e75-58c0-45e0-a87e-538fbf69848f%2FSeb%20Wildblood%20-%20Melodic%20Tools%20-%2002%20MT02.mp3?alt=media&token=feb03ac7-077c-4ce8-8450-84140781facd',
        title: `MT02`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '8c587e75-58c0-45e0-a87e-538fbf69848f',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 540,
        tagSearchString: 'house,electronic',
      },
      {
        id: '857f44a3-6f40-4c95-9b7a-e9789eb62d47',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 01 Everybody Looks Good At The Restaurant.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 01 Everybody Looks Good At The Restaurant.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 01 Everybody Looks Good At The Restaurant.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2001%20Everybody%20Looks%20Good%20At%20The%20Restaurant.ogg?alt=media&token=71c4f3e5-ccee-44db-bcbe-bd49088184e6',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2001%20Everybody%20Looks%20Good%20At%20The%20Restaurant.ogg?alt=media&token=71c4f3e5-ccee-44db-bcbe-bd49088184e6',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2001%20Everybody%20Looks%20Good%20At%20The%20Restaurant.ogg?alt=media&token=71c4f3e5-ccee-44db-bcbe-bd49088184e6',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 01 Everybody Looks Good At The Restaurant.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 01 Everybody Looks Good At The Restaurant.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 01 Everybody Looks Good At The Restaurant.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2001%20Everybody%20Looks%20Good%20At%20The%20Restaurant.mp3?alt=media&token=d919108f-360a-4970-a771-3514af9ed3aa',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2001%20Everybody%20Looks%20Good%20At%20The%20Restaurant.mp3?alt=media&token=d919108f-360a-4970-a771-3514af9ed3aa',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2001%20Everybody%20Looks%20Good%20At%20The%20Restaurant.mp3?alt=media&token=d919108f-360a-4970-a771-3514af9ed3aa',
        title: `Everybody Looks Good At The Restaurant`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 550,
        tagSearchString: 'house,electronic',
      },
      {
        id: '5b9734f7-08a1-41b0-855a-81900b611421',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 02 I Will.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 02 I Will.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 02 I Will.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2002%20I%20Will.ogg?alt=media&token=6edd8994-2491-4c45-8f72-56f901b66b49',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2002%20I%20Will.ogg?alt=media&token=6edd8994-2491-4c45-8f72-56f901b66b49',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2002%20I%20Will.ogg?alt=media&token=6edd8994-2491-4c45-8f72-56f901b66b49',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 02 I Will.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 02 I Will.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 02 I Will.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2002%20I%20Will.mp3?alt=media&token=5d70ae87-70d8-4a2e-a9c2-2529b3e3c85b',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2002%20I%20Will.mp3?alt=media&token=5d70ae87-70d8-4a2e-a9c2-2529b3e3c85b',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2002%20I%20Will.mp3?alt=media&token=5d70ae87-70d8-4a2e-a9c2-2529b3e3c85b',
        title: `I Will`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 340,
        tagSearchString: 'house,electronic',
      },
      {
        id: '4ffc70f7-4aaa-4796-84a8-0b1305278937',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 03 Lifestyle w- James Booth.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 03 Lifestyle w- James Booth.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 03 Lifestyle w- James Booth.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2003%20Lifestyle%20w-%20James%20Booth.ogg?alt=media&token=a6bc66ba-ec0b-4c69-8a45-38a9b8d17f6b',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2003%20Lifestyle%20w-%20James%20Booth.ogg?alt=media&token=a6bc66ba-ec0b-4c69-8a45-38a9b8d17f6b',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2003%20Lifestyle%20w-%20James%20Booth.ogg?alt=media&token=a6bc66ba-ec0b-4c69-8a45-38a9b8d17f6b',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 03 Lifestyle w- James Booth.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 03 Lifestyle w- James Booth.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 03 Lifestyle w- James Booth.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2003%20Lifestyle%20w-%20James%20Booth.mp3?alt=media&token=4eac5d11-0240-475c-9b55-d96e4a03ac52',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2003%20Lifestyle%20w-%20James%20Booth.mp3?alt=media&token=4eac5d11-0240-475c-9b55-d96e4a03ac52',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2003%20Lifestyle%20w-%20James%20Booth.mp3?alt=media&token=4eac5d11-0240-475c-9b55-d96e4a03ac52',
        title: `Lifestyle w- James Booth`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 430,
        tagSearchString: 'house,electronic',
      },
      {
        id: '42312cf4-78f5-423f-971b-e792d40e463f',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 04 I Won't.ogg`,
        // storagePathMedium: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 04 I Won't.ogg`,
        // storagePathLow: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 04 I Won't.ogg`,
        // urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2004%20I%20Won't.ogg?alt=media&token=37415c75-f66b-4517-aa4b-b413b38498c0`,
        // urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2004%20I%20Won't.ogg?alt=media&token=37415c75-f66b-4517-aa4b-b413b38498c0`,
        // urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2004%20I%20Won't.ogg?alt=media&token=37415c75-f66b-4517-aa4b-b413b38498c0`,
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 04 I Won't.mp3`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 04 I Won't.mp3`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/9d84ba1c-a7f2-438a-9252-4fd1f1ede68b/Seb Wildblood - SW004 - 04 I Won't.mp3`,
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2004%20I%20Won't.mp3?alt=media&token=4206ef46-76d1-478d-be36-730bcb476ada`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2004%20I%20Won't.mp3?alt=media&token=4206ef46-76d1-478d-be36-730bcb476ada`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F9d84ba1c-a7f2-438a-9252-4fd1f1ede68b%2FSeb%20Wildblood%20-%20SW004%20-%2004%20I%20Won't.mp3?alt=media&token=4206ef46-76d1-478d-be36-730bcb476ada`,
        title: `I Won't`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 230,
        tagSearchString: 'house,electronic',
      },
      {
        id: '14a16828-d7d5-4933-9b0b-5f878e990150',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 01 Swimmers.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 01 Swimmers.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 01 Swimmers.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2001%20Swimmers.ogg?alt=media&token=557bb896-a663-413d-9ba6-887fc3b51ac6',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2001%20Swimmers.ogg?alt=media&token=557bb896-a663-413d-9ba6-887fc3b51ac6',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2001%20Swimmers.ogg?alt=media&token=557bb896-a663-413d-9ba6-887fc3b51ac6',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 01 Swimmers.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 01 Swimmers.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 01 Swimmers.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2001%20Swimmers.mp3?alt=media&token=385b1c6a-b6fc-4be4-928f-e394b76adcaf',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2001%20Swimmers.mp3?alt=media&token=385b1c6a-b6fc-4be4-928f-e394b76adcaf',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2001%20Swimmers.mp3?alt=media&token=385b1c6a-b6fc-4be4-928f-e394b76adcaf',
        title: `Swimmers`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 650,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'e89c53a4-477b-4b86-ac7c-16b6ad292e5c',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 02 Mariana Dub.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 02 Mariana Dub.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 02 Mariana Dub.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2002%20Mariana%20Dub.ogg?alt=media&token=f49316e6-eeb0-42bf-b586-840bbd05a892',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2002%20Mariana%20Dub.ogg?alt=media&token=f49316e6-eeb0-42bf-b586-840bbd05a892',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2002%20Mariana%20Dub.ogg?alt=media&token=f49316e6-eeb0-42bf-b586-840bbd05a892',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 02 Mariana Dub.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 02 Mariana Dub.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 02 Mariana Dub.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2002%20Mariana%20Dub.mp3?alt=media&token=a28bb1e3-f704-443d-b8a3-72c3e9a4219c',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2002%20Mariana%20Dub.mp3?alt=media&token=a28bb1e3-f704-443d-b8a3-72c3e9a4219c',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2002%20Mariana%20Dub.mp3?alt=media&token=a28bb1e3-f704-443d-b8a3-72c3e9a4219c',
        title: `Mariana Dub`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 850,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'cec2cc9d-1f93-42c5-b94a-fe1bfc275e5b',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 03 Submarine.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 03 Submarine.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 03 Submarine.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2003%20Submarine.ogg?alt=media&token=cb505310-8c0a-4cbd-b324-ee69e764c58f',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2003%20Submarine.ogg?alt=media&token=cb505310-8c0a-4cbd-b324-ee69e764c58f',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2003%20Submarine.ogg?alt=media&token=cb505310-8c0a-4cbd-b324-ee69e764c58f',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 03 Submarine.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 03 Submarine.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 03 Submarine.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2003%20Submarine.mp3?alt=media&token=495836be-88ec-4c3e-818e-22528c68ec0d',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2003%20Submarine.mp3?alt=media&token=495836be-88ec-4c3e-818e-22528c68ec0d',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2003%20Submarine.mp3?alt=media&token=495836be-88ec-4c3e-818e-22528c68ec0d',
        title: `Submarine`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 970,
        tagSearchString: 'house,electronic',
      },
      {
        id: '3f454fd6-dde9-4412-b4f8-e932a2dc389a',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 04 Submarine (Project Pablo Remix).ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 04 Submarine (Project Pablo Remix).ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 04 Submarine (Project Pablo Remix).ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2004%20Submarine%20(Project%20Pablo%20Remix).ogg?alt=media&token=8c5dde2c-0570-48b3-9f47-a5cecd4a17d2',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2004%20Submarine%20(Project%20Pablo%20Remix).ogg?alt=media&token=8c5dde2c-0570-48b3-9f47-a5cecd4a17d2',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2004%20Submarine%20(Project%20Pablo%20Remix).ogg?alt=media&token=8c5dde2c-0570-48b3-9f47-a5cecd4a17d2',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 04 Submarine (Project Pablo Remix).mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 04 Submarine (Project Pablo Remix).mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4/Seb Wildblood - Submarine - 04 Submarine (Project Pablo Remix).mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2004%20Submarine%20(Project%20Pablo%20Remix).mp3?alt=media&token=fb8ac827-d441-4e63-8c5a-14d7ef4d7fba',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2004%20Submarine%20(Project%20Pablo%20Remix).mp3?alt=media&token=fb8ac827-d441-4e63-8c5a-14d7ef4d7fba',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2F2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4%2FSeb%20Wildblood%20-%20Submarine%20-%2004%20Submarine%20(Project%20Pablo%20Remix).mp3?alt=media&token=fb8ac827-d441-4e63-8c5a-14d7ef4d7fba',
        title: `Submarine (Project Pablo Remix)`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 580,
        tagSearchString: 'house,electronic',
      },
      {
        id: '04dd515f-eb5e-4d02-9d34-c1d90d56e23e',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 01 I Will.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 01 I Will.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 01 I Will.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2001%20I%20Will.ogg?alt=media&token=6e0043fb-54f1-48b4-8559-dc7df2d14621',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2001%20I%20Will.ogg?alt=media&token=6e0043fb-54f1-48b4-8559-dc7df2d14621',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2001%20I%20Will.ogg?alt=media&token=6e0043fb-54f1-48b4-8559-dc7df2d14621',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 01 I Will.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 01 I Will.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 01 I Will.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2001%20I%20Will.mp3?alt=media&token=b5cdb17b-7918-40be-8144-0cc2d030bdb8',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2001%20I%20Will.mp3?alt=media&token=b5cdb17b-7918-40be-8144-0cc2d030bdb8',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2001%20I%20Will.mp3?alt=media&token=b5cdb17b-7918-40be-8144-0cc2d030bdb8',
        title: `I Will`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 730,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'c192c16c-2b2f-473c-b562-d7f2aa4f4760',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 02 U.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 02 U.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 02 U.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2002%20U.ogg?alt=media&token=1ae04a2d-dc32-4a01-8299-90f6c307a618',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2002%20U.ogg?alt=media&token=1ae04a2d-dc32-4a01-8299-90f6c307a618',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2002%20U.ogg?alt=media&token=1ae04a2d-dc32-4a01-8299-90f6c307a618',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 02 U.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 02 U.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 02 U.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2002%20U.mp3?alt=media&token=050c93ba-d2d1-4acc-bc38-94cf8c7542ac',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2002%20U.mp3?alt=media&token=050c93ba-d2d1-4acc-bc38-94cf8c7542ac',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2002%20U.mp3?alt=media&token=050c93ba-d2d1-4acc-bc38-94cf8c7542ac',
        title: `U`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 580,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'c5e4e4b4-29d7-4e32-b910-ed3591d27858',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 03 Lifestyle w- James Booth.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 03 Lifestyle w- James Booth.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 03 Lifestyle w- James Booth.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2003%20Lifestyle%20w-%20James%20Booth.ogg?alt=media&token=9285b8ef-377e-425d-81b1-a4557463bba3',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2003%20Lifestyle%20w-%20James%20Booth.ogg?alt=media&token=9285b8ef-377e-425d-81b1-a4557463bba3',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2003%20Lifestyle%20w-%20James%20Booth.ogg?alt=media&token=9285b8ef-377e-425d-81b1-a4557463bba3',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 03 Lifestyle w- James Booth.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 03 Lifestyle w- James Booth.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 03 Lifestyle w- James Booth.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2003%20Lifestyle%20w-%20James%20Booth.mp3?alt=media&token=24eec081-5b6d-4c28-8f7d-cb187968fb70',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2003%20Lifestyle%20w-%20James%20Booth.mp3?alt=media&token=24eec081-5b6d-4c28-8f7d-cb187968fb70',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2003%20Lifestyle%20w-%20James%20Booth.mp3?alt=media&token=24eec081-5b6d-4c28-8f7d-cb187968fb70',
        title: `Lifestyle w- James Booth`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 540,
        tagSearchString: 'house,electronic',
      },
      {
        id: '105f00e3-23ff-424d-b747-877e8c51bb56',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 04 I Won't.ogg`,
        // storagePathMedium: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 04 I Won't.ogg`,
        // storagePathLow: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 04 I Won't.ogg`,
        // urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2004%20I%20Won't.ogg?alt=media&token=96d6899e-ff95-4f2f-9361-f012b4a01ec4`,
        // urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2004%20I%20Won't.ogg?alt=media&token=96d6899e-ff95-4f2f-9361-f012b4a01ec4`,
        // urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2004%20I%20Won't.ogg?alt=media&token=96d6899e-ff95-4f2f-9361-f012b4a01ec4`,
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 04 I Won't.mp3`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 04 I Won't.mp3`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 04 I Won't.mp3`,
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2004%20I%20Won't.mp3?alt=media&token=be7ce83d-5a56-4a0f-8d5f-61c351008d16`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2004%20I%20Won't.mp3?alt=media&token=be7ce83d-5a56-4a0f-8d5f-61c351008d16`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2004%20I%20Won't.mp3?alt=media&token=be7ce83d-5a56-4a0f-8d5f-61c351008d16`,
        title: `I Won't`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 750,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'c14fb209-6f90-4dd3-967a-aeb40944e301',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 05 Bonsai Care.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 05 Bonsai Care.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 05 Bonsai Care.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2005%20Bonsai%20Care.ogg?alt=media&token=10bb0657-52ec-4567-b628-dd97b6f03775',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2005%20Bonsai%20Care.ogg?alt=media&token=10bb0657-52ec-4567-b628-dd97b6f03775',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2005%20Bonsai%20Care.ogg?alt=media&token=10bb0657-52ec-4567-b628-dd97b6f03775',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 05 Bonsai Care.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 05 Bonsai Care.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 05 Bonsai Care.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2005%20Bonsai%20Care.mp3?alt=media&token=71c7f790-eb40-438b-bd3b-cdc83d7ab3c3',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2005%20Bonsai%20Care.mp3?alt=media&token=71c7f790-eb40-438b-bd3b-cdc83d7ab3c3',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2005%20Bonsai%20Care.mp3?alt=media&token=71c7f790-eb40-438b-bd3b-cdc83d7ab3c3',
        title: `Bonsai Care`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 260,
        tagSearchString: 'house,electronic',
      },
      {
        id: 'ddb3c816-3786-4e94-861e-68d0e70ab026',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 06 Crazy Eyes, Eric.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 06 Crazy Eyes, Eric.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 06 Crazy Eyes, Eric.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2006%20Crazy%20Eyes%2C%20Eric.ogg?alt=media&token=75c6d3d5-7962-486c-9fe2-6f7e72748d15',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2006%20Crazy%20Eyes%2C%20Eric.ogg?alt=media&token=75c6d3d5-7962-486c-9fe2-6f7e72748d15',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2006%20Crazy%20Eyes%2C%20Eric.ogg?alt=media&token=75c6d3d5-7962-486c-9fe2-6f7e72748d15',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 06 Crazy Eyes, Eric.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 06 Crazy Eyes, Eric.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/19c31f4a-d0a6-48d8-b99c-433bf3155a86/a5d7286c-0bc9-452b-8401-3dab864860ee/Seb Wildblood - U - 06 Crazy Eyes, Eric.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2006%20Crazy%20Eyes%2C%20Eric.mp3?alt=media&token=e1a0bea1-a533-4694-b481-65dae8162e61',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2006%20Crazy%20Eyes%2C%20Eric.mp3?alt=media&token=e1a0bea1-a533-4694-b481-65dae8162e61',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/19c31f4a-d0a6-48d8-b99c-433bf3155a86%2Fa5d7286c-0bc9-452b-8401-3dab864860ee%2FSeb%20Wildblood%20-%20U%20-%2006%20Crazy%20Eyes%2C%20Eric.mp3?alt=media&token=e1a0bea1-a533-4694-b481-65dae8162e61',
        title: `Crazy Eyes, Eric`,
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        labelId: '3a6e67cb-7b0b-4248-baee-7e513a361d09',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 570,
        tagSearchString: 'house,electronic',
      },
      {
        id: '70bdaa3d-eb84-4219-ba22-db79d2bbb223',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 01 Based Is How You Feel Inside.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 01 Based Is How You Feel Inside.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 01 Based Is How You Feel Inside.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2001%20Based%20Is%20How%20You%20Feel%20Inside.ogg?alt=media&token=d26e8af0-5b39-4042-877c-772c24933846',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2001%20Based%20Is%20How%20You%20Feel%20Inside.ogg?alt=media&token=d26e8af0-5b39-4042-877c-772c24933846',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2001%20Based%20Is%20How%20You%20Feel%20Inside.ogg?alt=media&token=d26e8af0-5b39-4042-877c-772c24933846',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 01 Based Is How You Feel Inside.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 01 Based Is How You Feel Inside.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 01 Based Is How You Feel Inside.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2001%20Based%20Is%20How%20You%20Feel%20Inside.mp3?alt=media&token=7e528ffc-547c-45af-b8c5-cf6184439d1b',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2001%20Based%20Is%20How%20You%20Feel%20Inside.mp3?alt=media&token=7e528ffc-547c-45af-b8c5-cf6184439d1b',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2001%20Based%20Is%20How%20You%20Feel%20Inside.mp3?alt=media&token=7e528ffc-547c-45af-b8c5-cf6184439d1b',
        title: `Based Is How You Feel Inside`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 970,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: 'd9c9b094-8c3c-4c2b-96b7-67c0174618af',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 02 Fall In Love.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 02 Fall In Love.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 02 Fall In Love.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2002%20Fall%20In%20Love.ogg?alt=media&token=732b203f-b12e-42bb-85c2-ac393ef2eff2',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2002%20Fall%20In%20Love.ogg?alt=media&token=732b203f-b12e-42bb-85c2-ac393ef2eff2',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2002%20Fall%20In%20Love.ogg?alt=media&token=732b203f-b12e-42bb-85c2-ac393ef2eff2',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 02 Fall In Love.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 02 Fall In Love.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 02 Fall In Love.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2002%20Fall%20In%20Love.mp3?alt=media&token=7aa21a3e-358f-4999-bfdf-0efe537ccef1',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2002%20Fall%20In%20Love.mp3?alt=media&token=7aa21a3e-358f-4999-bfdf-0efe537ccef1',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2002%20Fall%20In%20Love.mp3?alt=media&token=7aa21a3e-358f-4999-bfdf-0efe537ccef1',
        title: `Fall In Love`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 560,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '678706f1-6b87-4602-a231-72c5cac3f355',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 03 Improvised Jam.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 03 Improvised Jam.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 03 Improvised Jam.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2003%20Improvised%20Jam.ogg?alt=media&token=395ed2a9-081c-426d-8729-812d76867f90',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2003%20Improvised%20Jam.ogg?alt=media&token=395ed2a9-081c-426d-8729-812d76867f90',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2003%20Improvised%20Jam.ogg?alt=media&token=395ed2a9-081c-426d-8729-812d76867f90',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 03 Improvised Jam.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 03 Improvised Jam.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 03 Improvised Jam.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2003%20Improvised%20Jam.mp3?alt=media&token=2548f91e-498a-48f7-9b36-72463b016336',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2003%20Improvised%20Jam.mp3?alt=media&token=2548f91e-498a-48f7-9b36-72463b016336',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2003%20Improvised%20Jam.mp3?alt=media&token=2548f91e-498a-48f7-9b36-72463b016336',
        title: `Improvised Jam`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 870,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: 'abe6ab8e-fca2-4219-989d-e002832af3aa',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 04 Mass Appeal - Transmission.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 04 Mass Appeal - Transmission.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 04 Mass Appeal - Transmission.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2004%20Mass%20Appeal%20-%20Transmission.ogg?alt=media&token=e2c3bf82-8417-40cb-842a-9a48a378ddf7',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2004%20Mass%20Appeal%20-%20Transmission.ogg?alt=media&token=e2c3bf82-8417-40cb-842a-9a48a378ddf7',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2004%20Mass%20Appeal%20-%20Transmission.ogg?alt=media&token=e2c3bf82-8417-40cb-842a-9a48a378ddf7',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 04 Mass Appeal - Transmission.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 04 Mass Appeal - Transmission.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 04 Mass Appeal - Transmission.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2004%20Mass%20Appeal%20-%20Transmission.mp3?alt=media&token=3085306d-9230-4499-b2d9-e3b5fb5e1aac',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2004%20Mass%20Appeal%20-%20Transmission.mp3?alt=media&token=3085306d-9230-4499-b2d9-e3b5fb5e1aac',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2004%20Mass%20Appeal%20-%20Transmission.mp3?alt=media&token=3085306d-9230-4499-b2d9-e3b5fb5e1aac',
        title: `Mass Appeal - Transmission`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 470,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: 'e738480a-9cdc-4afc-b870-02c72b894b0b',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 05 I Got A Bad Feeling About This.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 05 I Got A Bad Feeling About This.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 05 I Got A Bad Feeling About This.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2005%20I%20Got%20A%20Bad%20Feeling%20About%20This.ogg?alt=media&token=2938e6fd-6d2f-4815-85d8-8cb01e55610c',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2005%20I%20Got%20A%20Bad%20Feeling%20About%20This.ogg?alt=media&token=2938e6fd-6d2f-4815-85d8-8cb01e55610c',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2005%20I%20Got%20A%20Bad%20Feeling%20About%20This.ogg?alt=media&token=2938e6fd-6d2f-4815-85d8-8cb01e55610c',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 05 I Got A Bad Feeling About This.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 05 I Got A Bad Feeling About This.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 05 I Got A Bad Feeling About This.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2005%20I%20Got%20A%20Bad%20Feeling%20About%20This.mp3?alt=media&token=a5e5b4d0-5d5c-4175-a04e-ad6c61571626',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2005%20I%20Got%20A%20Bad%20Feeling%20About%20This.mp3?alt=media&token=a5e5b4d0-5d5c-4175-a04e-ad6c61571626',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2005%20I%20Got%20A%20Bad%20Feeling%20About%20This.mp3?alt=media&token=a5e5b4d0-5d5c-4175-a04e-ad6c61571626',
        title: `I Got A Bad Feeling About This`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 760,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '01497634-7270-4157-a530-0104a63dc900',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 06 Salmonella.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 06 Salmonella.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 06 Salmonella.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2006%20Salmonella.ogg?alt=media&token=b84995dc-1fc8-4b9d-b48a-eaa43e6dfd94',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2006%20Salmonella.ogg?alt=media&token=b84995dc-1fc8-4b9d-b48a-eaa43e6dfd94',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2006%20Salmonella.ogg?alt=media&token=b84995dc-1fc8-4b9d-b48a-eaa43e6dfd94',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 06 Salmonella.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 06 Salmonella.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 06 Salmonella.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2006%20Salmonella.mp3?alt=media&token=2b2ed5cf-aabc-4abe-b022-19f6d000653d',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2006%20Salmonella.mp3?alt=media&token=2b2ed5cf-aabc-4abe-b022-19f6d000653d',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2006%20Salmonella.mp3?alt=media&token=2b2ed5cf-aabc-4abe-b022-19f6d000653d',
        title: `Salmonella`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 740,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '5f7a00aa-1904-4287-a3f5-f9447b193440',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 07 Freedom - Billium Evans (Prod. Seeds of Yaris).ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 07 Freedom - Billium Evans (Prod. Seeds of Yaris).ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 07 Freedom - Billium Evans (Prod. Seeds of Yaris).ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2007%20Freedom%20-%20Billium%20Evans%20(Prod.%20Seeds%20of%20Yaris).ogg?alt=media&token=8b420e10-e028-4ffd-903e-b3b6ba0ecb19',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2007%20Freedom%20-%20Billium%20Evans%20(Prod.%20Seeds%20of%20Yaris).ogg?alt=media&token=8b420e10-e028-4ffd-903e-b3b6ba0ecb19',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2007%20Freedom%20-%20Billium%20Evans%20(Prod.%20Seeds%20of%20Yaris).ogg?alt=media&token=8b420e10-e028-4ffd-903e-b3b6ba0ecb19',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 07 Freedom - Billium Evans (Prod. Seeds of Yaris).mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 07 Freedom - Billium Evans (Prod. Seeds of Yaris).mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 07 Freedom - Billium Evans (Prod. Seeds of Yaris).mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2007%20Freedom%20-%20Billium%20Evans%20(Prod.%20Seeds%20of%20Yaris).mp3?alt=media&token=659e2030-a9bf-4fbe-84ce-48d3a5c95f54',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2007%20Freedom%20-%20Billium%20Evans%20(Prod.%20Seeds%20of%20Yaris).mp3?alt=media&token=659e2030-a9bf-4fbe-84ce-48d3a5c95f54',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2007%20Freedom%20-%20Billium%20Evans%20(Prod.%20Seeds%20of%20Yaris).mp3?alt=media&token=659e2030-a9bf-4fbe-84ce-48d3a5c95f54',
        title: `Freedom - Billium Evans (Prod. Seeds of Yaris)`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 660,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '7ee03d70-294a-4221-8d67-c88062b5cf2f',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 08 The World Is Yours - Brooklyn Zoo.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 08 The World Is Yours - Brooklyn Zoo.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 08 The World Is Yours - Brooklyn Zoo.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2008%20The%20World%20Is%20Yours%20-%20Brooklyn%20Zoo.ogg?alt=media&token=86d7feac-af26-4e57-b39f-6faa5025f51a',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2008%20The%20World%20Is%20Yours%20-%20Brooklyn%20Zoo.ogg?alt=media&token=86d7feac-af26-4e57-b39f-6faa5025f51a',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2008%20The%20World%20Is%20Yours%20-%20Brooklyn%20Zoo.ogg?alt=media&token=86d7feac-af26-4e57-b39f-6faa5025f51a',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 08 The World Is Yours - Brooklyn Zoo.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 08 The World Is Yours - Brooklyn Zoo.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 08 The World Is Yours - Brooklyn Zoo.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2008%20The%20World%20Is%20Yours%20-%20Brooklyn%20Zoo.mp3?alt=media&token=b8235587-08d5-45b8-8d67-d9c00c4c8f2f',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2008%20The%20World%20Is%20Yours%20-%20Brooklyn%20Zoo.mp3?alt=media&token=b8235587-08d5-45b8-8d67-d9c00c4c8f2f',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2008%20The%20World%20Is%20Yours%20-%20Brooklyn%20Zoo.mp3?alt=media&token=b8235587-08d5-45b8-8d67-d9c00c4c8f2f',
        title: `The World Is Yours - Brooklyn Zoo`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 6660,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '9bd56619-12db-4f73-8584-09a7054f46b4',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 09 Listeriosis.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 09 Listeriosis.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 09 Listeriosis.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2009%20Listeriosis.ogg?alt=media&token=2fde7443-8844-4f03-bf2f-99c0bb6ee63b',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2009%20Listeriosis.ogg?alt=media&token=2fde7443-8844-4f03-bf2f-99c0bb6ee63b',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2009%20Listeriosis.ogg?alt=media&token=2fde7443-8844-4f03-bf2f-99c0bb6ee63b',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 09 Listeriosis.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 09 Listeriosis.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 09 Listeriosis.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2009%20Listeriosis.mp3?alt=media&token=148fc217-c2df-4c41-a497-71c0cfdd1650',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2009%20Listeriosis.mp3?alt=media&token=148fc217-c2df-4c41-a497-71c0cfdd1650',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2009%20Listeriosis.mp3?alt=media&token=148fc217-c2df-4c41-a497-71c0cfdd1650',
        title: `Listeriosis`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 470,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: 'f9d18dd3-aaba-4d5e-b6df-cd68ee4cc070',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 10 Camel.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 10 Camel.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 10 Camel.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2010%20Camel.ogg?alt=media&token=7f7b09e3-e78a-4480-a216-5af732668575',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2010%20Camel.ogg?alt=media&token=7f7b09e3-e78a-4480-a216-5af732668575',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2010%20Camel.ogg?alt=media&token=7f7b09e3-e78a-4480-a216-5af732668575',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 10 Camel.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 10 Camel.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 10 Camel.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2010%20Camel.mp3?alt=media&token=6ab6ac63-c1cd-4c20-aa94-cf8e9cf2ee37',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2010%20Camel.mp3?alt=media&token=6ab6ac63-c1cd-4c20-aa94-cf8e9cf2ee37',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2010%20Camel.mp3?alt=media&token=6ab6ac63-c1cd-4c20-aa94-cf8e9cf2ee37',
        title: `Camel`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 650,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: 'ee235a85-1c59-4b7b-992a-89f8cfa410ec',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 11 Title Theme - Saria's Song - Song Of Storms.ogg`,
        // storagePathMedium: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 11 Title Theme - Saria's Song - Song Of Storms.ogg`,
        // storagePathLow: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 11 Title Theme - Saria's Song - Song Of Storms.ogg`,
        // urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2011%20Title%20Theme%20-%20Saria's%20Song%20-%20Song%20Of%20Storms.ogg?alt=media&token=8558497b-5369-43dc-bf1c-5763efe2f0ee`,
        // urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2011%20Title%20Theme%20-%20Saria's%20Song%20-%20Song%20Of%20Storms.ogg?alt=media&token=8558497b-5369-43dc-bf1c-5763efe2f0ee`,
        // urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2011%20Title%20Theme%20-%20Saria's%20Song%20-%20Song%20Of%20Storms.ogg?alt=media&token=8558497b-5369-43dc-bf1c-5763efe2f0ee`,
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 11 Title Theme - Saria's Song - Song Of Storms.mp3`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 11 Title Theme - Saria's Song - Song Of Storms.mp3`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 11 Title Theme - Saria's Song - Song Of Storms.mp3`,
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2011%20Title%20Theme%20-%20Saria's%20Song%20-%20Song%20Of%20Storms.mp3?alt=media&token=c78bb523-0026-4f7d-815f-869672c64ac3`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2011%20Title%20Theme%20-%20Saria's%20Song%20-%20Song%20Of%20Storms.mp3?alt=media&token=c78bb523-0026-4f7d-815f-869672c64ac3`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2011%20Title%20Theme%20-%20Saria's%20Song%20-%20Song%20Of%20Storms.mp3?alt=media&token=c78bb523-0026-4f7d-815f-869672c64ac3`,
        title: `Saria's Song - Song Of Storms`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 340,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '4fc26f03-aeac-489e-820c-9f39bf3c65af',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 12 Outro - Glasper.ogg`,
        // storagePathMedium:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 12 Outro - Glasper.ogg',
        // storagePathLow:
        //   'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 12 Outro - Glasper.ogg',
        // urlHigh:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2012%20Outro%20-%20Glasper.ogg?alt=media&token=6187c31e-ed0d-40ad-ab8e-3cb7e316214f',
        // urlMedium:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2012%20Outro%20-%20Glasper.ogg?alt=media&token=6187c31e-ed0d-40ad-ab8e-3cb7e316214f',
        // urlLow:
        //   'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2012%20Outro%20-%20Glasper.ogg?alt=media&token=6187c31e-ed0d-40ad-ab8e-3cb7e316214f',
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 12 Outro - Glasper.mp3`,
        storagePathMedium:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 12 Outro - Glasper.mp3',
        storagePathLow:
          'gs://groov-development-ddc9d.appspot.com/2be2c355-497d-40bb-8739-cd07823ab8d0/68f831e8-e9be-494a-8133-37b6ee12d9ae/BADBADNOTGOOD - BBNG - 12 Outro - Glasper.mp3',
        urlHigh:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2012%20Outro%20-%20Glasper.mp3?alt=media&token=7151b67e-a1e9-4540-82d8-4a20a6a57c1f',
        urlMedium:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2012%20Outro%20-%20Glasper.mp3?alt=media&token=7151b67e-a1e9-4540-82d8-4a20a6a57c1f',
        urlLow:
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/2be2c355-497d-40bb-8739-cd07823ab8d0%2F68f831e8-e9be-494a-8133-37b6ee12d9ae%2FBADBADNOTGOOD%20-%20BBNG%20-%2012%20Outro%20-%20Glasper.mp3?alt=media&token=7151b67e-a1e9-4540-82d8-4a20a6a57c1f',
        title: `Outro - Glasper`,
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 540,
        tagSearchString: 'jazz,hiphop',
      },
      {
        id: '62ab3812-297a-4cb0-a056-1880d36f3a77',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 01 On My Way.ogg`,
        // storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 01 On My Way.ogg`,
        // storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 01 On My Way.ogg`,
        // urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2001%20On%20My%20Way.ogg?alt=media&token=05f8875f-5a44-4084-b3e8-e977d03f4829`,
        // urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2001%20On%20My%20Way.ogg?alt=media&token=05f8875f-5a44-4084-b3e8-e977d03f4829`,
        // urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2001%20On%20My%20Way.ogg?alt=media&token=05f8875f-5a44-4084-b3e8-e977d03f4829`,
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 01 On My Way.mp3`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 01 On My Way.mp3`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 01 On My Way.mp3`,
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2001%20On%20My%20Way.mp3?alt=media&token=50c1c92e-4f29-42b8-a444-67d6da3858de`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2001%20On%20My%20Way.mp3?alt=media&token=50c1c92e-4f29-42b8-a444-67d6da3858de`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2001%20On%20My%20Way.mp3?alt=media&token=50c1c92e-4f29-42b8-a444-67d6da3858de`,
        title: `On My Way`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 650,
        tagSearchString: 'funk,electronic',
      },
      {
        id: 'a7624249-3ceb-4ea6-a183-9ae45a33b7af',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 02 Westin.ogg`,
        // storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 02 Westin.ogg`,
        // storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 02 Westin.ogg`,
        // urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2002%20Westin.ogg?alt=media&token=ec994a0a-51aa-4a50-a797-0a20be017a59`,
        // urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2002%20Westin.ogg?alt=media&token=ec994a0a-51aa-4a50-a797-0a20be017a59`,
        // urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2002%20Westin.ogg?alt=media&token=ec994a0a-51aa-4a50-a797-0a20be017a59`,
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 02 Westin.mp3`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 02 Westin.mp3`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 02 Westin.mp3`,
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2002%20Westin.mp3?alt=media&token=ee722ae5-a9e8-4a99-ba64-6790d0bbda6d`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2002%20Westin.mp3?alt=media&token=ee722ae5-a9e8-4a99-ba64-6790d0bbda6d`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2002%20Westin.mp3?alt=media&token=ee722ae5-a9e8-4a99-ba64-6790d0bbda6d`,
        title: `Westin`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 760,
        tagSearchString: 'funk,electronic',
      },
      {
        id: 'b2f1f98e-22e7-4e08-b4bc-fa6f742e1063',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 03 Big Nite City (Sax Mix).ogg`,
        // storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 03 Big Nite City (Sax Mix).ogg`,
        // storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 03 Big Nite City (Sax Mix).ogg`,
        // urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2003%20Big%20Nite%20City%20(Sax%20Mix).ogg?alt=media&token=18083e7d-0a78-40ea-ba2e-8b8cbf61aab6`,
        // urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2003%20Big%20Nite%20City%20(Sax%20Mix).ogg?alt=media&token=18083e7d-0a78-40ea-ba2e-8b8cbf61aab6`,
        // urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2003%20Big%20Nite%20City%20(Sax%20Mix).ogg?alt=media&token=18083e7d-0a78-40ea-ba2e-8b8cbf61aab6`,
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 03 Big Nite City (Sax Mix).mp3`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 03 Big Nite City (Sax Mix).mp3`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 03 Big Nite City (Sax Mix).mp3`,
        urlHigh: `hhttps://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2003%20Big%20Nite%20City%20(Sax%20Mix).mp3?alt=media&token=3579205d-3086-4ada-86ba-2f7592dc41c1`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2003%20Big%20Nite%20City%20(Sax%20Mix).mp3?alt=media&token=3579205d-3086-4ada-86ba-2f7592dc41c1`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2003%20Big%20Nite%20City%20(Sax%20Mix).mp3?alt=media&token=3579205d-3086-4ada-86ba-2f7592dc41c1`,
        title: `Big Nite City (Sax Mix)`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 450,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '1f4f0aef-3d99-43a1-9e04-93bdc3926f49',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 04 Castle 2 Castle.ogg`,
        // storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 04 Castle 2 Castle.ogg`,
        // storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 04 Castle 2 Castle.ogg`,
        // urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2004%20Castle%202%20Castle.ogg?alt=media&token=5bce5e93-0905-438f-9af0-cbcdfbea47ba`,
        // urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2004%20Castle%202%20Castle.ogg?alt=media&token=5bce5e93-0905-438f-9af0-cbcdfbea47ba`,
        // urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2004%20Castle%202%20Castle.ogg?alt=media&token=5bce5e93-0905-438f-9af0-cbcdfbea47ba`,
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 04 Castle 2 Castle.mp3`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 04 Castle 2 Castle.mp3`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 04 Castle 2 Castle.mp3`,
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2004%20Castle%202%20Castle.mp3?alt=media&token=90d97ed6-cc59-4f71-a803-6f0183c21915`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2004%20Castle%202%20Castle.mp3?alt=media&token=90d97ed6-cc59-4f71-a803-6f0183c21915`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2004%20Castle%202%20Castle.mp3?alt=media&token=90d97ed6-cc59-4f71-a803-6f0183c21915`,
        title: `Castle 2 Castle`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 760,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '556ba9f7-af5a-49e8-a6a5-a35446be59cf',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 05 Ocean Park (feat. Just Tony).ogg`,
        // storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 05 Ocean Park (feat. Just Tony).ogg`,
        // storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 05 Ocean Park (feat. Just Tony).ogg`,
        // urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2005%20Ocean%20Park%20(feat.%20Just%20Tony).ogg?alt=media&token=981a8948-4bb3-47b9-801b-420c0279a62e`,
        // urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2005%20Ocean%20Park%20(feat.%20Just%20Tony).ogg?alt=media&token=981a8948-4bb3-47b9-801b-420c0279a62e`,
        // urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2005%20Ocean%20Park%20(feat.%20Just%20Tony).ogg?alt=media&token=981a8948-4bb3-47b9-801b-420c0279a62e`,
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 05 Ocean Park (feat. Just Tony).mp3`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 05 Ocean Park (feat. Just Tony).mp3`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 05 Ocean Park (feat. Just Tony).mp3`,
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2005%20Ocean%20Park%20(feat.%20Just%20Tony).mp3?alt=media&token=1f750b70-d0a0-415e-8016-d5bb12bae3cb`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2005%20Ocean%20Park%20(feat.%20Just%20Tony).mp3?alt=media&token=1f750b70-d0a0-415e-8016-d5bb12bae3cb`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2005%20Ocean%20Park%20(feat.%20Just%20Tony).mp3?alt=media&token=1f750b70-d0a0-415e-8016-d5bb12bae3cb`,
        title: `Ocean Park (feat. Just Tony)`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 760,
        tagSearchString: 'funk,electronic',
      },
      {
        id: 'afc72c6f-0e51-404e-9eca-536172390859',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 06 Tuff Luv.ogg`,
        // storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 06 Tuff Luv.ogg`,
        // storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 06 Tuff Luv.ogg`,
        // urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2006%20Tuff%20Luv.ogg?alt=media&token=ee5145ed-bf5f-4f87-b8a3-91087c30c86b`,
        // urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2006%20Tuff%20Luv.ogg?alt=media&token=ee5145ed-bf5f-4f87-b8a3-91087c30c86b`,
        // urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2006%20Tuff%20Luv.ogg?alt=media&token=ee5145ed-bf5f-4f87-b8a3-91087c30c86b`,
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 06 Tuff Luv.mp3`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 06 Tuff Luv.mp3`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 06 Tuff Luv.mp3`,
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2006%20Tuff%20Luv.mp3?alt=media&token=62820477-0646-4e8e-b775-d5b83810a4dc`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2006%20Tuff%20Luv.mp3?alt=media&token=62820477-0646-4e8e-b775-d5b83810a4dc`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2006%20Tuff%20Luv.mp3?alt=media&token=62820477-0646-4e8e-b775-d5b83810a4dc`,
        title: `Tuff Luv`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 880,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '6f45eb26-c731-4686-8046-4fbc2b7960cb',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 07 Afterglo.ogg`,
        // storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 07 Afterglo.ogg`,
        // storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 07 Afterglo.ogg`,
        // urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2007%20Afterglo.ogg?alt=media&token=73a5ff2b-3beb-4e23-9036-0859d9bfb7a5`,
        // urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2007%20Afterglo.ogg?alt=media&token=73a5ff2b-3beb-4e23-9036-0859d9bfb7a5`,
        // urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2007%20Afterglo.ogg?alt=media&token=73a5ff2b-3beb-4e23-9036-0859d9bfb7a5`,
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 07 Afterglo.mp3`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 07 Afterglo.mp3`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 07 Afterglo.mp3`,
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2007%20Afterglo.mp3?alt=media&token=f40a7e02-c1a7-41b3-b6fd-dac2f5dd3349`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2007%20Afterglo.mp3?alt=media&token=f40a7e02-c1a7-41b3-b6fd-dac2f5dd3349`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2007%20Afterglo.mp3?alt=media&token=f40a7e02-c1a7-41b3-b6fd-dac2f5dd3349`,
        title: `Afterglo`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 980,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '14a9b933-11dc-43a0-b8ee-b92e2b5e015c',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 08 Sonatine.ogg`,
        // storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 08 Sonatine.ogg`,
        // storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 08 Sonatine.ogg`,
        // urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2008%20Sonatine.ogg?alt=media&token=e6e97225-625f-4599-a155-d84d7e3efd50`,
        // urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2008%20Sonatine.ogg?alt=media&token=e6e97225-625f-4599-a155-d84d7e3efd50`,
        // urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2008%20Sonatine.ogg?alt=media&token=e6e97225-625f-4599-a155-d84d7e3efd50`,
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 08 Sonatine.mp3`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 08 Sonatine.mp3`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/4c8e2a06-23a0-4434-bc84-181222c4f4e3/Benedek - Bene's World - 08 Sonatine.mp3`,
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2008%20Sonatine.mp3?alt=media&token=f53f1a41-009f-40fb-8674-2cc16326a7c4`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2008%20Sonatine.mp3?alt=media&token=f53f1a41-009f-40fb-8674-2cc16326a7c4`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F4c8e2a06-23a0-4434-bc84-181222c4f4e3%2FBenedek%20-%20Bene's%20World%20-%2008%20Sonatine.mp3?alt=media&token=f53f1a41-009f-40fb-8674-2cc16326a7c4`,
        title: `Sonantine`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 870,
        tagSearchString: 'funk,electronic',
      },
      {
        id: 'cce7d3b8-f1c2-4f45-8170-b7b8e51ecd6a',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 01 Coolin'.ogg`,
        // storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 01 Coolin'.ogg`,
        // storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 01 Coolin'.ogg`,
        // urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2001%20Coolin'.ogg?alt=media&token=1f94b38b-6543-4e50-8c55-27f1593a163c`,
        // urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2001%20Coolin'.ogg?alt=media&token=1f94b38b-6543-4e50-8c55-27f1593a163c`,
        // urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2001%20Coolin'.ogg?alt=media&token=1f94b38b-6543-4e50-8c55-27f1593a163c`,
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 01 Coolin'.mp3`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 01 Coolin'.mp3`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 01 Coolin'.mp3`,
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2001%20Coolin'.mp3?alt=media&token=fd4160d0-dfbb-46d2-aa5c-1464ab7f2b79`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2001%20Coolin'.mp3?alt=media&token=fd4160d0-dfbb-46d2-aa5c-1464ab7f2b79`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2001%20Coolin'.mp3?alt=media&token=fd4160d0-dfbb-46d2-aa5c-1464ab7f2b79`,
        title: `Coolin'`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 730,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '4199509d-56aa-4cfd-a3de-760ed35f068e',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 02 Ryukyu.ogg`,
        // storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 02 Ryukyu.ogg`,
        // storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 02 Ryukyu.ogg`,
        // urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2002%20Ryukyu.ogg?alt=media&token=27340be8-5bfe-4507-b1ba-0fc80fed34c1`,
        // urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2002%20Ryukyu.ogg?alt=media&token=27340be8-5bfe-4507-b1ba-0fc80fed34c1`,
        // urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2002%20Ryukyu.ogg?alt=media&token=27340be8-5bfe-4507-b1ba-0fc80fed34c1`,
        h: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 02 Ryukyu.mp3`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 02 Ryukyu.mp3`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 02 Ryukyu.mp3`,
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2002%20Ryukyu.mp3?alt=media&token=99dc4dba-c850-46ac-8e5d-a1f3df068ad3`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2002%20Ryukyu.mp3?alt=media&token=99dc4dba-c850-46ac-8e5d-a1f3df068ad3`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2002%20Ryukyu.mp3?alt=media&token=99dc4dba-c850-46ac-8e5d-a1f3df068ad3`,
        title: `Ryukyu`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 480,
        tagSearchString: 'funk,electronic',
      },
      {
        id: '53ad1742-514a-4baf-9238-41e18f7d6c0d',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 03 Voices.ogg`,
        // storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 03 Voices.ogg`,
        // storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 03 Voices.ogg`,
        // urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2003%20Voices.ogg?alt=media&token=9967e0bf-790e-4f4b-9705-8c7b631923c5`,
        // urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2003%20Voices.ogg?alt=media&token=9967e0bf-790e-4f4b-9705-8c7b631923c5`,
        // urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2003%20Voices.ogg?alt=media&token=9967e0bf-790e-4f4b-9705-8c7b631923c5`,
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 03 Voices.mp3`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 03 Voices.mp3`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 03 Voices.mp3`,
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2003%20Voices.mp3?alt=media&token=63b30527-e64f-403b-9a7e-2f11d90a0662`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2003%20Voices.mp3?alt=media&token=63b30527-e64f-403b-9a7e-2f11d90a0662`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2003%20Voices.mp3?alt=media&token=63b30527-e64f-403b-9a7e-2f11d90a0662`,
        title: `Voices`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 760,
        tagSearchString: 'funk,electronic',
      },
      {
        id: 'd4d1ff4e-5424-4ead-b6ed-eddcba9c3239',
        // storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 04 Angeles Vista.ogg`,
        // storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 04 Angeles Vista.ogg`,
        // storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 04 Angeles Vista.ogg`,
        // urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2004%20Angeles%20Vista.ogg?alt=media&token=3a894b80-a004-4f69-9e18-696d86d3bb39`,
        // urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2004%20Angeles%20Vista.ogg?alt=media&token=3a894b80-a004-4f69-9e18-696d86d3bb39`,
        // urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2004%20Angeles%20Vista.ogg?alt=media&token=3a894b80-a004-4f69-9e18-696d86d3bb39`,
        storagePathHigh: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 04 Angeles Vista.mp3`,
        storagePathMedium: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 04 Angeles Vista.mp3`,
        storagePathLow: `gs://groov-development-ddc9d.appspot.com/81a033ac-7431-4a42-a3db-3eb19b3158ae/868965d4-a3e1-4434-ab86-7c7d8522d09e/Benedek - Coolin' - EP - 04 Angeles Vista.mp3`,
        urlHigh: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2004%20Angeles%20Vista.mp3?alt=media&token=17b7d881-58a2-4de0-a23e-f953cf1732ba`,
        urlMedium: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2004%20Angeles%20Vista.mp3?alt=media&token=17b7d881-58a2-4de0-a23e-f953cf1732ba`,
        urlLow: `https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/81a033ac-7431-4a42-a3db-3eb19b3158ae%2F868965d4-a3e1-4434-ab86-7c7d8522d09e%2FBenedek%20-%20Coolin'%20-%20EP%20-%2004%20Angeles%20Vista.mp3?alt=media&token=17b7d881-58a2-4de0-a23e-f953cf1732ba`,
        title: `Angeles Vista`,
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        albumId: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        labelId: 'a70c7da8-a350-40ad-a7d2-d5ba1a7bbe65',
        createdAt: new Date(),
        updatedAt: new Date(),
        active: true,
        playCount: 7770,
        tagSearchString: 'funk,electronic',
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('song', null, {});
  },
};
