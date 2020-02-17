'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE INDEX idxAlbums ON albums USING zombodb ((albums.*)) WITH (url="es01:9200/");');
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP INDEX idxAlbums;');
  }
};
