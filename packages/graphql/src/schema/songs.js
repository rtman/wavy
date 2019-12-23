import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    songs: [Song!]
    song(id: ID!): Song!
  }

  type Song {
    id: ID!
    title: String!
  }
`;
