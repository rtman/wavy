import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    playlists: [Playlist]
    playlistsByIds(ids: [ID]!): [Playlist]
    playlistsByUserId(userId: ID!): [Playlist]
    playlistByIdWithSongs(id: ID!): PlaylistWithSongsJoinedFormatted
    searchPlaylists(query: String!): [Playlist]
  }

  extend type Mutation {
    createPlaylist(
      title: String!
      description: String!
      image: String
      user_ids: [ID]!
      songs: [ID]
    ): Playlist!
    deletePlaylist(id: ID!): Boolean!
  }

  type Playlist {
    id: ID
    title: String
    description: String
    image: String
    user_ids: [ID]
    songs: [ID]
  }
`;
