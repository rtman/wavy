'use strict';

module.exports = {
  up: async (queryInterface) => {
    return await queryInterface.bulkInsert('songPlaylist', [
      {
        songId: '1219f0dc-b472-4832-9bd9-23e101b0596d',
        playlistId: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        songId: 'e9ebfe67-5913-4a41-86d2-dd43ab55e353',
        playlistId: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        songId: '14e987b4-a1c8-4517-9e50-1398c2b52279',
        playlistId: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        songId: '6b4971fd-1751-4878-9be8-a8055f8951c3',
        playlistId: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        songId: '4ffc70f7-4aaa-4796-84a8-0b1305278937',
        playlistId: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        songId: 'e89c53a4-477b-4b86-ac7c-16b6ad292e5c',
        playlistId: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        songId: 'c5e4e4b4-29d7-4e32-b910-ed3591d27858',
        playlistId: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        songId: '7ee03d70-294a-4221-8d67-c88062b5cf2f',
        playlistId: '9cf2e2ed-932b-4e98-bb6a-39c1e324dc10',
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete('songPlaylist', null, {});
  },
};
