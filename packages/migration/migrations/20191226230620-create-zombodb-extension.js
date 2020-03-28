'use strict';
module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.query('CREATE EXTENSION zombodb;');
  },
  down: (queryInterface) => {
    return queryInterface.sequelize.query('DROP EXTENSION zombodb;');
  },
};
