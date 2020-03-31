import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    playlists: [Playlist]
    playlistById(id: ID!): Playlist
    playlistsByUserId(userId: String!): [Playlist]
    searchPlaylists(query: String!): [Playlist]
  }

  extend type Mutation {
    createPlaylist(
      userId: String!
      title: String!
      description: String
    ): Playlist!
    updatePlaylistInfo(
      id: ID!
      title: String
      description: String
      image: String
    ): Playlist
    addPlaylistSongs(id: ID!, songIds: [ID]!): Boolean!
    removePlaylistSongs(id: ID!, songIds: [ID]!): Boolean!
    deletePlaylist(id: ID!): Int!
  }

  type Playlist {
    id: ID
    title: String
    description: String
    image: String
    songs: [Song]
    users: [User]
    createdAt: Date
    updatedAt: Date
  }
`;
