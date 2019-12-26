// resolverMap.ts
import { IResolvers } from 'graphql-tools';
import { books } from './models';

export const resolvers: IResolvers = {
  Query: {
    books: () => books
  }
};
