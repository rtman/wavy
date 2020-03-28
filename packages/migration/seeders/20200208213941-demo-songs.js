'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const artistsQuery = await queryInterface.sequelize.query(
      `SELECT id, name from artists;`
    );
    const artistRows = artistsQuery[0];

    await queryInterface.bulkInsert('songs', [
      {
        id: 'ef8bfa7c-d2b4-49b5-9da9-17978be4e9a4',
        url:
          'gs://groov-development-ddc9d.appspot.com/András - B1. Gold Coast (House Mix).ogg',
        title: 'Gold Coast (House Mix)',
        artistId: artistRows.find((artist) => artist.name === 'András').id,
        albumId: '6960fd68-732e-4c3c-8995-8d72989f53db',
        genres: ['House', 'Electronic'],
        releaseDate: '2014-05-20T07:00:00+00:00', // RFC 3339
        image: 'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3c3d5f29-d675-41b3-8ed6-c2c781c3a606',
        url:
          'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        title: 'Exit Point',
        artistId: artistRows.find((artist) => artist.name === 'Raf Reza').id,
        albumId: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        genres: ['Ambient', 'Space'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '0eaaa270-9373-458b-a6d6-7fd013931245',
        url:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - A1_C_Quenz_Mastered_16.ogg',
        title: 'C Quenz',
        artistId: artistRows.find((artist) => artist.name === 'Raf Reza').id,
        albumId: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '20872940-4952-4d3e-84b7-d68529af7a91',
        url:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - A2_Cruising_Speed_Mastered_16.ogg',
        title: 'Cruising Speed',
        artistId: artistRows.find((artist) => artist.name === 'Raf Reza').id,
        albumId: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'fc0be79a-274a-4bf8-98a5-b580b7a1bac5',
        url:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - B1_Rogue_Mastered_16.ogg',
        title: 'Rogue',
        artistId: artistRows.find((artist) => artist.name === 'Raf Reza').id,
        albumId: '89c2d3fd-c9c0-45c4-98c2-74386449ae2b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '0694f13e-f8ca-406d-8b6b-fd081e1c930a',
        url:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - Pineapple Island.ogg',
        title: 'Pineapple Island',
        artistId: artistRows.find((artist) => artist.name === 'Raf Reza').id,
        albumId: 'f2028bf3-ed1c-4057-b430-c3374116a959',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/raf reza - proto.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '995d0081-63ee-4fc2-8a61-fc67928c4a12',
        url:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - Space Strut.ogg',
        title: 'Space Strut',
        artistId: artistRows.find((artist) => artist.name === 'Raf Reza').id,
        albumId: 'f2028bf3-ed1c-4057-b430-c3374116a959',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/raf reza - proto.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'b5ca4741-9d14-4513-8e10-f163f9dd5623',
        url:
          'gs://groov-development-ddc9d.appspot.com/Raf Reza - Why You Gotta_.ogg',
        title: 'Why You Gotta',
        artistId: artistRows.find((artist) => artist.name === 'Raf Reza').id,
        albumId: 'f2028bf3-ed1c-4057-b430-c3374116a959',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/raf reza - proto.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '6cea15ba-0be2-410a-8bdc-acd101685a80',
        url: 'gs://groov-development-ddc9d.appspot.com/ESB - On Cue.ogg',
        title: 'On Cue',
        artistId: artistRows.find((artist) => artist.name === 'ESB').id,
        albumId: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1d7f1de6-20ca-4656-ac43-ec9bde834510',
        url:
          'gs://groov-development-ddc9d.appspot.com/ESB - On Cue (Vakula Remix).ogg',
        title: 'On Cue (Vakula Remix)',
        artistId: artistRows.find((artist) => artist.name === 'ESB').id,
        albumId: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '56c8a3cc-53af-4de3-ac91-c16a5c35cd0f',
        url: `gs://groov-development-ddc9d.appspot.com/ESB - time won't forget.ogg`,
        title: `Time Won't Forget`,
        artistId: artistRows.find((artist) => artist.name === 'ESB').id,
        albumId: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1219f0dc-b472-4832-9bd9-23e101b0596d',
        url: `gs://groov-development-ddc9d.appspot.com/ESB - terrium.ogg`,
        title: `Terrium`,
        artistId: artistRows.find((artist) => artist.name === 'ESB').id,
        albumId: 'b8fc8b71-509c-400a-831a-25ef04a9ec3b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'c35b0e2e-99b6-4a08-aae2-a312e06b86ca',
        url: `gs://groov-development-ddc9d.appspot.com/ESB - Q1.ogg`,
        title: `Q1`,
        artistId: artistRows.find((artist) => artist.name === 'ESB').id,
        albumId: '911684b3-c073-4b33-ae2a-014346df4bc8',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '0de438c0-a710-4fb2-ba8e-7aaf55a4e2e4',
        url: `ggs://groov-development-ddc9d.appspot.com/ESB - Spaneaur.ogg`,
        title: `Spaneaur`,
        artistId: artistRows.find((artist) => artist.name === 'ESB').id,
        albumId: '911684b3-c073-4b33-ae2a-014346df4bc8',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '50ef4fe1-0e5b-4aab-84e8-1ca5e2507071',
        url: `gs://groov-development-ddc9d.appspot.com/ESB - Whisper Theme.ogg`,
        title: `Whisper Theme`,
        artistId: artistRows.find((artist) => artist.name === 'ESB').id,
        albumId: '911684b3-c073-4b33-ae2a-014346df4bc8',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '41bdaaf2-1b2d-4b4a-b4bd-8a2a3914f505',
        url: `gs://groov-development-ddc9d.appspot.com/ESB - 20% Deeper.ogg`,
        title: `20% Deeper`,
        artistId: artistRows.find((artist) => artist.name === 'ESB').id,
        albumId: '911684b3-c073-4b33-ae2a-014346df4bc8',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '8459e7b7-93aa-45ea-a078-4765208af79a',
        url: `gs://groov-development-ddc9d.appspot.com/ESB - Fixation.ogg`,
        title: `Fixation`,
        artistId: artistRows.find((artist) => artist.name === 'ESB').id,
        albumId: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'e9ebfe67-5913-4a41-86d2-dd43ab55e353',
        url: `gs://groov-development-ddc9d.appspot.com/ESB - GLWL.ogg`,
        title: `GLWL`,
        artistId: artistRows.find((artist) => artist.name === 'ESB').id,
        albumId: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2f97ffaa-7b0c-40ea-b341-498347389038',
        url: `gs://groov-development-ddc9d.appspot.com/ESB - Make It Thru.ogg`,
        title: `Make It Thru`,
        artistId: artistRows.find((artist) => artist.name === 'ESB').id,
        albumId: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '279b4cce-edf0-431d-b9d2-fa3171eda9f5',
        url: `gs://groov-development-ddc9d.appspot.com/ESB - Mist Outro.ogg`,
        title: `Mist Outro`,
        artistId: artistRows.find((artist) => artist.name === 'ESB').id,
        albumId: '92d3adf1-59de-4d3c-91ef-3530ed77ea59',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'b98976fc-6a4f-4efe-81f2-13e1f7ddabc0',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 01 Foreign Parts.ogg`,
        title: `Foreign Parts`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2729a114-414b-412b-8b8a-2df40244f8f6',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 02 Sondag.ogg`,
        title: `Sondag`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2adbb9e0-b4bc-48d2-9dff-9fecd2df4775',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 03 Gunvor.ogg`,
        title: `Gunvor`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '6c0cb32e-1495-4d07-ac42-cde370f75d15',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 04 Moodlight.ogg`,
        title: `Moodlight`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '14e987b4-a1c8-4517-9e50-1398c2b52279',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 05 Brodir.ogg`,
        title: `Brodir`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '95b02d5e-054d-4994-bce7-0979e69e1e6c',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 06 Systir.ogg`,
        title: `Systir`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'bbda595d-624b-4646-abfe-f45289ef7f80',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 03 Gunvor.ogg`,
        title: `Gunvor`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'ffb050e7-a023-4c65-9e49-1d5ed9803774',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 07 Modir.ogg`,
        title: `Modir`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: 'a4074c89-741d-409d-9b4e-e933c7311e2b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '6b4971fd-1751-4878-9be8-a8055f8951c3',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW005 - 01 MT01.ogg`,
        title: `MT01`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: '8c587e75-58c0-45e0-a87e-538fbf69848f',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - sw005.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '56e3b234-de56-4849-962a-3c21ed195f9d',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW005 - 02 MT02.ogg`,
        title: `MT02`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: '8c587e75-58c0-45e0-a87e-538fbf69848f',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - sw005.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '857f44a3-6f40-4c95-9b7a-e9789eb62d47',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW004 - 01 Everybody Looks Good At The Restaurant.ogg`,
        title: `Everybody Looks Good At The Restaurant`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5b9734f7-08a1-41b0-855a-81900b611421',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW004 - 02 I Will.ogg`,
        title: `I Will`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4ffc70f7-4aaa-4796-84a8-0b1305278937',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW004 - 03 Lifestyle w- James Booth.ogg`,
        title: `Lifestyle w- James Booth`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '42312cf4-78f5-423f-971b-e792d40e463f',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW004 - 04 I Won't.ogg`,
        title: `I Won't`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: '9d84ba1c-a7f2-438a-9252-4fd1f1ede68b',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '14a16828-d7d5-4933-9b0b-5f878e990150',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Submarine - 01 Swimmers.ogg`,
        title: `Swimmers`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'e89c53a4-477b-4b86-ac7c-16b6ad292e5c',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Submarine - 02 Mariana Dub.ogg`,
        title: `Mariana Dub`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'cec2cc9d-1f93-42c5-b94a-fe1bfc275e5b',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Submarine - 03 Submarine.ogg`,
        title: `Submarine`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3f454fd6-dde9-4412-b4f8-e932a2dc389a',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Submarine - 04 Submarine (Project Pablo Remix).ogg`,
        title: `Submarine (Project Pablo Remix)`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: '2bf20d2f-5847-4c0a-ad64-8ad1fc64e9b4',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '04dd515f-eb5e-4d02-9d34-c1d90d56e23e',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 01 I Will.ogg`,
        title: `I Will`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'c192c16c-2b2f-473c-b562-d7f2aa4f4760',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 02 U.ogg`,
        title: `U`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'c5e4e4b4-29d7-4e32-b910-ed3591d27858',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 03 Lifestyle w- James Booth.ogg`,
        title: `Lifestyle w- James Booth`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '105f00e3-23ff-424d-b747-877e8c51bb56',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 04 I Won't.ogg`,
        title: `I Won't`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'c14fb209-6f90-4dd3-967a-aeb40944e301',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 05 Bonsai Care.ogg`,
        title: `Bonsai Care`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'ddb3c816-3786-4e94-861e-68d0e70ab026',
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 06 Crazy Eyes, Eric.ogg`,
        title: `Crazy Eyes, Eric`,
        artistId: artistRows.find((artist) => artist.name === 'Seb Wildblood')
          .id,
        albumId: 'a5d7286c-0bc9-452b-8401-3dab864860ee',
        genres: ['Electronic', 'House'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '70bdaa3d-eb84-4219-ba22-db79d2bbb223',
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 01 Based Is How You Feel Inside.ogg`,
        title: `Based Is How You Feel Inside`,
        artistId: artistRows.find(
          (artist) => artist.name === 'Bad Bad Not Good'
        ).id,
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        genres: ['Jazz', 'HipHop'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd9c9b094-8c3c-4c2b-96b7-67c0174618af',
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 02 Fall In Love.ogg`,
        title: `Fall In Love`,
        artistId: artistRows.find(
          (artist) => artist.name === 'Bad Bad Not Good'
        ).id,
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        genres: ['Jazz', 'HipHop'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '678706f1-6b87-4602-a231-72c5cac3f355',
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 03 Improvised Jam.ogg`,
        title: `Improvised Jam`,
        artistId: artistRows.find(
          (artist) => artist.name === 'Bad Bad Not Good'
        ).id,
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        genres: ['Jazz', 'HipHop'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'abe6ab8e-fca2-4219-989d-e002832af3aa',
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 04 Mass Appeal - Transmission.ogg`,
        title: `Mass Appeal - Transmission`,
        artistId: artistRows.find(
          (artist) => artist.name === 'Bad Bad Not Good'
        ).id,
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        genres: ['Jazz', 'HipHop'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'e738480a-9cdc-4afc-b870-02c72b894b0b',
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 05 I Got A Bad Feeling About This.ogg`,
        title: `I Got A Bad Feeling About This`,
        artistId: artistRows.find(
          (artist) => artist.name === 'Bad Bad Not Good'
        ).id,
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        genres: ['Jazz', 'HipHop'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '01497634-7270-4157-a530-0104a63dc900',
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 06 Salmonella.ogg`,
        title: `Salmonella`,
        artistId: artistRows.find(
          (artist) => artist.name === 'Bad Bad Not Good'
        ).id,
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        genres: ['Jazz', 'HipHop'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5f7a00aa-1904-4287-a3f5-f9447b193440',
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 07 Freedom - Billium Evans (Prod. Seeds of Yaris).ogg`,
        title: `Freedom - Billium Evans (Prod. Seeds of Yaris)`,
        artistId: artistRows.find(
          (artist) => artist.name === 'Bad Bad Not Good'
        ).id,
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        genres: ['Jazz', 'HipHop'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '7ee03d70-294a-4221-8d67-c88062b5cf2f',
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 08 The World Is Yours - Brooklyn Zoo.ogg`,
        title: `The World Is Yours - Brooklyn Zoo`,
        artistId: artistRows.find(
          (artist) => artist.name === 'Bad Bad Not Good'
        ).id,
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        genres: ['Jazz', 'HipHop'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '9bd56619-12db-4f73-8584-09a7054f46b4',
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 09 Listeriosis.ogg`,
        title: `Listeriosis`,
        artistId: artistRows.find(
          (artist) => artist.name === 'Bad Bad Not Good'
        ).id,
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        genres: ['Jazz', 'HipHop'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'f9d18dd3-aaba-4d5e-b6df-cd68ee4cc070',
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 10 Camel.ogg`,
        title: `Camel`,
        artistId: artistRows.find(
          (artist) => artist.name === 'Bad Bad Not Good'
        ).id,
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        genres: ['Jazz', 'HipHop'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'ee235a85-1c59-4b7b-992a-89f8cfa410ec',
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 11 Title Theme - Saria's Song - Song Of Storms.ogg`,
        title: `Saria's Song - Song Of Storms`,
        artistId: artistRows.find(
          (artist) => artist.name === 'Bad Bad Not Good'
        ).id,
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        genres: ['Jazz', 'HipHop'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4fc26f03-aeac-489e-820c-9f39bf3c65af',
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 12 Outro - Glasper.ogg`,
        title: `Outro - Glasper`,
        artistId: artistRows.find(
          (artist) => artist.name === 'Bad Bad Not Good'
        ).id,
        albumId: '68f831e8-e9be-494a-8133-37b6ee12d9ae',
        genres: ['Jazz', 'HipHop'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '62ab3812-297a-4cb0-a056-1880d36f3a77',
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 01 On My Way.ogg`,
        title: `On My Way`,
        artistId: artistRows.find((artist) => artist.name === 'Benedek').id,
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        genres: ['Funk', 'Electronic'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a7624249-3ceb-4ea6-a183-9ae45a33b7af',
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 02 Westin.ogg`,
        title: `Westin`,
        artistId: artistRows.find((artist) => artist.name === 'Benedek').id,
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        genres: ['Funk', 'Electronic'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'b2f1f98e-22e7-4e08-b4bc-fa6f742e1063',
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 03 Big Nite City (Sax Mix).ogg`,
        title: `Big Nite City (Sax Mix)`,
        artistId: artistRows.find((artist) => artist.name === 'Benedek').id,
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        genres: ['Funk', 'Electronic'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '1f4f0aef-3d99-43a1-9e04-93bdc3926f49',
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 04 Castle 2 Castle.ogg`,
        title: `Castle 2 Castle`,
        artistId: artistRows.find((artist) => artist.name === 'Benedek').id,
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        genres: ['Funk', 'Electronic'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '556ba9f7-af5a-49e8-a6a5-a35446be59cf',
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 05 Ocean Park (feat. Just Tony).ogg`,
        title: `Ocean Park (feat. Just Tony)`,
        artistId: artistRows.find((artist) => artist.name === 'Benedek').id,
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        genres: ['Funk', 'Electronic'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'afc72c6f-0e51-404e-9eca-536172390859',
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 06 Tuff Luv.ogg`,
        title: `Tuff Luv`,
        artistId: artistRows.find((artist) => artist.name === 'Benedek').id,
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        genres: ['Funk', 'Electronic'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '6f45eb26-c731-4686-8046-4fbc2b7960cb',
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 07 Afterglo.ogg`,
        title: `Afterglo`,
        artistId: artistRows.find((artist) => artist.name === 'Benedek').id,
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        genres: ['Funk', 'Electronic'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '14a9b933-11dc-43a0-b8ee-b92e2b5e015c',
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 08 Sonatine.ogg`,
        title: `Sonantine`,
        artistId: artistRows.find((artist) => artist.name === 'Benedek').id,
        albumId: '4c8e2a06-23a0-4434-bc84-181222c4f4e3',
        genres: ['Funk', 'Electronic'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image:
          'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'cce7d3b8-f1c2-4f45-8170-b7b8e51ecd6a',
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Coolin' - EP - 01 Coolin'.ogg`,
        title: `Coolin'`,
        artistId: artistRows.find((artist) => artist.name === 'Benedek').id,
        albumId: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        genres: ['Funk', 'Electronic'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - coolin.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4199509d-56aa-4cfd-a3de-760ed35f068e',
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Coolin' - EP - 02 Ryukyu.ogg`,
        title: `Ryukyu`,
        artistId: artistRows.find((artist) => artist.name === 'Benedek').id,
        albumId: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        genres: ['Funk', 'Electronic'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - coolin.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '53ad1742-514a-4baf-9238-41e18f7d6c0d',
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Coolin' - EP - 03 Voices.ogg`,
        title: `Voices`,
        artistId: artistRows.find((artist) => artist.name === 'Benedek').id,
        albumId: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        genres: ['Funk', 'Electronic'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - coolin.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd4d1ff4e-5424-4ead-b6ed-eddcba9c3239',
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Coolin' - EP - 04 Angeles Vista.ogg`,
        title: `Angeles Vista`,
        artistId: artistRows.find((artist) => artist.name === 'Benedek').id,
        albumId: '868965d4-a3e1-4434-ab86-7c7d8522d09e',
        genres: ['Funk', 'Electronic'],
        releaseDate: '2014-05-20T07:00:00+00:00',
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - coolin.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('songs', null, {});
  }
};
