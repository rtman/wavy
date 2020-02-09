'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn(
        'songs', // name of Target model
        'artistId', // name of the key we're addin
        {
          // type: Sequelize.UUID,
          type: Sequelize.Integer,
          references: {
            model: 'artists', // name of Source model
            key: 'id' // key in Source model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        }
      )
      .then(() => {
        return queryInterface.addColumn(
          'artists', // name of Target model
          'songId', // name of the key we're addin
          {
            // type: Sequelize.UUID,
            type: Sequelize.Integer,
            references: {
              model: 'song', // name of Source model
              key: 'id' // key in Source model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
          }
        );
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .removeColumn(
        'songs', // name of Target model
        'artistId' // key we want to remove
      )
      .then(() => {
        return queryInterface.removeColumn(
          'artists', // name of Target model
          'songId' // key we want to remove
        );
      });
  }
};
