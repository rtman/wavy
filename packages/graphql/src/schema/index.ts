import { gql } from 'apollo-server-express';

import artistSchema from './artist';
import albumSchema from './album';
import playlistSchema from './playlist';
import songSchema from './song';
import userSchema from './user';

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
  linkSchema,
  playlistSchema,
  songSchema,
  userSchema,
];
