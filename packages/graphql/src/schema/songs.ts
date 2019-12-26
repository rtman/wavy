import { gql } from 'apollo-server-express';

// export const typeDefs = gql`
//   type Query {
//     notes: [Note!]
//     note(id: ID!): Note!
//   }

//   type Mutation {
//     createNewNote(text: String!): Note!
//     deleteNote(id: ID!): Boolean!
//     updateNote(id: ID!, text: String!): Note!
//   }

//   type Note {
//     id: ID!
//     text: String!
//   }
// `;

export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Song" type defines the queryable fields for every song in our data source.
  type Song {
    title: String
    artist: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    songs: [Song]
  }
`;
