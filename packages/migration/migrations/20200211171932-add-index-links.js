'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`ALTER INDEX idxSongs SET (options='id=<artists.idxArtists>id');`);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DROP INDEX idxSongs;`);
  }
};
