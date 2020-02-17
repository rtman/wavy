// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';
import {} from 'graphql';
import {
  Album,
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

export const albumResolvers: Resolvers = {
  Query: {
    albums: async (_parent, _args, ctx): Promise<Query['albums']> => {
      return await ctx.models.Album.findAll();
    },
    album: async (_parent, args, ctx): Promise<Query['album']> => {
      const {id} = args;
      return await ctx.models.Album.findByPk(id);
    },
    searchAlbums: async (_parent, args): Promise<Query['searchAlbums']> => {
      const {query} = args;
      return await sequelize.query(
        `SELECT * FROM albums AS album WHERE album ==> '${query}';`,
        {type: QueryTypes.SELECT},
      );
      // query with LEFT JOIN
      // return await sequelize.query(
      //   `SELECT albums.*, albums.name FROM albums LEFT JOIN albums ON ("album_id" = albums.id) WHERE albums ==> '${query}';`,
      //   {type: QueryTypes.SELECT},
      // );
    },
  },
  Mutation: {
    createNewAlbum: async (_parent, args, ctx): Promise<Album> => {
      return await ctx.models.album.create(args);
    },
    deleteAlbum: async (
      _parent,
      args,
      {models},
    ): Promise<Scalars['Boolean']> => {
      const {id} = args;
      return await models.album.destroy({
        where: {id},
      });
    },
  },
};
