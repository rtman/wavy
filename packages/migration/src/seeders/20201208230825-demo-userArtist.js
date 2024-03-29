'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('userArtist', [
      {
        userId: '3WkOZ9SdaZOu6grNQPPd8dhV4vC3',
        artistId: 'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('userArtist', null, {});
  },
};
