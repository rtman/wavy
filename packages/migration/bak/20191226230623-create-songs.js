'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        // autoIncrement: false,
        // defaultValue: Sequelize.UUIDV4,
        // type: Sequelize.UUID
      },
      title: {
        type: Sequelize.TEXT
      },
      artistId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'artists', // name of Source model
          key: 'id' // key in Source model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      url: {
        type: Sequelize.TEXT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('songs');
  }
};
