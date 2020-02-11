import {gql} from 'apollo-server-express';

import songSchema from './song';
import artistSchema from './artist';

const linkSchema = gql`
  scalar Date
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, songSchema, artistSchema];
