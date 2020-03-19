import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    playlists: [Playlist]
    playlistsByIds(ids: [ID]!): [Playlist]
    playlistsByUserId(userId: String!): [Playlist]
    playlistByIdWithSongs(id: ID!): PlaylistWithSongsJoinedFormatted
    searchPlaylists(query: String!): [Playlist]
  }

  extend type Mutation {
    createPlaylist(
      title: String!
      description: String!
      image: String
      user_ids: [String]!
      songs: [ID]
    ): Playlist!
    updatePlaylistInfo(title: String!, description: String!, id: ID!): Playlist
    addPlaylistSongs(id: ID!, song_ids: [ID]!): Boolean!
    removePlaylistSongs(id: ID!, song_ids: [ID]!): Boolean!
    deletePlaylist(id: ID!): Boolean!
  }

  type Playlist {
    id: ID
    title: String
    description: String
    image: String
    user_ids: [String]
    songs: [ID]
  }
`;
