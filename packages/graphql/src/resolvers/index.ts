// import { GraphQLDateTime } from 'graphql-iso-date';

import { songResolvers } from './song';
// import messageResolvers from './message';

// const customScalarResolver = {
//   Date: GraphQLDateTime,
// };

export default [
  //   customScalarResolver,
  songResolvers
];
