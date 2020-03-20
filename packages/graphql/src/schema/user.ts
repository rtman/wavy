import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User]
    userById(id: String!): User
    userByIdWithPlaylists(id: String!): UserWithPLaylists
    # userByIdWithPlaylistsJoined(id: String!): UserWithPlaylistsJoined
    # userByIdWithFavourites(id: ID!): UserWithSongsAlbumsJoinedFormatted
    searchUsers(query: String!): [User]
  }

  extend type Mutation {
    createUser(
      id: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      favourites: [ID]
      following: [ID]
      recentlyPlayed: [ID]
      playlists: [ID]
    ): User!
    # updateFollowing(id: String!, artistId: ID!): Boolean!
    # updateFavourites(id: String!, songId: ID!): Boolean!
    # updatePlaylists(id: String!, playlistId: ID!): Boolean!
    # updateRecentlyPlayed(id: String!, songId: ID!): Boolean!
    deleteUser(id: String!): Boolean!
  }

  type User {
    user_id: String
    user_firstName: String
    user_lastName: String
    user_email: String
    user_password: String
    user_favourites: [ID]
    user_following: [ID]
    user_recentlyPlayed: [ID]
    # playlists: [ID]
  }

  type UserWithPLaylists {
    user_id: String
    user_firstName: String
    user_lastName: String
    user_email: String
    user_password: String
    user_favourites: [ID]
    user_following: [ID]
    user_recentlyPlayed: [ID]
    user_playlists: [Playlist]
  }
`;
