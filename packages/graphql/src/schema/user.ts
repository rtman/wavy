import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User]
    userById(user_id: String!): User
    searchUsers(query: String!): [User]
  }

  extend type Mutation {
    createUser(
      user_id: String!
      user_firstName: String!
      user_lastName: String!
      user_email: String!
      user_password: String!
    ): User!
    updateFollowing(id: String!, artistId: ID!): Boolean!
    updateFavourites(id: String!, songId: ID!): Boolean!
    updatePlaylists(id: String!, playlistId: ID!): Boolean!
    updateRecentlyPlayed(id: String!, songId: ID!): Boolean!
    deleteUser(id: String!): Int!
  }

  type User {
    user_id: String
    user_firstName: String
    user_lastName: String
    user_email: String
    user_password: String
    user_favourites: [Song]
    user_following: [Artist]
    user_recently_played: [Song]
    user_playlists: [Playlist]
  }
`;
