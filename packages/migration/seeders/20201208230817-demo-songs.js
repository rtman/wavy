'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const artistsQuery = await queryInterface.sequelize.query(`SELECT id, name from artists;`);
    const artistRows = artistsQuery[0];
    console.log('artistRows', artistRows);

    await queryInterface.bulkInsert('songs', [
      {
        url: 'gs://groov-development-ddc9d.appspot.com/András - B1. Gold Coast (House Mix).ogg',
        title: 'Gold Coast (House Mix)',
        artist_id: artistRows.find((artist) => artist.name === 'András').id,
        album: 'Untitled',
        genre: 'House',
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 298,
        artwork: 'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'gs://groov-development-ddc9d.appspot.com/András - B1. Gold Coast (House Mix).ogg',
        title: 'TEST - Gold Coast (House Mix) - TEST',
        artist_id: artistRows.find((artist) => artist.name === 'András').id,
        album: 'Untitled',
        genre: 'House',
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 298,
        artwork: 'gs://groov-development-ddc9d.appspot.com/andras-untitled.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'gs://groov-development-ddc9d.appspot.com/B2_Exit_Point_Mastered_16.ogg',
        title: 'Exit Point',
        artist_id: artistRows.find((artist) => artist.name === 'Raf Reza').id,
        album: 'Moods from the Multiverse',
        genre: 'Space',
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        duration: 254,
        artwork: 'gs://groov-development-ddc9d.appspot.com/HTH013 art.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('songs', null, {});
  }
};