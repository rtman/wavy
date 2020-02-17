import {gql} from 'apollo-server-express';

import songSchema from './song';
import artistSchema from './artist';
import albumSchema from './album';

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

export default [artistSchema, albumSchema, linkSchema, songSchema];
