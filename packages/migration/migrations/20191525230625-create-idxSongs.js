'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE INDEX idxSongs ON songs USING zombodb ((songs.*)) WITH (url="es01:9200/");');
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP INDEX idxSongs;');
  }
};
