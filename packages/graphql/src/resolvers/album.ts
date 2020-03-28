// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';
import {} from 'graphql';
import {
  MutationResolvers,
  Scalars,
  QueryResolvers,
  // SubscriptionResolvers
} from '../types';
import {Models, sequelize} from 'orm';
import {QueryTypes} from 'sequelize';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

export const albumResolvers: Resolvers = {
  Query: {
    albums: async (_parent, _args, ctx): Promise<Models.Album[]> => {
      return await ctx.models.Album.findAll();
    },
    albumById: async (_parent, args, ctx): Promise<Models.Album> => {
      const {id} = args;
      return await ctx.models.Album.findByPk(id, {
        include: [
          {
            model: Models.Song,
            as: 'songs',
            include: [
              {model: Models.Artist, as: 'artist'},
              {model: Models.Album, as: 'album'},
            ],
          },
          {
            model: Models.Artist,
            as: 'artist',
          },
        ],
      });
    },
    searchAlbums: async (_parent, args, _ctx): Promise<Models.Album[]> => {
      const {query} = args;
      return await sequelize.query(
        `SELECT * FROM albums AS album WHERE album ==> '${query}';`,
        {type: QueryTypes.SELECT},
      );
    },
  },
  Mutation: {
    createNewAlbum: async (_parent, args, ctx): Promise<Models.Album> => {
      return await ctx.models.Album.create(args);
    },
    deleteAlbum: async (_parent, args, ctx): Promise<Scalars['Int']> => {
      const {id} = args;
      return await ctx.models.Album.destroy({
        where: {id},
      });
    },
  },
};
