import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    helloWorld: String!
  }
`;

// type Query {
//     notes: [Note!]
//     note(id: ID!): Note!
// }

// type Note {
//     id: ID!
//     text: String!
// }
