'use strict';
module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.query(
      'CREATE INDEX idxLabel ON label USING zombodb ((label.*)) WITH (url="es01:9200/");'
    );
  },
  down: (queryInterface) => {
    return queryInterface.sequelize.query('DROP INDEX idxLabel;');
  },
};
