import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    artists: [Artist]
    artistById(id: ID!): Artist
    artistsById(ids: [ID]!): [Artist]
    searchArtists(query: String!): [Artist]
  }

  extend type Mutation {
    createNewArtist(name: String!, image: String, description: String): Artist!
    deleteArtist(id: ID!): Int!
  }

  type Artist {
    id: ID
    name: String
    albums: [Album]
    songs: [Song]
    image: String
    description: String
    usersFollowing: [User]
    createdAt: Date
    updatedAt: Date
  }
`;
