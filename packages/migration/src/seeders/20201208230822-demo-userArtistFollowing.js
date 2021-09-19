'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('userArtistFollowing', [
      {
        userId: '3WkOZ9SdaZOu6grNQPPd8dhV4vC3',
        artistId: '30f65df5-98bb-48cd-83e5-867f707f941d',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: '3WkOZ9SdaZOu6grNQPPd8dhV4vC3',
        artistId: '81a033ac-7431-4a42-a3db-3eb19b3158ae',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: '3WkOZ9SdaZOu6grNQPPd8dhV4vC3',
        artistId: '19c31f4a-d0a6-48d8-b99c-433bf3155a86',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: '3WkOZ9SdaZOu6grNQPPd8dhV4vC3',
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: '4sQjPUevFgOcQyPjCrHNerNPZmi1',
        artistId: '2be2c355-497d-40bb-8739-cd07823ab8d0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('userArtistFollowing', null, {});
  },
};
