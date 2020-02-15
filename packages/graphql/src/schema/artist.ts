import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    artists: [Artist]
    artist(id: ID!): Artist
    searchArtists(query: String!): [Artist]
    searchArtistsWithSongs(query: String!): [SongArtist]
  }

  extend type Mutation {
    createNewArtist(
      title: String!
      albums: [String]
      description: String
    ): Artist!
    deleteArtist(id: ID!): Boolean!
  }

  type Artist {
    name: String
    albums: [String]
    description: String
    id: ID
    createdAt: Date
    updatedAt: Date
  }
`;
