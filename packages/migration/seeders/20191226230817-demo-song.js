'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Songs',
      [
        {
          title: 'The Bells',
          artist: 'Jeff Mills',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Firestarter',
          artist: 'The Prodigy',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Baby likes to ride',
          artist: 'Frankie Knuckles',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Kinda blue',
          artist: 'Miles Davis',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
