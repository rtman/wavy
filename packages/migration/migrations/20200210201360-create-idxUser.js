'use strict';
module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.query(
      `CREATE INDEX idxUser ON "user" USING zombodb (("user".*)) WITH (url="${process.env.ELASTICSEARCH_HOST}:9200/");`
    );
  },
  down: (queryInterface) => {
    return queryInterface.sequelize.query('DROP INDEX idxUser;');
  },
};
