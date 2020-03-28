'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      'CREATE INDEX idxArtists ON artists USING zombodb ((artists.*)) WITH (url="es01:9200/");'
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP INDEX idxArtists;');
  }
};
