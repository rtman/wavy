'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('songs', [
      {
        url: 'gs://groov-development-ddc9d.appspot.com/András - B1. Gold Coast (House Mix).ogg',
        title: 'Gold Coast (House Mix)',
        artist: 'András',
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
        artist: 'Raf Reza',
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('songs', null, {});
  }
};
