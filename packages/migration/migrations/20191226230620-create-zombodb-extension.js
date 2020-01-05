'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION zombodb;');
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP EXTENSION zombodb;');
  }
};
