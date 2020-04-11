'use strict';
module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.query(
      'CREATE INDEX idxPlaylist ON playlist USING zombodb ((playlist.*)) WITH (url="es01:9200/");'
    );
  },
  down: (queryInterface) => {
    return queryInterface.sequelize.query('DROP INDEX idxPlaylist;');
  },
};
