import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    songs: [Song]
    song(id: ID!): Song
  }

  extend type Mutation {
    createNewSong(title: String!, artist: String!): Song!
    updateSongTitle(id: ID!, title: String!): Song!
    deleteSong(id: ID!): Boolean!
  }

  type Song {
    title: String
    artist: String
    id: ID
    createdAt: Date
    updatedAt: Date
  }
`;
