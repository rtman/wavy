import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    playlists: [Playlist]
    playlistsByIds(ids: [ID]!): [Playlist]
    searchPlaylists(query: String!): [Playlist]
  }

  extend type Mutation {
    createPlaylist(
      playlist_title: String!
      playlist_description: String
    ): Playlist!
    updatePlaylistInfo(
      playlist_id: ID!
      playlist_title: String
      playlist_description: String
      playlist_image: String
    ): Playlist
    # addPlaylistSongs(playlist_id: ID!, song_ids: [ID]!): Boolean!
    # removePlaylistSongs(playlist_id: ID!, song_ids: [ID]!): Boolean!
    deletePlaylist(playlist_id: ID!): Int!
  }

  type Playlist {
    playlist_id: ID
    playlist_title: String
    playlist_description: String
    playlist_image: String
    playlist_songs: [Song]
    playlist_users: [User]
    playlist_createdAt: Date
    playlist_updatedAt: Date
  }
`;
