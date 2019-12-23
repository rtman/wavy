import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    songs: [Song!]
    song(id: ID!): Song!
  }

  extend type Mutation {
    createNewSong(text: String!): Song!
    deleteSong(id: ID!): Boolean!
    updateSong(id: ID!, title: String!): Song!
  }

  type Song {
    id: ID!
    title: String!
  }
`;
