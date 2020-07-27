'use strict';
module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.query(
      `CREATE INDEX idxArtist ON artist USING zombodb ((artist.*)) WITH (url="${process.env.ELASTICSEARCH_HOST}:9200/");`
    );
  },
  down: (queryInterface) => {
    return queryInterface.sequelize.query('DROP INDEX idxArtist;');
  },
};
