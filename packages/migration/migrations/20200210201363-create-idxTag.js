'use strict';
module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.query(
      `CREATE INDEX idxTag ON tag USING zombodb ((tag.*)) WITH (url="${process.env.ELASTICSEARCH_HOST}:9200/");`
    );
  },
  down: (queryInterface) => {
    return queryInterface.sequelize.query('DROP INDEX idxTag;');
  },
};
