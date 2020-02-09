'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('artists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        // uuid setup
        // autoIncrement: false,
        // defaultValue: Sequelize.UUIDV4,
        // type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      genres: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      // song: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'songs', // name of Source model
      //     key: 'id' // key in Source model that we're referencing
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'SET NULL'
      // },
      description: {
        type: Sequelize.STRING
      },
      albums: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('artists');
  }
};
