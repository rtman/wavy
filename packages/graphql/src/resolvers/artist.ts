// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';
import {} from 'graphql';
import {
  Artist,
  MutationResolvers,
  Scalars,
  QueryResolvers,
  Query,
  // SubscriptionResolvers
} from '../types';
import {sequelize} from '../models';
import {QueryTypes} from 'sequelize';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

export const artistResolvers: Resolvers = {
  Query: {
    artists: async (_parent, _args, ctx): Promise<Query['artists']> => {
      return await ctx.models.Artist.findAll();
    },
    artist: async (_parent, args, ctx): Promise<Query['artist']> => {
      const {id} = args;
      return await ctx.models.Artist.findByPk(id);
    },
    searchArtists: async (_parent, args): Promise<Query['searchArtists']> => {
      const {query} = args;
      return await sequelize.query(
        `SELECT * FROM artists AS artist WHERE artist ==> '${query}';`,
        {type: QueryTypes.SELECT},
      );
      // query with LEFT JOIN
      // return await sequelize.query(
      //   `SELECT artists.*, artists.name FROM artists LEFT JOIN artists ON ("artist_id" = artists.id) WHERE artists ==> '${query}';`,
      //   {type: QueryTypes.SELECT},
      // );
    },
  },
  Mutation: {
    createNewArtist: async (_parent, args, ctx): Promise<Artist> => {
      return await ctx.models.artist.create(args);
    },
    deleteArtist: async (
      _parent,
      args,
      {models},
    ): Promise<Scalars['Boolean']> => {
      const {id} = args;
      return await models.artist.destroy({
        where: {id},
      });
    },
  },
};
