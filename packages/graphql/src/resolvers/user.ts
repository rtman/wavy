import {} from 'graphql';
import {
  User,
  MutationResolvers,
  Scalars,
  QueryResolvers,
  Query,
} from '../types';
import {sequelize} from '../models';
import {QueryTypes} from 'sequelize';
import {TimeoutError} from 'bluebird';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

export const userResolvers: Resolvers = {
  Query: {
    users: async (_parent, _args, ctx): Promise<Query['users']> => {
      return await ctx.models.User.findAll();
    },
    userById: async (_parent, args, ctx): Promise<Query['userById']> => {
      const {id} = args;
      const result = await ctx.models.User.findByPk(id);
      return result;
    },
  },
  Mutation: {
    createUser: async (_parent, args, ctx): Promise<User> => {
      return await ctx.models.User.create(args);
    },
    deleteUser: async (
      _parent,
      args,
      {models},
    ): Promise<Scalars['Boolean']> => {
      const {id} = args;
      return await models.user.destroy({
        where: {id},
      });
    },
  },
};
