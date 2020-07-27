'use strict';
module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.query(
      `CREATE INDEX idxSong ON song USING zombodb ((song.*)) WITH (url="${process.env.ELASTICSEARCH_HOST}:9200/");`
    );
  },
  down: (queryInterface) => {
    return queryInterface.sequelize.query('DROP INDEX idxSong;');
  },
};
