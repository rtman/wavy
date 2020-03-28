'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      'CREATE INDEX idxPlaylists ON playlists USING zombodb ((playlists.*)) WITH (url="es01:9200/");'
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP INDEX idxPlaylists;');
  },
};
