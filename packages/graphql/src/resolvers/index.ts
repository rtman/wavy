// import { GraphQLDateTime } from 'graphql-iso-date';

import {albumResolvers} from './album';
import {artistResolvers} from './artist';
import {songResolvers} from './song';
import {playlistResolvers} from './playlist';
import {userResolvers} from './user';

// import messageResolvers from './message';

// const customScalarResolver = {
//   Date: GraphQLDateTime,
// };

export default [
  // artistResolvers,
  // albumResolvers,
  // songResolvers,
  playlistResolvers,
  userResolvers,
];
