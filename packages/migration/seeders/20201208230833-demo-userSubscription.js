'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('userSubscription', [
      {
        id: 'a615ffe3-6449-49fb-82dc-dc50779c9ad8',
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        entity: 'Artist',
        sortBy: 'Top',
        active: true,
        favourited: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '58a8c6d7-72ff-454e-84b8-93618b3df154',
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        entity: 'Album',
        sortBy: 'New',
        active: true,
        favourited: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '8bcb6e28-3dea-439c-8583-031b253bdd58',
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        entity: 'Label',
        sortBy: 'Random',
        active: true,
        favourited: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '9ee31c5e-e98b-4d36-9815-bcf0b5d78b7e',
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        entity: 'Song',
        sortBy: 'Top',
        payload: 'jazz',
        active: true,
        favourited: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ef671fd6-f242-4d53-a012-fd05cdf2f7be',
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        entity: 'Song',
        sortBy: 'New',
        payload: 'hiphop',
        active: true,
        favourited: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'e18cf435-4864-46e2-8565-5ffe8914729d',
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        entity: 'Song',
        sortBy: 'Random',
        payload: 'house',
        active: true,
        favourited: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('userSubscription', null, {});
  },
};
