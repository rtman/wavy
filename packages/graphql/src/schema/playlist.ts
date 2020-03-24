import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    playlists: [Playlist]
    playlistsByIds(ids: [ID]!): [Playlist]
    searchPlaylists(query: String!): [Playlist]
  }

  extend type Mutation {
    createPlaylist(title: String!, description: String): Playlist!
    updatePlaylistInfo(
      id: ID!
      title: String
      description: String
      image: String
    ): Playlist
    # addPlaylistSongs(id: ID!, song_ids: [ID]!): Boolean!
    # removePlaylistSongs(id: ID!, song_ids: [ID]!): Boolean!
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
