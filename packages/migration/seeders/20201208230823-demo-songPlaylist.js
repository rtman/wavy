'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('song_playlist', [
      {
        song_id: '1219f0dc-b472-4832-9bd9-23e101b0596d',
        playlist_id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        song_id: 'e9ebfe67-5913-4a41-86d2-dd43ab55e353',
        playlist_id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        song_id: '14e987b4-a1c8-4517-9e50-1398c2b52279',
        playlist_id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        song_id: '6b4971fd-1751-4878-9be8-a8055f8951c3',
        playlist_id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        song_id: '4ffc70f7-4aaa-4796-84a8-0b1305278937',
        playlist_id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        song_id: 'e89c53a4-477b-4b86-ac7c-16b6ad292e5c',
        playlist_id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        song_id: 'c5e4e4b4-29d7-4e32-b910-ed3591d27858',
        playlist_id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        song_id: '7ee03d70-294a-4221-8d67-c88062b5cf2f',
        playlist_id: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('song_playlist', null, {});
  }
};
