'use strict';
module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.query(
      `CREATE INDEX idxAlbum ON album USING zombodb ((album.*)) WITH (url="${process.env.ELASTICSEARCH_HOST}:9200/");`
    );
  },
  down: (queryInterface) => {
    return queryInterface.sequelize.query('DROP INDEX idxAlbum;');
  },
};
