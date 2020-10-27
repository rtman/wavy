'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('userSubscription', [
      {
        id: 'a615ffe3-6449-49fb-82dc-dc50779c9ad8',
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        entityType: 'Artist',
        subscriptionType: 'Top',
        followerSubscription: false,
        active: true,
        favourited: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '58a8c6d7-72ff-454e-84b8-93618b3df154',
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        entityType: 'Album',
        subscriptionType: 'New',
        followerSubscription: false,
        active: true,
        favourited: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '8bcb6e28-3dea-439c-8583-031b253bdd58',
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        entityType: 'Label',
        subscriptionType: 'Random',
        followerSubscription: false,
        active: true,
        favourited: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '9ee31c5e-e98b-4d36-9815-bcf0b5d78b7e',
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        entityType: 'Song',
        subscriptionType: 'Top',
        tag: 'jazz',
        followerSubscription: false,
        active: true,
        favourited: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ef671fd6-f242-4d53-a012-fd05cdf2f7be',
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        entityType: 'Song',
        subscriptionType: 'New',
        tag: 'hiphop',
        followerSubscription: false,
        active: true,
        favourited: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'e18cf435-4864-46e2-8565-5ffe8914729d',
        userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        entityType: 'Song',
        subscriptionType: 'Random',
        tag: 'house',
        followerSubscription: false,
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
