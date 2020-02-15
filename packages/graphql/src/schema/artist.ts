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
      name: String!
      albums: [String]
      image: String
      description: String
    ): Artist!
    deleteArtist(id: ID!): Boolean!
  }

  type Artist {
    name: String
    albums: [String]
    description: String
    image: String
    id: ID
    createdAt: Date
    updatedAt: Date
  }
`;
