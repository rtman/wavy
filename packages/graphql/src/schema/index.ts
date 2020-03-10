import {gql} from 'apollo-server-express';

import artistSchema from './artist';
import albumSchema from './album';
import joinedSchema from './joined';
import songSchema from './song';

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

export default [
  artistSchema,
  albumSchema,
  joinedSchema,
  linkSchema,
  songSchema,
];
