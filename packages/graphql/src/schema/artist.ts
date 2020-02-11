import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    artists: [Artist]
    artist(id: ID!): Artist
    searchArtists(query: String!): [Artist]
  }

  type Artist {
    name: String
    genre: String
    id: ID
    createdAt: Date
    updatedAt: Date
  }
`;
