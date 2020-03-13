'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE INDEX idxUsers ON users USING zombodb ((users.*)) WITH (url="es01:9200/");');
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP INDEX idxUsers;');
  }
};