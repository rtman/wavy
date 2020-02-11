'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      'CREATE VIEW songs_with_artists AS SELECT songs.*, artists.name FROM songs LEFT JOIN artists ON ("artistId" = artists.id);'
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP VIEW songs_with_artists;');
  }
};
