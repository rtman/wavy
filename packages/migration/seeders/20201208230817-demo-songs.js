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
        url: 'gs://groov-development-ddc9d.appspot.com/András - B1. Gold Coast (House Mix).ogg',
        title: 'TEST - Gold Coast (House Mix) - TEST',
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
        id: 3,
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
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('songs', null, {});
  }
};
