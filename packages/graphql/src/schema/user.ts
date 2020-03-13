import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User]
    userById(id: String!): User
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
    deleteUser(id: ID!): Boolean!
  }

  type User {
    id: String
    firstName: String
    lastName: String
    email: String
    password: String
    favourites: [ID]
    following: [ID]
    recentlyPlayed: [ID]
    playlists: [ID]
  }
`;
