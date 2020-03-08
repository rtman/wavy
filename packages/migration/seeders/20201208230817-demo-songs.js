'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const artistsQuery = await queryInterface.sequelize.query(`SELECT id, name from artists;`);
    const artistRows = artistsQuery[0];
    console.log('artistRows', artistRows);

    await queryInterface.bulkInsert('songs', [
      {
        id: 1,
        url: 'gs://groov-development-ddc9d.appspot.com/András - B1. Gold Coast (House Mix).ogg',
        title: 'Gold Coast (House Mix)',
        artist_id: artistRows.find((artist) => artist.name === 'András').id,
        album_id: 1,
        genres: ['House', 'Electronic'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 298,
        image: 'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        url: 'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        title: 'Exit Point',
        artist_id: artistRows.find((artist) => artist.name === 'Raf Reza').id,
        album_id: 2,
        genres: ['Ambient', 'Space'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        url: 'gs://groov-development-ddc9d.appspot.com/Raf Reza - A1_C_Quenz_Mastered_16.ogg',
        title: 'C Quenz',
        artist_id: artistRows.find((artist) => artist.name === 'Raf Reza').id,
        album_id: 2,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        url: 'gs://groov-development-ddc9d.appspot.com/Raf Reza - A2_Cruising_Speed_Mastered_16.ogg',
        title: 'Cruising Speed',
        artist_id: artistRows.find((artist) => artist.name === 'Raf Reza').id,
        album_id: 2,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        url: 'gs://groov-development-ddc9d.appspot.com/Raf Reza - B1_Rogue_Mastered_16.ogg',
        title: 'Rogue',
        artist_id: artistRows.find((artist) => artist.name === 'Raf Reza').id,
        album_id: 2,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        url: 'gs://groov-development-ddc9d.appspot.com/Raf Reza - Pineapple Island.ogg',
        title: 'Pineapple Island',
        artist_id: artistRows.find((artist) => artist.name === 'Raf Reza').id,
        album_id: 3,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/raf reza - proto.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        url: 'gs://groov-development-ddc9d.appspot.com/Raf Reza - Space Strut.ogg',
        title: 'Space Strut',
        artist_id: artistRows.find((artist) => artist.name === 'Raf Reza').id,
        album_id: 3,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/raf reza - proto.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        url: 'gs://groov-development-ddc9d.appspot.com/Raf Reza - Why You Gotta_.ogg',
        title: 'Why You Gotta',
        artist_id: artistRows.find((artist) => artist.name === 'Raf Reza').id,
        album_id: 3,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/raf reza - proto.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        url: 'gs://groov-development-ddc9d.appspot.com/ESB - On Cue.ogg',
        title: 'On Cue',
        artist_id: artistRows.find((artist) => artist.name === 'ESB').id,
        album_id: 4,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        url: 'gs://groov-development-ddc9d.appspot.com/ESB - On Cue (Vakula Remix).ogg',
        title: 'On Cue (Vakula Remix)',
        artist_id: artistRows.find((artist) => artist.name === 'ESB').id,
        album_id: 4,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        url: `gs://groov-development-ddc9d.appspot.com/ESB - time won't forget.ogg`,
        title: `Time Won't Forget`,
        artist_id: artistRows.find((artist) => artist.name === 'ESB').id,
        album_id: 4,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        url: `gs://groov-development-ddc9d.appspot.com/ESB - terrium.ogg`,
        title: `Terrium`,
        artist_id: artistRows.find((artist) => artist.name === 'ESB').id,
        album_id: 4,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/HTH002_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        url: `gs://groov-development-ddc9d.appspot.com/ESB - Q1.ogg`,
        title: `Q1`,
        artist_id: artistRows.find((artist) => artist.name === 'ESB').id,
        album_id: 5,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        url: `ggs://groov-development-ddc9d.appspot.com/ESB - Spaneaur.ogg`,
        title: `Spaneaur`,
        artist_id: artistRows.find((artist) => artist.name === 'ESB').id,
        album_id: 5,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        url: `gs://groov-development-ddc9d.appspot.com/ESB - Whisper Theme.ogg`,
        title: `Whisper Theme`,
        artist_id: artistRows.find((artist) => artist.name === 'ESB').id,
        album_id: 5,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        url: `gs://groov-development-ddc9d.appspot.com/ESB - 20% Deeper.ogg`,
        title: `20% Deeper`,
        artist_id: artistRows.find((artist) => artist.name === 'ESB').id,
        album_id: 5,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        url: `gs://groov-development-ddc9d.appspot.com/ESB - Fixation.ogg`,
        title: `Fixation`,
        artist_id: artistRows.find((artist) => artist.name === 'ESB').id,
        album_id: 6,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        url: `gs://groov-development-ddc9d.appspot.com/ESB - GLWL.ogg`,
        title: `GLWL`,
        artist_id: artistRows.find((artist) => artist.name === 'ESB').id,
        album_id: 6,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        url: `gs://groov-development-ddc9d.appspot.com/ESB - Make It Thru.ogg`,
        title: `Make It Thru`,
        artist_id: artistRows.find((artist) => artist.name === 'ESB').id,
        album_id: 6,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        url: `gs://groov-development-ddc9d.appspot.com/ESB - Mist Outro.ogg`,
        title: `Mist Outro`,
        artist_id: artistRows.find((artist) => artist.name === 'ESB').id,
        album_id: 6,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/HTH005_A_digital.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 01 Foreign Parts.ogg`,
        title: `Foreign Parts`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 7,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 02 Sondag.ogg`,
        title: `Sondag`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 7,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 03 Gunvor.ogg`,
        title: `Gunvor`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 7,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 04 Moodlight.ogg`,
        title: `Moodlight`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 7,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 25,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 05 Brodir.ogg`,
        title: `Brodir`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 7,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 26,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 06 Systir.ogg`,
        title: `Systir`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 7,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 27,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 03 Gunvor.ogg`,
        title: `Gunvor`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 7,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 28,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Foreign Parts - 07 Modir.ogg`,
        title: `Modir`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 7,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - foreign parts.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 29,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW005 - 01 MT01.ogg`,
        title: `MT01`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 8,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - sw005.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 30,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW005 - 02 MT02.ogg`,
        title: `MT02`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 8,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - sw005.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 31,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW004 - 01 Everybody Looks Good At The Restaurant.ogg`,
        title: `Everybody Looks Good At The Restaurant`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 9,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 32,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW004 - 02 I Will.ogg`,
        title: `I Will`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 9,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 33,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW004 - 03 Lifestyle w- James Booth.ogg`,
        title: `Lifestyle w- James Booth`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 9,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 34,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - SW004 - 04 I Won't.ogg`,
        title: `I Won't`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 9,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood  - sw 004.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 35,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Submarine - 01 Swimmers.ogg`,
        title: `Swimmers`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 10,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 36,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Submarine - 02 Mariana Dub.ogg`,
        title: `Mariana Dub`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 10,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 37,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Submarine - 03 Submarine.ogg`,
        title: `Submarine`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 10,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 38,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - Submarine - 04 Submarine (Project Pablo Remix).ogg`,
        title: `Submarine (Project Pablo Remix)`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 10,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/seb wildblood - submarine.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 39,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 01 I Will.ogg`,
        title: `I Will`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 11,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 40,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 02 U.ogg`,
        title: `U`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 11,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 41,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 03 Lifestyle w- James Booth.ogg`,
        title: `Lifestyle w- James Booth`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 11,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 42,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 04 I Won't.ogg`,
        title: `I Won't`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 11,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 43,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 05 Bonsai Care.ogg`,
        title: `Bonsai Care`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 11,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 44,
        url: `gs://groov-development-ddc9d.appspot.com/Seb Wildblood - U - 06 Crazy Eyes, Eric.ogg`,
        title: `Crazy Eyes, Eric`,
        artist_id: artistRows.find((artist) => artist.name === 'Seb Wildblood').id,
        album_id: 11,
        genres: ['Electronic', 'House'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/sebwildblood - u.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 45,
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 01 Based Is How You Feel Inside.ogg`,
        title: `Based Is How You Feel Inside`,
        artist_id: artistRows.find((artist) => artist.name === 'Bad Bad Not Good').id,
        album_id: 12,
        genres: ['Jazz', 'HipHop'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 46,
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 02 Fall In Love.ogg`,
        title: `Fall In Love`,
        artist_id: artistRows.find((artist) => artist.name === 'Bad Bad Not Good').id,
        album_id: 12,
        genres: ['Jazz', 'HipHop'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 47,
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 03 Improvised Jam.ogg`,
        title: `Improvised Jam`,
        artist_id: artistRows.find((artist) => artist.name === 'Bad Bad Not Good').id,
        album_id: 12,
        genres: ['Jazz', 'HipHop'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 48,
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 04 Mass Appeal - Transmission.ogg`,
        title: `Mass Appeal - Transmission`,
        artist_id: artistRows.find((artist) => artist.name === 'Bad Bad Not Good').id,
        album_id: 12,
        genres: ['Jazz', 'HipHop'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 49,
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 05 I Got A Bad Feeling About This.ogg`,
        title: `I Got A Bad Feeling About This`,
        artist_id: artistRows.find((artist) => artist.name === 'Bad Bad Not Good').id,
        album_id: 12,
        genres: ['Jazz', 'HipHop'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 50,
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 06 Salmonella.ogg`,
        title: `Salmonella`,
        artist_id: artistRows.find((artist) => artist.name === 'Bad Bad Not Good').id,
        album_id: 12,
        genres: ['Jazz', 'HipHop'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 51,
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 07 Freedom - Billium Evans (Prod. Seeds of Yaris).ogg`,
        title: `Freedom - Billium Evans (Prod. Seeds of Yaris)`,
        artist_id: artistRows.find((artist) => artist.name === 'Bad Bad Not Good').id,
        album_id: 12,
        genres: ['Jazz', 'HipHop'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 52,
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 08 The World Is Yours - Brooklyn Zoo.ogg`,
        title: `The World Is Yours - Brooklyn Zoo`,
        artist_id: artistRows.find((artist) => artist.name === 'Bad Bad Not Good').id,
        album_id: 12,
        genres: ['Jazz', 'HipHop'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 53,
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 09 Listeriosis.ogg`,
        title: `Listeriosis`,
        artist_id: artistRows.find((artist) => artist.name === 'Bad Bad Not Good').id,
        album_id: 12,
        genres: ['Jazz', 'HipHop'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 54,
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 10 Camel.ogg`,
        title: `Camel`,
        artist_id: artistRows.find((artist) => artist.name === 'Bad Bad Not Good').id,
        album_id: 12,
        genres: ['Jazz', 'HipHop'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 55,
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 11 Title Theme - Saria's Song - Song Of Storms.ogg`,
        title: `Saria's Song - Song Of Storms`,
        artist_id: artistRows.find((artist) => artist.name === 'Bad Bad Not Good').id,
        album_id: 12,
        genres: ['Jazz', 'HipHop'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 56,
        url: `gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - 12 Outro - Glasper.ogg`,
        title: `Outro - Glasper`,
        artist_id: artistRows.find((artist) => artist.name === 'Bad Bad Not Good').id,
        album_id: 12,
        genres: ['Jazz', 'HipHop'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/BADBADNOTGOOD - BBNG - cover.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 57,
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 01 On My Way.ogg`,
        title: `On My Way`,
        artist_id: artistRows.find((artist) => artist.name === 'Benedek').id,
        album_id: 13,
        genres: ['Funk', 'Electronic'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 58,
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 02 Westin.ogg`,
        title: `Westin`,
        artist_id: artistRows.find((artist) => artist.name === 'Benedek').id,
        album_id: 13,
        genres: ['Funk', 'Electronic'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 59,
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 03 Big Nite City (Sax Mix).ogg`,
        title: `Big Nite City (Sax Mix)`,
        artist_id: artistRows.find((artist) => artist.name === 'Benedek').id,
        album_id: 13,
        genres: ['Funk', 'Electronic'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 60,
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 04 Castle 2 Castle.ogg`,
        title: `Castle 2 Castle`,
        artist_id: artistRows.find((artist) => artist.name === 'Benedek').id,
        album_id: 13,
        genres: ['Funk', 'Electronic'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 61,
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 05 Ocean Park (feat. Just Tony).ogg`,
        title: `Ocean Park (feat. Just Tony)`,
        artist_id: artistRows.find((artist) => artist.name === 'Benedek').id,
        album_id: 13,
        genres: ['Funk', 'Electronic'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 62,
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 06 Tuff Luv.ogg`,
        title: `Tuff Luv`,
        artist_id: artistRows.find((artist) => artist.name === 'Benedek').id,
        album_id: 13,
        genres: ['Funk', 'Electronic'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 63,
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 07 Afterglo.ogg`,
        title: `Afterglo`,
        artist_id: artistRows.find((artist) => artist.name === 'Benedek').id,
        album_id: 13,
        genres: ['Funk', 'Electronic'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 64,
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Bene's World - 08 Sonatine.ogg`,
        title: `Sonantine`,
        artist_id: artistRows.find((artist) => artist.name === 'Benedek').id,
        album_id: 13,
        genres: ['Funk', 'Electronic'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - benes world.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 65,
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Coolin' - EP - 01 Coolin'.ogg`,
        title: `Coolin'`,
        artist_id: artistRows.find((artist) => artist.name === 'Benedek').id,
        album_id: 14,
        genres: ['Funk', 'Electronic'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - coolin.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 66,
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Coolin' - EP - 02 Ryukyu.ogg`,
        title: `Ryukyu`,
        artist_id: artistRows.find((artist) => artist.name === 'Benedek').id,
        album_id: 14,
        genres: ['Funk', 'Electronic'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - coolin.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 67,
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Coolin' - EP - 03 Voices.ogg`,
        title: `Voices`,
        artist_id: artistRows.find((artist) => artist.name === 'Benedek').id,
        album_id: 14,
        genres: ['Funk', 'Electronic'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        image: 'gs://groov-development-ddc9d.appspot.com/benedek - coolin.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 68,
        url: `gs://groov-development-ddc9d.appspot.com/Benedek - Coolin' - EP - 04 Angeles Vista.ogg`,
        title: `Angeles Vista`,
        artist_id: artistRows.find((artist) => artist.name === 'Benedek').id,
        album_id: 14,
        genres: ['Funk', 'Electronic'],
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
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
