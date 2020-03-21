'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('users', [
      {
        user_id: 'H2qAdR0c81c3xGFk5PmgDXKAjis1',
        user_firstName: 'Ryan',
        user_lastName: 'Trann',
        user_email: 'ryanjtrann@gmail.com',
        user_password: '123456',
        // user_favourites: [
        //   'fc0be79a-274a-4bf8-98a5-b580b7a1bac5',
        //   '0694f13e-f8ca-406d-8b6b-fd081e1c930a',
        //   '995d0081-63ee-4fc2-8a61-fc67928c4a12'
        // ],
        // user_recentlyPlayed: [
        //   'ef8bfa7c-d2b4-49b5-9da9-17978be4e9a4',
        //   '3c3d5f29-d675-41b3-8ed6-c2c781c3a606',
        //   '0eaaa270-9373-458b-a6d6-7fd013931245',
        //   '20872940-4952-4d3e-84b7-d68529af7a91'
        // ],
        // user_following: [
        //   '30f65df5-98bb-48cd-83e5-867f707f941d',
        //   'cc0b75c3-4b65-4c9e-b2bc-0eccbf46bb91',
        //   'a4dbf9ca-9c33-41f3-b1b1-b61355f82aac'
        // ],
        // playlists: Sequelize.literal(`ARRAY['9cf2e2ed-932b-4e98-bb6a-39c1e324dc09']::"uuid"[]`),
        user_createdAt: new Date(),
        user_updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('users', null, {});
  }
};
