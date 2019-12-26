// resolverMap.ts
import { IResolvers } from 'graphql-tools';
import { songs } from './models';

export const resolvers: IResolvers = {
  Query: {
    songs: () => songs
  }
};
