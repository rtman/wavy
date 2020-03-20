'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE INDEX idxUser ON user USING zombodb ((user.*)) WITH (url="es01:9200/");');
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP INDEX idxUser;');
  }
};
